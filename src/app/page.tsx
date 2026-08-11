import {
	Advantages,
	ContactCta,
	Faq,
	Footer,
	Formats,
	Header,
	Hero,
	Pricing,
	Programs,
	Reviews,
	Teachers,
} from "@/sections";

export default function Home() {
	return (
		<>
			<Header />
			<main id="main">
				<Hero />
				<Advantages />
				<Programs />
				<Formats />
				<Teachers />
				<Pricing />
				<Reviews />
				<Faq />
				<ContactCta />
			</main>
			<Footer />
		</>
	);
}
