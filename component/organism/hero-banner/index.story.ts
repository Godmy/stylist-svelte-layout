import StoryComponent from '$stylist/layout/component/organism/hero-banner/index.svelte';
import type { RecipeHeroBanner } from '$stylist/layout/interface/recipe/hero-banner';
import type { ContractStory } from '$stylist/html/interface/contract/story';
export default {
	component: StoryComponent,
	title: 'HeroBanner',
	description: 'Panoramic image with keyboard accessible panning and an optional overlay.',
	args: {
		image: {
			src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1600" height="600"%3E%3Cdefs%3E%3ClinearGradient id="sky"%3E%3Cstop stop-color="%23132348"/%3E%3Cstop offset="1" stop-color="%23b07644"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill="url(%23sky)" d="M0 0h1600v600H0z"/%3E%3Cpath fill="%232b554c" d="M0 600V380l350-210 450 300 400-320 400 250v200z"/%3E%3C/svg%3E',
			alt: 'Panoramic landscape',
			width: 1600,
			height: 600
		},
		height: '24rem',
		heading: 'A panoramic banner',
		description: 'Scroll the landscape horizontally on a narrow screen.',
		showDown: false
	}
} satisfies ContractStory<RecipeHeroBanner>;
