'use client';
'use no memo';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Dots from '../../components/Dots/Dots';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { SlideUp } from '../../components/SlideUp/SlideUp';
import styles from './Pricing.module.css';

const PLANS = [
	{
		name: 'Разовое занятие',
		price: '2 500 ₽',
		period: 'за час',
		desc: 'Подходит, чтобы попробовать и закрыть конкретную тему.',
		features: [
			'1 занятие один на один',
			'Проверка домашнего задания',
			'Обратная связь в чате',
		],
	},
	{
		name: 'Оптимум',
		price: '9 000 ₽',
		period: 'в месяц · 4 занятия',
		desc: 'Самый популярный формат регулярной подготовки.',
		featured: true,
		features: [
			'4 занятия по 60 минут',
			'Индивидуальная программа',
			'Отчёт для родителей раз в неделю',
			'Личный куратор в чате',
			'Пробники в формате ОГЭ',
		],
	},
	{
		name: 'Максимум',
		price: '17 000 ₽',
		period: 'в месяц · 8 занятий',
		desc: 'Интенсивная подготовка к ОГЭ и олимпиадам.',
		features: [
			'8 занятий по 60 минут',
			'Всё из тарифа «Оптимум»',
			'Интенсив перед экзаменами',
			'Олимпиадная подготовка',
			'Дополнительный час по запросу',
		],
	},
];

export default function Pricing() {
	const plans = [...PLANS, ...PLANS];
	const [active, setActive] = useState(1);
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<SlideUp className={styles.section} id='pricing'>
			<Container>
				<SectionHeading
					kicker='Цены'
					title='Прозрачные тарифы без скрытых платежей'
					subtitle='Первое занятие — бесплатно. Отмените в любой момент, привязка карты не нужна.'
				/>
				<Swiper
					className={styles.slider}
					modules={[Autoplay, Navigation]}
					loop
					centeredSlides
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
					onInit={swiper => {
						requestAnimationFrame(() => swiper.slideToLoop(1, 0));
					}}
					onSlideChange={swiper => setActive(swiper.realIndex % PLANS.length)}
					spaceBetween={24}
					slidesPerView={1.08}
					speed={700}
					navigation
					breakpoints={{
						720: { slidesPerView: 1.6 },
						1024: { slidesPerView: 2 },
					}}
				>
					{plans.map((plan, index) => (
						<SwiperSlide key={`${plan.name}-${index}`} className={styles.slide}>
							<article
								className={clsx(styles.card, plan.featured && styles.featured)}
							>
								{plan.featured ? (
									<span className={styles.hit}>Популярный</span>
								) : null}
								<h3 className={styles.name}>{plan.name}</h3>
								<p className={styles.price}>
									{plan.price}
									<span className={styles.period}> {plan.period}</span>
								</p>
								<p className={styles.desc}>{plan.desc}</p>
								<ul className={styles.features}>
									{plan.features.map(feature => (
										<li key={feature} className={styles.feature}>
											<span className={styles.check} aria-hidden='true'>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='3'
												>
													<path
														d='M5 13l4 4 10-10'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</span>
											{feature}
										</li>
									))}
								</ul>
								<Button
									href='#contacts'
									variant={plan.featured ? 'primary' : 'secondary'}
									className={styles.cta}
								>
									Выбрать тариф
								</Button>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
				<Dots
					count={PLANS.length}
					active={active}
					labels={PLANS.map(p => p.name)}
					onSelect={index => {
						setActive(index);
						swiperRef.current?.slideToLoop(index);
					}}
				/>
			</Container>
		</SlideUp>
	);
}
