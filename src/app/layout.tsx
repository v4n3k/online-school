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
	title:
		'Онлайн-школа «Азимут» — подготовка к ОГЭ и олимпиадам для 5–9 классов',
	description:
		'Онлайн-школа подготовки к ОГЭ и олимпиадам для учеников 5–9 классов. Математика, русский язык, информатика и другие предметы. Занятия индивидуально.',
	openGraph: {
		title: 'Онлайн-школа «Азимут»',
		description: 'Подготовка к ОГЭ и олимпиадам для учеников 5–9 классов.',
		url: 'https://azimut-school.ru',
		siteName: 'Онлайн-школа «Азимут»',
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Онлайн-школа «Азимут»',
		description: 'Подготовка к ОГЭ и олимпиадам для учеников 5–9 классов.',
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='ru' className={`${onest.variable} ${manrope.variable}`}>
			<body>
				<a href='#main' className='skip-link'>
					Перейти к содержимому
				</a>
				{children}
			</body>
		</html>
	);
}
