'use client';
'use no memo';

import { Container, Dots, SectionHeading, SlideUp } from '@/components';
import { TEACHERS } from '@/data';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Teachers.module.css';

const SLIDES = [...TEACHERS, ...TEACHERS];

export function Teachers() {
	const [active, setActive] = useState(0);
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<SlideUp className={styles.section} id='teachers'>
			<Container>
				<SectionHeading
					kicker='Преподаватели'
					title='Студенты лучших вузов страны'
					subtitle='Бауманка, Вышка, Финашка, РосУниМед и другие. Все они недавно прошли путь, который предстоит вашим детям.'
				/>
				<Swiper
					className={styles.slider}
					modules={[Autoplay, Navigation]}
					loop
					loopAdditionalSlides={2}
					watchSlidesProgress
					updateOnWindowResize
					centeredSlides
					grabCursor
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
					onSlideChange={swiper =>
						setActive(swiper.realIndex % TEACHERS.length)
					}
					spaceBetween={16}
					slidesPerView={1.01}
					speed={500}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
						waitForTransition: false,
					}}
					navigation
					slidesOffsetBefore={48}
					slidesOffsetAfter={48}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 24,
							slidesOffsetBefore: 56,
							slidesOffsetAfter: 56,
						},
						1000: { slidesPerView: 3 },
					}}
				>
					{SLIDES.map((teacher, index) => (
						<SwiperSlide
							key={`${teacher.name}-${index}`}
							className={styles.slide}
						>
							<a href='#contacts' className={styles.card}>
								<Image
									className={styles.avatar}
									src={teacher.avatarSrc}
									alt=''
									width={88}
									height={88}
								/>

								<h3 className={styles.name}>{teacher.name}</h3>
								<span className={styles.university}>{teacher.university}</span>
								<span className={styles.subject}>{teacher.subject}</span>
								<p className={styles.text}>{teacher.text}</p>
								<span className={styles.cta}>
									Записаться
									<svg
										className={styles.ctaArrow}
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										width='16'
										height='16'
										aria-hidden='true'
									>
										<path d='M5 12h14M13 6l6 6-6 6' />
									</svg>
								</span>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
				<Dots
					count={TEACHERS.length}
					active={active}
					labels={TEACHERS.map(t => t.name)}
					onSelect={index => {
						setActive(index);
						swiperRef.current?.slideToLoop(index);
					}}
				/>
			</Container>
		</SlideUp>
	);
}
