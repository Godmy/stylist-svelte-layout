import WidgetContainer from './index.svelte';
import type { RecipeWidgetContainer } from '$stylist/layout/interface/recipe/widget-container';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Widget shell; index.story.svelte passes the content snippet. */
export default {
	component: WidgetContainer,
	title: 'WidgetContainer',
	description: 'Card-like widget shell with controls and collapse behavior.',
	args: {
		title: 'Deployment status',
		subtitle: 'Region: us-east-1',
		collapsible: true,
		initiallyCollapsed: false,
		draggable: true,
		maximizable: true,
		resizable: false,
		size: 'md'
	},
	controls: {
		title: { type: 'text' },
		subtitle: { type: 'text' },
		collapsible: { type: 'boolean' },
		initiallyCollapsed: { type: 'boolean' },
		draggable: { type: 'boolean' },
		maximizable: { type: 'boolean' },
		resizable: { type: 'boolean' },
		// The title scales for sm … lg.
		size: { type: 'select', options: TOKEN_SIZE.slice(1, 4) }
	},
	presets: {
		Collapsed: { initiallyCollapsed: true },
		Static: { draggable: false, maximizable: false }
	}
} satisfies ContractStory<RecipeWidgetContainer>;
