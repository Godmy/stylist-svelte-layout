import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenAspectRatio } from '$stylist/layout/type/alias/aspect-ratio';
export interface RecipeAspectRatio extends ComputeIntersectAll<
	[LayoutHTMLAttributes<HTMLDivElement>]
> {
	ratio?: TokenAspectRatio | number;
	class?: string;
	children?: Snippet;
}
