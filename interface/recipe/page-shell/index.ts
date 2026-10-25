import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenSize } from '$stylist/design-token/type/alias/size';
export interface RecipePageShell extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	/** Page content, rendered in <main>. */
	children: Snippet;
	header?: Snippet;
	footer?: Snippet;
	/** Keep the header on screen while the content scrolls (default true). */
	sticky?: boolean;
	/** Keep the footer on screen as well (default false). */
	stickyFooter?: boolean;
	/** Fill the parent's height and scroll the content inside; otherwise the document scrolls. */
	fillHeight?: boolean;
	headerShadow?: boolean;
	footerShadow?: boolean;
	/** Constrain header, main and footer content with Container of this size. */
	containerSize?: TokenSize;
}
