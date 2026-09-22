import { FAQ_ITEMS } from '@/data';
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
	Teachers,
} from '@/sections';

export default function Home() {
	return (
		<>
			<Header />
			<main id='main'>
				<Hero />
				<Advantages />
				<Programs />
				<Formats />
				<Teachers />
				<Pricing />
				{/* <Reviews /> */}
				<Faq />
				<ContactCta />
			</main>
			<Footer />

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: FAQ_ITEMS.map(item => ({
							'@type': 'Question',
							name: item.question,
							acceptedAnswer: {
								'@type': 'Answer',
								text: item.answer,
							},
						})),
					}),
				}}
			/>
		</>
	);
}
