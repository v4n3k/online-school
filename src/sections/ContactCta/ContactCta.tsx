import { Container, SlideUp } from '@/components';
import styles from './ContactCta.module.css';

const CHANNEL = {
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
};

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
						<h3 className={styles.channelsTitle}>
							Позвонить, написать в Telegram / Max / WhatsApp
						</h3>
						<div key={CHANNEL.value} className={styles.channelItem}>
							<a href={CHANNEL.href} className={styles.channel}>
								<span className={styles.channelIcon}>{CHANNEL.icon}</span>
								<span>
									<span className={styles.channelValue}>
										{CHANNEL.value ?? ''}
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</SlideUp>
	);
}
