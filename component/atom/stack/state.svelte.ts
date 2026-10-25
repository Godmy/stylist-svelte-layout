import type { RecipeStack } from '$stylist/layout/interface/recipe/stack';

const FLEX: Record<string, string> = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
	around: 'space-around',
	evenly: 'space-evenly'
};

export function createStackState(getProps: () => RecipeStack) {
	const props = $derived(getProps());
	const tag = $derived(props.as ?? 'div');
	const direction = $derived(props.direction ?? 'column');
	const gap = $derived(`var(--space-${props.gap ?? '4'})`);
	const align = $derived.by(() => {
		const value = props.align ?? (direction === 'row' ? 'center' : 'stretch');
		return FLEX[value] ?? value;
	});
	const justify = $derived(FLEX[props.justify ?? 'start'] ?? props.justify);
	const wrap = $derived(props.wrap ?? direction === 'row');
	const fill = $derived(props.fill ?? false);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			children: _children,
			as: _as,
			direction: _direction,
			gap: _gap,
			align: _align,
			justify: _justify,
			wrap: _wrap,
			fill: _fill,
			...rest
		} = props;
		return rest;
	});

	return {
		get tag() {
			return tag;
		},
		get direction() {
			return direction;
		},
		get gap() {
			return gap;
		},
		get align() {
			return align;
		},
		get justify() {
			return justify;
		},
		get wrap() {
			return wrap;
		},
		get fill() {
			return fill;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStackState;
