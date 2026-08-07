import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import styles from './Header.module.css';

const NAV_LINKS = [
	{ href: '#advantages', label: 'Преимущества' },
	{ href: '#programs', label: 'Программы' },
	{ href: '#teachers', label: 'Преподаватели' },
	{ href: '#pricing', label: 'Цены' },
	{ href: '#faq', label: 'Вопросы' },
];

export default function Header() {
	return (
		<header className={styles.header}>
			<Container className={styles.inner}>
				<a href='#top' className={styles.brand}>
					<Logo />
					<span className={styles.brandName}>Школа «Богатель»</span>
				</a>

				<nav className={styles.nav} aria-label='Основная навигация'>
					{NAV_LINKS.map(link => (
						<a key={link.href} href={link.href} className={styles.navLink}>
							{link.label}
						</a>
					))}
				</nav>

				<div className={styles.actions}>
					<a href='tel:+79168091115' className={styles.phone}>
						+7 916 809-11-15
					</a>
					<a href='#contacts' className={styles.cta}>
						Записаться
					</a>
				</div>
			</Container>
		</header>
	);
}
