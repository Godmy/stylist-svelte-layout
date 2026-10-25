import FeatureItems from '$stylist/layout/component/molecule/feature-items/index.svelte';
import type { RecipeFeatureItems } from '$stylist/layout/interface/recipe/feature-items';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Row of short values with captions. */
export default {
	component: FeatureItems,
	title: 'FeatureItems',
	description: 'Responsive row of values with captions, e.g. key metrics under a hero.',
	args: {
		ariaLabel: 'Key figures',
		id: '',
		items: [
			['24/7', 'support in your time zone'],
			['3 days', 'from request to launch'],
			['120+', 'teams already on board']
		]
	},
	controls: {
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		items: {
			type: 'json',
			label: 'Items',
			description: 'Value and caption pairs.',
			example: [['', '']]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Words: {
			items: [
				['Fast', 'set up in minutes'],
				['Clear', 'one view for everyone'],
				['Safe', 'roles and audit log']
			]
		},
		'Long captions': {
			items: [
				['99.9%', 'uptime over the last twelve months, measured by an independent monitor'],
				['2×', 'faster reviews'],
				['0', 'manual exports']
			]
		}
	}
} satisfies ContractStory<RecipeFeatureItems>;
