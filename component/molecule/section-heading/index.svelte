<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';
	import type { RecipeSectionHeading } from '$stylist/layout/interface/recipe/section-heading';

	let { eyebrow, title, level = 2, class: className = '' }: RecipeSectionHeading = $props();
</script>

<HtmlDiv class={['layout-section-heading', className].filter(Boolean).join(' ')}>
	{#if eyebrow}
		<Text
			text={eyebrow}
			class="layout-section-heading__eyebrow"
			fontSize="3"
			fontWeight="extrabold"
			textTransform="uppercase"
			block
		/>
	{/if}
	<Heading {level} text={title} class="layout-section-heading__title" />
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-section-heading) {
				max-width: var(--section-heading-max-width, 42rem);
			}
			:where(.layout-section-heading__eyebrow) {
				margin: 0 0 var(--space-3);
				--typography-color: var(--section-heading-eyebrow-color, currentColor);
			}
			:where(.layout-section-heading__title) {
				margin: 0 0 var(--space-4);
				--typography-font-size: var(
					--section-heading-title-size,
					clamp(var(--font-size-8), 4cqw, 3.5rem)
				);
				--typography-color: var(--section-heading-title-color, inherit);
			}
		}
	}
</style>
