'use client';
'use no memo';

import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../components/Container/Container';
import Dots from '../../components/Dots/Dots';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { SlideUp } from '../../components/SlideUp/SlideUp';
import styles from './Reviews.module.css';

const REVIEWS = [
	{
		author: 'Анна',
		role: 'мама ученика 7 класса',
		stars: 5,
		text:
			'Понравилось, что занятия ведёт один преподаватель и группа маленькая — правда уделяет время каждому. За два месяца сын заметно увереннее стал в математике.',
	},
	{
		author: 'Дмитрий',
		role: 'ученик 9 класса',
		stars: 5,
		text:
			'Преподаватель сам недавно проходил тот же путь, поэтому объясняет, на чём реально сосредоточиться на ОГЭ. Разборы ошибок — по делу, без воды.',
	},
	{
		author: 'Марина',
		role: 'мама ученицы 8 класса',
		stars: 5,
		text:
			'Ценим личный подход: план подстраивают под дочь, а не наоборот. Каждый месяц присылают краткий отчёт о прогрессе — очень удобно для родителя.',
	},
];

export default function Reviews() {
	const [active, setActive] = useState(0);
	const swiperRef = useRef<SwiperType | null>(null);

	const reviews = [...REVIEWS, ...REVIEWS];

	return (
		<SlideUp className={styles.section} id='reviews'>
			<Container>
				<SectionHeading
					kicker='Отзывы'
					title='Что говорят ученики и их родители'
					subtitle='Реальные истории занятий — от разбора ошибок до уверенности перед экзаменом.'
				/>
				<Swiper
					className={styles.slider}
					modules={[Autoplay, Navigation]}
					loop
					centeredSlides
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
					onSlideChange={swiper => setActive(swiper.realIndex % REVIEWS.length)}
					spaceBetween={16}
					slidesPerView={1.01}
					speed={700}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					navigation
					slidesOffsetBefore={48}
					slidesOffsetAfter={48}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween: 24,
							slidesOffsetBefore: 56,
							slidesOffsetAfter: 56,
						},
						1024: { slidesPerView: 3 },
					}}
				>
					{reviews.map((review, index) => (
						<SwiperSlide
							key={`${review.author}-${index}`}
							className={styles.slide}
						>
							<article className={styles.card}>
								<div
									className={styles.stars}
									aria-label={`Оценка ${review.stars} из 5`}
								>
									{Array.from({ length: review.stars }).map((_, i) => (
										<svg
											key={i}
											viewBox='0 0 24 24'
											fill='currentColor'
											aria-hidden='true'
										>
											<path d='M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z' />
										</svg>
									))}
								</div>
								<p className={styles.text}>{review.text}</p>
								<footer className={styles.footer}>
									<span className={styles.avatar} aria-hidden='true'>
										{review.author[0]}
									</span>
									<div>
										<span className={styles.name}>{review.author}</span>
										<span className={styles.role}>{review.role}</span>
									</div>
								</footer>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
				<Dots
					count={REVIEWS.length}
					active={active}
					labels={REVIEWS.map(r => r.author)}
					onSelect={index => {
						setActive(index);
						swiperRef.current?.slideToLoop(index);
					}}
				/>
			</Container>
		</SlideUp>
	);
}
