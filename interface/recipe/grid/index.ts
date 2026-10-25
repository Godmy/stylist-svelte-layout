import type { Snippet } from 'svelte';
import type { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeGrid extends LayoutHTMLAttributes<HTMLDivElement> {
	children: Snippet;
	class?: string;
	cols?: number;
	/** Step of the --space-* scale. */
	gap?: keyof typeof TOKEN_SPACE;
	responsive?: boolean;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
