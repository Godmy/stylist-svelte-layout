import Spacer from './index.svelte';
import type { RecipeSpacer } from '$stylist/layout/interface/recipe/spacer';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE_REM } from '$stylist/design-token/const/array/size-rem';
import { CENTERED_LAYOUT_AXIS } from '$stylist/layout/const/array/centered-layout-axis';

/** Flexible space between neighbours; index.story.svelte lays them out along the axis. */
export default {
	component: Spacer,
	title: 'Spacer',
	description: 'A flexible space component for layout purposes',
	args: { size: '1rem', axis: 'vertical', inline: false },
	controls: {
		size: { type: 'select', options: TOKEN_SIZE_REM },
		axis: { type: 'select', options: CENTERED_LAYOUT_AXIS },
		inline: { type: 'boolean' }
	},
	presets: { Horizontal: { axis: 'horizontal', size: '2rem' }, Large: { size: '3rem' } }
} satisfies ContractStory<RecipeSpacer>;
