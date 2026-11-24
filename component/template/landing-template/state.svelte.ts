/** Reactive behavior of landing-template; props are read lazily when needed. */
export function createLandingTemplateComponentState() {
	let menuOpen = $state(false);
	return {
		get menuOpen(): typeof menuOpen {
			return menuOpen;
		},
		set menuOpen(__nextValue: typeof menuOpen) {
			menuOpen = __nextValue;
		}
	};
}
export default createLandingTemplateComponentState;
