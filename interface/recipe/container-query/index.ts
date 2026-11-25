import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { ContainerQueryType } from '$stylist/layout/type/alias/container-query-type';
export interface RecipeContainerQuery extends ComputeIntersectAll<
	[LayoutHTMLAttributes<HTMLDivElement>]
> {
	class?: string;
	children: Snippet;
	containerType?: ContainerQueryType;
	containerName?: string;
}
