import type { RecipeHeroBanner } from '$stylist/layout/interface/recipe/hero-banner';
export function createHeroBannerState(getProps: () => RecipeHeroBanner) {
	const props = $derived(getProps());
	const image = $derived(props['image']);
	const heading = $derived(props['heading'] ?? '');
	const label = $derived(props['label'] ?? image.alt);
	const nextHref = $derived(props['nextHref'] ?? '#');
	const nextLabel = $derived(props['nextLabel'] ?? 'Continue');
	const priority = $derived(props['priority'] ?? true);
	const showDown = $derived(props['showDown'] ?? true);
	const description = $derived(props['description'] ?? '');
	const navigationSection = $derived(props['navigationSection'] ?? 'home');
	const overlay = $derived(props['overlay']);
	let pan = $state<HTMLDivElement>();
	let canPanLeft = $state(false);
	let canPanRight = $state(true);
	function updateDirections() {
		if (!pan) return;
		const maximum = Math.max(0, pan.scrollWidth - pan.clientWidth);
		// Clamp Safari's elastic overscroll before checking either edge.
		const position = Math.max(0, Math.min(maximum, pan.scrollLeft));
		canPanLeft = position > 1;
		canPanRight = maximum - position > 1;
	}
	function shift(direction: -1 | 1) {
		if (!pan) return;
		pan.scrollBy({
			left: direction * pan.clientWidth * 0.8,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
		});
	}
	$effect(() => {
		if (!pan) return;
		const observer = new ResizeObserver(updateDirections);
		observer.observe(pan);
		const image = pan.querySelector('img');
		if (image) observer.observe(image);
		updateDirections();
		return () => observer.disconnect();
	});
	return {
		get height() {
			return props.height ?? '32rem';
		},
		get panLabel() {
			return props.panLabel ?? 'Banner: scroll horizontally to see the full image';
		},
		get leftLabel() {
			return props.leftLabel ?? 'Scroll banner left';
		},
		get rightLabel() {
			return props.rightLabel ?? 'Scroll banner right';
		},
		get image() {
			return image;
		},
		get heading() {
			return heading;
		},
		get label() {
			return label;
		},
		get nextHref() {
			return nextHref;
		},
		get nextLabel() {
			return nextLabel;
		},
		get priority() {
			return priority;
		},
		get showDown() {
			return showDown;
		},
		get description() {
			return description;
		},
		get navigationSection() {
			return navigationSection;
		},
		get overlay() {
			return overlay;
		},
		get pan() {
			return pan;
		},
		set pan(value: typeof pan) {
			pan = value;
		},
		get canPanLeft() {
			return canPanLeft;
		},
		set canPanLeft(value: typeof canPanLeft) {
			canPanLeft = value;
		},
		get canPanRight() {
			return canPanRight;
		},
		set canPanRight(value: typeof canPanRight) {
			canPanRight = value;
		},
		updateDirections: updateDirections,
		shift: shift
	};
}
export default createHeroBannerState;
