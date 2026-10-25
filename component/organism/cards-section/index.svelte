<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import SectionHeading from '$stylist/layout/component/molecule/section-heading/index.svelte';
	import Card from '$stylist/image/component/molecule/card/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import type { RecipeCardsSection } from '$stylist/layout/interface/recipe/cards-section';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		items,
		wideCount = 2,
		class: className = ''
	}: RecipeCardsSection = $props();
</script>

<HtmlSection
	{id}
	class={['layout-cards-section', className].filter(Boolean).join(' ')}
	aria-label={ariaLabel}
>
	<SectionHeading {eyebrow} {title} class="layout-cards-section__heading" />

	<HtmlDiv class="layout-cards-section__grid">
		{#each items as item, index (index)}
			<Card
				class={[
					'layout-cards-section__card',
					index < wideCount && 'layout-cards-section__card--wide'
				]
					.filter(Boolean)
					.join(' ')}
				shape="rounded"
				size="xl"
			>
				{#snippet media()}
					<Image
						imageSrc={item.image}
						imageAlt={item.alt}
						size="xl"
						class="layout-cards-section__image"
					/>
				{/snippet}
				{#if item.kicker}
					<Text
						text={item.kicker}
						class="layout-cards-section__kicker"
						fontSize="3"
						fontWeight="extrabold"
						textTransform="uppercase"
						block
					/>
				{/if}
				<Heading level={3} text={item.title} class="layout-cards-section__title" />
				<Paragraph text={item.body} class="layout-cards-section__body" />
				{#if item.result}
					<Text text={item.result} class="layout-cards-section__result" block />
				{/if}
			</Card>
		{/each}
	</HtmlDiv>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-cards-section) {
				padding: calc(var(--space-16) * var(--density-scale, 1)) 0
					calc(var(--space-20) * var(--density-scale, 1));
			}
			:where(.layout-cards-section__heading) {
				--section-heading-max-width: 100%;
			}
			:where(.layout-cards-section__grid) {
				display: grid;
				grid-template-columns: repeat(6, minmax(0, 1fr));
				gap: calc(var(--space-6) * var(--density-scale, 1));
				margin-top: calc(var(--space-12) * var(--density-scale, 1));
			}
			:where(.layout-cards-section__card) {
				grid-column: span 2;
				border-color: var(--cards-section-border, currentColor);
				background: var(--cards-section-panel-bg, transparent);
			}
			:where(.layout-cards-section__card .layout-card__body) {
				gap: calc(var(--space-3) * var(--density-scale, 1));
			}
			:where(.layout-cards-section__card--wide) {
				grid-column: span 3;
			}
			:where(.layout-cards-section__image) {
				display: block;
				width: 100%;
				aspect-ratio: 16 / 9;
				--image-width: 100%;
				--image-height: 100%;
				--image-radius: 0;
				--image-background: transparent;
				border-bottom: 1px solid var(--cards-section-border, currentColor);
			}
			:where(.layout-cards-section__kicker) {
				--typography-color: var(--cards-section-accent, currentColor);
			}
			:where(.layout-cards-section__title) {
				margin: 0;
				--typography-color: var(--cards-section-heading, inherit);
			}
			:where(.layout-cards-section__body) {
				margin-top: var(--space-1);
				--typography-color: var(--cards-section-text, inherit);
			}
			:where(.layout-cards-section__result) {
				display: block;
				margin-top: var(--space-3);
				--typography-color: var(--cards-section-result, inherit);
				--typography-font-weight: var(--font-weight-bold);
			}
			@container (max-width: 920px) {
				:where(.layout-cards-section__card),
				:where(.layout-cards-section__card--wide) {
					grid-column: span 3;
				}
			}
			@container (max-width: 680px) {
				:where(.layout-cards-section__grid) {
					grid-template-columns: 1fr;
				}
				:where(.layout-cards-section__card),
				:where(.layout-cards-section__card--wide) {
					grid-column: auto;
				}
			}
		}
	}
</style>
