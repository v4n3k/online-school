'use client';
'use no memo';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../components/Container/Container';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { SlideUp } from '../../components/SlideUp/SlideUp';
import styles from './Teachers.module.css';

const TEACHERS = [
	{
		initials: 'АК',
		name: 'Анастасия К.',
		university: 'МГТУ им. Н. Э. Баумана',
		subject: 'Математика · Физика',
		text:
			'Готовит к ОГЭ по математике и физике, делится своим свежим опытом сдачи экзаменов.',
	},
	{
		initials: 'МВ',
		name: 'Михаил В.',
		university: 'НИУ ВШЭ',
		subject: 'Информатика',
		text:
			'Призёр олимпиад по информатике, помогает с программированием и подготовкой к ОГЭ.',
	},
	{
		initials: 'ЕС',
		name: 'Екатерина С.',
		university: 'Финансовый университет',
		subject: 'Обществознание · История',
		text:
			'Готовит к ОГЭ по обществознанию и истории, объясняет материал живым языком.',
	},
	{
		initials: 'ДА',
		name: 'Дарья А.',
		university: 'Российский университет медицины',
		subject: 'Биология · Химия',
		text:
			'Помогает разобраться в биологии и химии, готовит к экзаменам и олимпиадам.',
	},
];

export default function Teachers() {
	const teachers = [...TEACHERS, ...TEACHERS];
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
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
					onSlideChange={swiper =>
						setActive(swiper.realIndex % TEACHERS.length)
					}
					spaceBetween={24}
					slidesPerView={1}
					speed={700}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					navigation
					breakpoints={{
						640: { slidesPerView: 2 },
						1000: { slidesPerView: 3 },
					}}
				>
					{teachers.map((teacher, index) => (
						<SwiperSlide
							key={`${teacher.name}-${index}`}
							className={styles.slide}
						>
							<a href='#contacts' className={styles.card}>
								<div className={styles.avatar} aria-hidden='true'>
									{teacher.initials}
								</div>
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
				<div className={styles.dots} role='tablist' aria-label='Преподаватели'>
					{TEACHERS.map((teacher, index) => (
						<button
							key={teacher.name}
							type='button'
							className={clsx(styles.dot, active === index && styles.dotActive)}
							aria-label={teacher.name}
							aria-selected={active === index}
							onClick={() => {
								setActive(index);
								swiperRef.current?.slideToLoop(index);
							}}
						/>
					))}
				</div>
			</Container>
		</SlideUp>
	);
}
