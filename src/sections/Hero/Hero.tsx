import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import { SlideUp } from '../../components/SlideUp/SlideUp';
import styles from './Hero.module.css';

const HERO_STATS = [
	{ value: '60 мин', label: 'одно занятие один на один' },
	{ value: '1/1', label: 'только индивидуальные занятия' },
	{ value: '5–9', label: 'классы, с которыми работаем' },
	{ value: '100%', label: 'внимания н ашему ученику' },
];

export default function Hero() {
	return (
		<SlideUp className={styles.hero} id='top'>
			<div className={`${styles.bg} decor`} aria-hidden='true'>
				<div className={styles.blob} />
			</div>

			<Container className={styles.inner}>
				<div className={styles.content}>
					<span className={styles.badge}>Онлайн-школа · 5–9 классы</span>
					<h1 className={styles.title}>
						Готовим к ОГЭ и олимпиадам так, что{' '}
						<span className={styles.accent}>результат виден</span> с первой
						четверти
					</h1>
					<p className={styles.subtitle}>
						Математика, физика, информатика, английский и другие предметы ОГЭ.
						Занятия один на один со студентами лучших вузов страны — без групп,
						без «потоков», всё внимание вашему ребёнку.
					</p>
					<div className={styles.actions}>
						<Button href='#contacts' variant='accent' size='lg'>
							Бесплатное занятие
						</Button>
						<Button href='#pricing' variant='light' size='lg'>
							Выбрать формат
						</Button>
					</div>
				</div>

				<ul className={styles.stats}>
					{HERO_STATS.map(stat => (
						<li key={stat.label} className={styles.statCard}>
							<span className={styles.statValue}>{stat.value}</span>
							<span className={styles.statLabel}>{stat.label}</span>
						</li>
					))}
				</ul>
			</Container>
		</SlideUp>
	);
}
