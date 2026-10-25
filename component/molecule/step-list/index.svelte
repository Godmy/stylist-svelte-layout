<script lang="ts">
	import type { RecipeStepList } from '$stylist/layout/interface/recipe/step-list';

	let { steps, columns = 1, class: className = '' }: RecipeStepList = $props();

	const items = $derived(steps.map((step) => (typeof step === 'string' ? { title: step } : step)));
</script>

<ol
	class="step-list {columns > 1 ? 'step-list--grid' : ''} {className}"
	style:--step-list-columns={columns}
>
	{#each items as step, index (index)}
		<li class="step-list__item">
			{#if step.text}
				<strong class="step-list__title">{step.title}</strong>
				<span class="step-list__text">{step.text}</span>
			{:else}
				<span class="step-list__text">{step.title}</span>
			{/if}
		</li>
	{/each}
</ol>

<style>
	.step-list {
		display: grid;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: step-list;
	}

	.step-list--grid {
		grid-template-columns: repeat(var(--step-list-columns), minmax(0, 1fr));
		gap: var(--space-8);
	}

	.step-list__item {
		counter-increment: step-list;
		position: relative;
		display: grid;
		gap: var(--space-1);
		min-height: var(--space-12);
		padding-left: var(--space-12);
		color: var(--step-list-text, currentColor);
		font-size: var(--font-size-4);
		line-height: var(--line-height-relaxed);
	}

	.step-list__item::before {
		content: counter(step-list, decimal-leading-zero);
		position: absolute;
		left: 0;
		top: var(--space-0-5);
		width: var(--space-8);
		height: var(--space-8);
		display: inline-grid;
		place-items: center;
		border: 1px solid var(--step-list-marker-border, currentColor);
		border-radius: var(--radius-1-5);
		color: var(--step-list-marker-color, currentColor);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-extrabold);
	}

	.step-list__title {
		color: var(--step-list-title, currentColor);
		font-size: var(--font-size-4-5);
		line-height: var(--line-height-snug);
	}

	@container (max-width: 820px) {
		.step-list--grid {
			grid-template-columns: 1fr;
		}
	}
</style>
