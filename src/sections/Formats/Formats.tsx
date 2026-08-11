import { Container, SectionHeading, SlideUp } from '@/components';
import styles from './Formats.module.css';

const FORMATS = [
	{
		title: 'Один на один',
		desc:
			'Никаких групп. Занятие полностью под вашего ребёнка: его темп, его вопросы, его прогресс.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
			>
				<circle cx='12' cy='7' r='4' />
				<path d='M12 13.5c-3.8 0-6 2.2-6 4.5' strokeLinecap='round' />
				<path d='M12 13.5c3.8 0 6 2.2 6 4.5' strokeLinecap='round' />
			</svg>
		),
	},
	{
		title: 'Занятие — 60 минут',
		desc:
			'Один час, чтобы разобрать новую тему, закрепить её на практике и ответить на вопросы.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
			>
				<circle cx='12' cy='12' r='9' />
				<path d='M12 7v5l3 3' strokeLinecap='round' />
			</svg>
		),
	},
	{
		title: 'Индивидуальный план',
		desc:
			'Программа под уровень и цель: от «закрыть пробелы» до подготовки к олимпиадам.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
			>
				<path
					d='M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8L12 3Z'
					strokeLinejoin='round'
				/>
				<path
					d='M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
];

export function Formats() {
	return (
		<SlideUp className={styles.section} id='formats'>
			<Container>
				<SectionHeading
					kicker='Формат'
					title='Как проходит занятие'
					subtitle='Один формат — один на один с преподавателем. Так ребёнок получает максимум пользы за каждый час.'
				/>
				<ul className={styles.rows}>
					{FORMATS.map(format => (
						<li key={format.title} className={styles.row}>
							<div className={styles.text}>
								<h3 className={styles.title}>{format.title}</h3>
								<p className={styles.desc}>{format.desc}</p>
							</div>
							<div className={styles.media}>
								<span className={styles.icon}>{format.icon}</span>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</SlideUp>
	);
}
