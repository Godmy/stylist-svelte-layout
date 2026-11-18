<script lang="ts">
	import HeroBanner from '$stylist/layout/component/organism/hero-banner/index.svelte';
	import type { RecipeHeroBanner } from '$stylist/layout/interface/recipe/hero-banner';
	let props: RecipeHeroBanner = $props();
</script>

<HeroBanner {...props}>
	{#snippet overlay()}<div class="_overlay">
			<h2>From ideas to useful systems</h2>
			<p>The caption stays inside the visible image while the panorama scrolls.</p>
		</div>{/snippet}
</HeroBanner>

<style>
	._overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		padding: clamp(1rem, 5cqw, 3rem);
		color: white;
		text-shadow: 0 2px 12px #000;
	}
	h2 {
		font-size: clamp(1.25rem, 7cqw, 3.5rem);
		line-height: 1.1;
		text-wrap: balance;
	}
	p {
		font-size: clamp(0.75rem, 3cqw, 1rem);
		max-width: 36rem;
	}
</style>
