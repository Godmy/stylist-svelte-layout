export interface RecipeHeroSection {
	id?: string;
	ariaLabel?: string;
	eyebrow?: string;
	title: string;
	lead?: string;
	level?: 1 | 2;
	imageSrc: string;
	imageAlt: string;
	imageLoading?: 'eager' | 'lazy';
	class?: string;
}
