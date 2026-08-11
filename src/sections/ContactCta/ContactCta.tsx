import { Container, SlideUp } from '@/components';
import styles from './ContactCta.module.css';

const CHANNELS = [
	{
		label: 'Позвонить',
		value: '+7 916 809-11-15',
		href: 'tel:+79168091115',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
			>
				<path
					d='M5 4h4l1.5 4-2 1.5a11 11 0 0 0 6 6L16 13l4 1.5v4a1.8 1.8 0 0 1-2 1.8A16 16 0 0 1 3.8 6.2 1.8 1.8 0 0 1 5 4Z'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
	{
		label: 'Написать в Telegram',
		value: '@bogatel_school',
		href: 'https://t.me/bogatel_school',
		icon: (
			<svg viewBox='0 0 24 24' fill='currentColor'>
				<path d='M21.5 4.6 18 19.1c-.3 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5L17.7 6c.4-.3-.1-.5-.6-.2L7 12.2 2 11c-1-.3-1-1-.2-1.5L19.9 3.2c.9-.3 1.6.2 1.6 1.4Z' />
			</svg>
		),
	},
	{
		label: 'WhatsApp',
		value: '+7 916 809-11-15',
		href: 'https://wa.me/79168091115',
		icon: (
			<svg viewBox='0 0 24 24' fill='currentColor'>
				<path d='M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm5.8 14c-.3.7-1.4 1.4-2 1.5-.5.1-1.2.2-3.4-.7-2.8-1.2-4.5-4.2-4.6-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 2c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.7.8c.3.2.6.3.6.4.1.2.1.7-.2 1.3Z' />
			</svg>
		),
	},
];

export function ContactCta() {
	return (
		<SlideUp className={styles.section} id='contacts'>
			<Container>
				<div className={styles.panel}>
					<h2 className={styles.title}>
						Запишем на бесплатное пробное занятие
					</h2>
					<p className={styles.subtitle}>
						Позвоните или напишите нам — подберём индивидуальную программу под
						уровень ребёнка и ответим на все вопросы.
					</p>
					<div className={styles.channels}>
						{CHANNELS.map(channel => (
							<a
								key={channel.label}
								href={channel.href}
								className={styles.channel}
							>
								<span className={styles.channelIcon}>{channel.icon}</span>
								<span>
									<span className={styles.channelLabel}>{channel.label}</span>
									<span className={styles.channelValue}>
										{channel.value ?? ''}
									</span>
								</span>
							</a>
						))}
					</div>
				</div>
			</Container>
		</SlideUp>
	);
}
