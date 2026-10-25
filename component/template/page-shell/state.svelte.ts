import type { RecipePageShell } from '$stylist/layout/interface/recipe/page-shell';

export function createPageShellState(getProps: () => RecipePageShell) {
	const props = $derived(getProps());
	const sticky = $derived(props.sticky ?? true);
	const stickyFooter = $derived(props.stickyFooter ?? false);
	const fillHeight = $derived(props.fillHeight ?? false);
	const headerShadow = $derived(props.headerShadow ?? false);
	const footerShadow = $derived(props.footerShadow ?? false);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			children: _children,
			header: _header,
			footer: _footer,
			sticky: _sticky,
			stickyFooter: _stickyFooter,
			fillHeight: _fillHeight,
			headerShadow: _headerShadow,
			footerShadow: _footerShadow,
			containerSize: _containerSize,
			...rest
		} = props;
		return rest;
	});

	return {
		get sticky() {
			return sticky;
		},
		get stickyFooter() {
			return stickyFooter;
		},
		get fillHeight() {
			return fillHeight;
		},
		get headerShadow() {
			return headerShadow;
		},
		get footerShadow() {
			return footerShadow;
		},
		get containerSize() {
			return props.containerSize;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createPageShellState;
