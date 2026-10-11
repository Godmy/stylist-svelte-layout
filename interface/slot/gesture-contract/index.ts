import type { TokenAnimation } from '$stylist/design-token/type/alias/animation';
import type { TokenDuration } from '$stylist/design-token/type/alias/duration';
import type { TokenEasing } from '$stylist/design-token/type/alias/easing';
import type { TokenCursor } from '$stylist/layout/type/alias/cursor';

export interface GestureContract {
	disabled: boolean;
	animation: TokenAnimation;
	duration: TokenDuration;
	easing: TokenEasing;
	cursor: TokenCursor;
	pressEffect: boolean;
	hoverEffect: boolean;
}
