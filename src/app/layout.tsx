import type { Metadata } from 'next';
import { Manrope, Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({
	subsets: ['latin', 'cyrillic'],
	weight: ['600', '700', '800'],
	variable: '--font-heading',
});

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-body',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://azimut-school.ru'),
	title:
		'Онлайн-школа «Азимут» — подготовка к ОГЭ и олимпиадам для 5–9 классов',
	description:
		'Онлайн-школа подготовки к ОГЭ и олимпиадам для учеников 5–9 классов: математика, русский язык, информатика и другие предметы. Индивидуальные занятия.',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Онлайн-школа «Азимут»',
		description: 'Подготовка к ОГЭ и олимпиадам для учеников 5–9 классов.',
		url: 'https://azimut-school.ru',
		siteName: 'Онлайн-школа «Азимут»',
		locale: 'ru_RU',
		type: 'website',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt:
					'Онлайн-школа «Азимут» — подготовка к ОГЭ и олимпиадам для 5–9 классов',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Онлайн-школа «Азимут»',
		description: 'Подготовка к ОГЭ и олимпиадам для учеников 5–9 классов.',
		images: ['/og-image.png'],
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='ru' className={`${onest.variable} ${manrope.variable}`}>
			<body>
				<a href='#main' className='skip-link'>
					Перейти к содержимому
				</a>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'EducationalOrganization',
							name: 'Онлайн-школа «Азимут»',
							url: 'https://azimut-school.ru/',
							logo: 'https://azimut-school.ru/logo.png',
							description:
								'Онлайн-школа подготовки к ОГЭ и олимпиадам для учеников 5–9 классов. Математика, русский язык, информатика и другие предметы. Занятия индивидуально.',
							telephone: '+79168091115',
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+79168091115',
								contactType: 'customer support',
								areaServed: 'RU',
								availableLanguage: 'Russian',
							},
						}),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
