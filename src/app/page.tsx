import Advantages from '../sections/Advantages/Advantages';
import ContactCta from '../sections/ContactCta/ContactCta';
import Faq from '../sections/Faq/Faq';
import Footer from '../sections/Footer/Footer';
import Formats from '../sections/Formats/Formats';
import Header from '../sections/Header/Header';
import Hero from '../sections/Hero/Hero';
import Pricing from '../sections/Pricing/Pricing';
import Programs from '../sections/Programs/Programs';
import Reviews from '../sections/Reviews/Reviews';
import Teachers from '../sections/Teachers/Teachers';

export default function Home() {
	return (
		<>
			<Header />
			<main>
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
