import { describe, expect, it } from 'vitest';
import { HTML_LAYER_ORDER } from '$stylist/html/const/array/html-layer-order';

// Layout blocks sit under the html skin: the canonical layer order, zero-specificity selectors,
// and no base typography of their own, so the skin, the theme and consumer classes win.
const sources = import.meta.glob<string>('../../../component/*/*/index.svelte', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const entries = Object.entries(sources).map(([path, source]) => ({
	family: path.replace('../../../component/', '').replace('/index.svelte', ''),
	css: source.slice(source.indexOf('<style>'), source.indexOf('</style>'))
}));

/** Selector lines of the stylesheet: everything before `{` that is not an at-rule or keyframe. */
function selectors(css: string): string[] {
	return css
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.endsWith('{') && !line.startsWith('@') && line !== ':global {')
		.map((line) => line.slice(0, -1).trim())
		.filter((selector) => !/^(\d+%|from|to)(,|$)/.test(selector))
		.flatMap((selector) => selector.split(/,(?![^(]*\))/).map((part) => part.trim()))
		.filter(Boolean);
}

describe('layout style layer', () => {
	it('covers every layout component', () => {
		expect(entries.length).toBeGreaterThan(20);
	});

	it.each(entries)('$family orders the layers and keeps rules in @layer layout', ({ css }) => {
		expect(css).toContain(`@layer ${HTML_LAYER_ORDER.join(', ')};`);
		expect(css).toContain('@layer layout {');
	});

	it.each(entries)('$family uses zero-specificity selectors', ({ css }) => {
		for (const selector of selectors(css)) expect(selector).toMatch(/^:where\(/);
	});

	it.each(entries)('$family leaves the font family and body line height to the skin', ({ css }) => {
		expect(css).not.toMatch(/font-family\s*:/);
		expect(css).not.toMatch(/line-height:\s*var\(--line-height-(normal|relaxed)/);
	});
});
