import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenStackDirection } from '$stylist/layout/type/alias/stack-direction';
import type { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
export interface RecipeStack extends LayoutHTMLAttributes<HTMLElement> {
	class?: string;
	children?: Snippet;
	/** Rendered element; a list stack uses `ul`/`ol`, a page region `section`/`nav`. */
	as?: string;
	/** `column` (default) stacks blocks; `row` with `wrap` is a cluster. */
	direction?: TokenStackDirection;
	/** Step of the --space-* scale. */
	gap?: keyof typeof TOKEN_SPACE;
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	wrap?: boolean;
	/** Fill the parent's height (column) or width (row). */
	fill?: boolean;
}
