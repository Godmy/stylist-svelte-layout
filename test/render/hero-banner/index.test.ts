import { render, cleanup, fireEvent } from '@testing-library/svelte';
import { afterEach, expect, test, vi } from 'vitest';
import Hero from '$stylist/layout/component/organism/hero-banner/index.svelte';
afterEach(() => {
	cleanup();
	vi.unstubAllGlobals();
});
test('hero accepts independent image and disconnects observers on unmount', () => {
	const disconnect = vi.fn();
	vi.stubGlobal(
		'ResizeObserver',
		class {
			observe() {}
			disconnect = disconnect;
		}
	);
	const view = render(Hero, {
		image: {
			src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>',
			alt: 'Landscape',
			width: 1200,
			height: 600
		},
		height: '20rem',
		heading: 'A banner',
		showDown: false
	});
	expect(view.getByAltText('Landscape')).not.toBeNull();
	expect(view.getByRole('heading', { name: 'A banner' })).not.toBeNull();
	expect(view.container.querySelector('.hero')?.getAttribute('style')).toContain('20rem');
	view.unmount();
	expect(disconnect).toHaveBeenCalled();
});
