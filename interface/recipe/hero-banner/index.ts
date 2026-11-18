import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
export interface RecipeHeroBanner extends ComputeIntersectAll<
	[
		{
			image: {
				src: string;
				alt: string;
				width: number;
				height: number;
			};
			height?: string;
			panLabel?: string;
			leftLabel?: string;
			rightLabel?: string;
			heading?: string;
			label?: string;
			nextHref?: string;
			nextLabel?: string;
			priority?: boolean;
			showDown?: boolean;
			description?: string;
			navigationSection?: string;
			/** HTML text laid over the photo; it stays inside the visible banner while the image pans. */
			overlay?: Snippet;
		}
	]
> {}
