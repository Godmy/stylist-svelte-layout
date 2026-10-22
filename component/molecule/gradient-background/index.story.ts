import GradientBackground from '$stylist/layout/component/molecule/gradient-background/index.svelte';
import type { RecipeGradientBackground } from '$stylist/layout/interface/recipe/gradient-background';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_GRADIENT } from '$stylist/layout/const/array/gradient-mode';
import { GRADIENT_DIRECTION } from '$stylist/layout/const/array/gradient-direction';

/** Decorative animated background container. */
export default {
	component: GradientBackground,
	title: 'GradientBackground',
	description: 'Decorative animated background container.',
	args: {
		variant: 'dynamic',
		direction: 'diagonal',
		speed: 20,
		intensity: 50,
		animated: true,
		style: 'min-height: 13rem; border-radius: 1rem; overflow: hidden;'
	},
	controls: {
		variant: { type: 'select', options: TOKEN_GRADIENT },
		direction: { type: 'select', options: GRADIENT_DIRECTION },
		speed: { type: 'number', min: 5, max: 60, step: 1 },
		intensity: { type: 'number', min: 10, max: 100, step: 1 },
		animated: { type: 'boolean' }
	},
	presets: { Static: { variant: 'static', animated: false }, Particles: { variant: 'particles' } },
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: { style: 'padding: 1.5rem; color: var(--color-text-inverse);' },
			children: [
				{ kind: 'element', tag: 'h3', children: [{ kind: 'text', value: 'Background Preview' }] },
				{
					kind: 'element',
					tag: 'p',
					children: [{ kind: 'text', value: 'Use this for hero sections or feature callouts.' }]
				}
			]
		}
	]
} satisfies ContractStory<RecipeGradientBackground>;
