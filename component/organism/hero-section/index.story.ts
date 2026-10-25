import HeroSection from '$stylist/layout/component/organism/hero-section/index.svelte';
import type { RecipeHeroSection } from '$stylist/layout/interface/recipe/hero-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** First screen of a landing page: heading, media and lead. */
export default {
	component: HeroSection,
	title: 'HeroSection',
	description: 'Landing hero: eyebrow, heading and media side by side, lead below.',
	args: {
		eyebrow: 'Design system',
		title: 'Build a landing page from ready-made sections',
		lead: 'Pick the blocks, pass your copy and images, and the layout adapts to any screen.',
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EHero media%3C/text%3E%3C/svg%3E",
		imageAlt: 'Hero placeholder',
		level: 1
	},
	controls: {
		eyebrow: { type: 'text' },
		title: { type: 'text' },
		lead: { type: 'text' },
		level: { type: 'select', options: [1, 2] }
	}
} satisfies ContractStory<RecipeHeroSection>;
