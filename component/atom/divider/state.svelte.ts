import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { RecipeDivider } from '$stylist/layout/interface/recipe/divider';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';

export function createDividerState(getProps: () => RecipeDivider) {
	const props = $derived(getProps());
	const orientation = $derived<TokenOrientation>(props.orientation ?? TOKEN_ORIENTATION[0]);
	const align = $derived<TokenAlignment>((props.align as TokenAlignment | undefined) ?? 'center');
	const dashed = $derived(props.dashed ?? false);
	const decorative = $derived(props.decorative ?? false);
	const isHorizontal = $derived(orientation === TOKEN_ORIENTATION[0]);
	// A label is only drawn on a horizontal divider; otherwise the divider is a native <hr>.
	const isLabelled = $derived(isHorizontal && Boolean(props.label));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			orientation: _orientation,
			align: _align,
			dashed: _dashed,
			label: _label,
			decorative: _decorative,
			...rest
		} = props;
		return rest;
	});

	return {
		get orientation() {
			return orientation;
		},
		get align() {
			return align;
		},
		get dashed() {
			return dashed;
		},
		get decorative() {
			return decorative;
		},
		get isHorizontal() {
			return isHorizontal;
		},
		get isLabelled() {
			return isLabelled;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createDividerState;
