/** A card of CardsSection: media, kicker, title, body and an optional outcome line. */
export type LandingCard = {
	kicker?: string;
	title: string;
	body: string;
	result?: string;
	image: string;
	alt: string;
};
