<script lang="ts">
	import type { RecipeFeatureItems } from '$stylist/layout/interface/recipe/feature-items';

	let { id, items, ariaLabel, class: className = '' }: RecipeFeatureItems = $props();
</script>

<section {id} class="feature-items {className}" aria-label={ariaLabel}>
	<div class="feature-items__grid">
		{#each items as [value, caption], index (index)}
			<div class="feature-items__item">
				<strong>{value}</strong>
				<span>{caption}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.feature-items__grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--feature-items-gap, var(--space-3));
	}

	.feature-items__item {
		min-height: var(--feature-items-min-height, 7.25rem);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-3);
		padding: var(--feature-items-padding, var(--space-4));
		border: 1px solid var(--feature-items-border, currentColor);
		border-radius: var(--radius-2);
		background: var(--feature-items-background, transparent);
	}

	.feature-items__item strong {
		color: var(--feature-items-value, currentColor);
		font-size: var(--feature-items-value-size, var(--font-size-6));
		line-height: var(--line-height-tight);
	}

	.feature-items__item span {
		color: var(--feature-items-text, currentColor);
		font-size: var(--feature-items-text-size, var(--font-size-3-5));
		line-height: var(--line-height-normal);
	}

	@container (max-width: 680px) {
		.feature-items__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
