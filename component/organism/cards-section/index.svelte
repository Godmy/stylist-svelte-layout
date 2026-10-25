<script lang="ts">
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

<section {id} class="cards-section {className}" aria-label={ariaLabel}>
	<SectionHeading {eyebrow} {title} class="cards-section__heading" />

	<div class="cards-section__grid">
		{#each items as item, index (index)}
			<Card
				class="cards-section__card {index < wideCount ? 'cards-section__card--wide' : ''}"
				shape="rounded"
				size="xl"
			>
				{#snippet media()}
					<Image imageSrc={item.image} imageAlt={item.alt} size="xl" class="cards-section__image" />
				{/snippet}
				{#if item.kicker}
					<Text
						text={item.kicker}
						class="cards-section__kicker"
						fontSize="3"
						fontWeight="extrabold"
						textTransform="uppercase"
						block
					/>
				{/if}
				<Heading level={3} text={item.title} class="cards-section__title" />
				<Paragraph text={item.body} class="cards-section__body" />
				{#if item.result}
					<Text text={item.result} class="cards-section__result" block />
				{/if}
			</Card>
		{/each}
	</div>
</section>

<style>
	.cards-section {
		padding: var(--space-16) 0 var(--space-20);
	}

	:global(.cards-section__heading) {
		--section-heading-max-width: 100%;
	}

	.cards-section__grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: var(--space-6);
		margin-top: var(--space-12);
	}

	:global(.cards-section__card) {
		grid-column: span 2;
		border-color: var(--cards-section-border, currentColor);
		background: var(--cards-section-panel-bg, transparent);
	}

	:global(.cards-section__card .layout-card__body) {
		gap: var(--space-3);
	}

	:global(.cards-section__card--wide) {
		grid-column: span 3;
	}

	:global(.cards-section__image) {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
		border-bottom: 1px solid var(--cards-section-border, currentColor);
	}

	:global(.cards-section__kicker) {
		--typography-color: var(--cards-section-accent, currentColor);
	}

	:global(.cards-section__title) {
		margin: 0;
		--typography-color: var(--cards-section-heading, currentColor);
	}

	:global(.cards-section__body) {
		margin-top: var(--space-1);
		--typography-color: var(--cards-section-text, currentColor);
	}

	:global(.cards-section__result) {
		display: block;
		margin-top: var(--space-3);
		--typography-color: var(--cards-section-result, currentColor);
		--typography-font-weight: var(--font-weight-bold);
		font-size: var(--font-size-3-5);
		line-height: var(--line-height-normal);
	}

	@container (max-width: 920px) {
		:global(.cards-section__card),
		:global(.cards-section__card--wide) {
			grid-column: span 3;
		}
	}

	@container (max-width: 680px) {
		.cards-section__grid {
			grid-template-columns: 1fr;
		}

		:global(.cards-section__card),
		:global(.cards-section__card--wide) {
			grid-column: auto;
		}
	}
</style>
