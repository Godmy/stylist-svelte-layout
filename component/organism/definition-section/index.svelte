<script lang="ts">
	import DividerHeadingImageText from '$stylist/image/component/molecule/divider-heading-image-text/index.svelte';
	import type { RecipeDefinitionSection } from '$stylist/layout/interface/recipe/definition-section';

	let {
		id,
		ariaLabel,
		eyebrow,
		text,
		body,
		paragraphs,
		imageSrc,
		imageAlt,
		class: className = ''
	}: RecipeDefinitionSection = $props();
</script>

<DividerHeadingImageText
	{id}
	{ariaLabel}
	dividerLabel={eyebrow}
	{text}
	{body}
	{paragraphs}
	{imageSrc}
	{imageAlt}
	class={['layout-definition-section', className].filter(Boolean).join(' ')}
/>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-definition-section) {
				padding: 0 0 calc(var(--space-20) * var(--density-scale, 1));
				--divider-heading-image-text-heading: var(--definition-section-heading, currentColor);
				--divider-heading-image-text-border: var(--definition-section-border, currentColor);
				--divider-heading-image-text-media-bg: var(--definition-section-media-bg, transparent);
				--divider-heading-image-text-media-shadow: var(
					--definition-section-media-shadow,
					var(--elevation-card)
				);
				--divider-heading-image-text-text: var(--definition-section-text, currentColor);
				--divider-heading-image-text-text-max-width: 100%;
			}
		}
	}
</style>
