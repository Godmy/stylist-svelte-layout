import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/typography/interface/slot/typography';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { TokenColorTone } from '$stylist/design-token/type/alias/color-tone';
export interface RecipeBackground
	extends HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography {
	background?: TokenBackground;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
	backgroundSize?: 'cover' | 'contain' | 'auto' | string;
	backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
	gradient?: string;
	opacity?: number;
	variant?: TokenColorTone;
}
