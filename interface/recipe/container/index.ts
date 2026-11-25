import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenSize } from '$stylist/design-token/type/alias/size';
export interface RecipeContainer extends ComputeIntersectAll<
	[LayoutHTMLAttributes<HTMLDivElement>]
> {
	size?: TokenSize;
	class?: string;
	children?: Snippet;
	alignItems?: string;
	justifyContent?: string;
}
