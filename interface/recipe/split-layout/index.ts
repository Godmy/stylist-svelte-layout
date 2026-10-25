import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { TOKEN_SIZE } from '$stylist/design-token/const/array/size';
export interface RecipeSplitLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	primary: Snippet;
	secondary: Snippet;
	/** Step of the --space-* scale. */
	gap?: keyof typeof TOKEN_SPACE;
	direction?: TokenOrientation;
	primarySize?: (typeof TOKEN_SIZE)[number];
	secondarySize?: (typeof TOKEN_SIZE)[number];
	responsive?: boolean;
}
