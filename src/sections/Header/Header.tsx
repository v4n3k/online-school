'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const scrollY = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.left = '0';
		document.body.style.right = '0';
		return () => {
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			window.scrollTo(0, scrollY);
		};
	}, [open]);

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

				<button
					type='button'
					className={styles.burger}
					aria-label='Открыть меню'
					aria-expanded={open}
					onClick={() => setOpen(o => !o)}
				>
					<span
						className={`${styles.burgerLine} ${open ? styles.burgerLineActive : ''}`}
					/>
					<span
						className={`${styles.burgerLine} ${open ? styles.burgerLineActive : ''}`}
					/>
					<span
						className={`${styles.burgerLine} ${open ? styles.burgerLineActive : ''}`}
					/>
				</button>
			</Container>

			{typeof document !== 'undefined' &&
				createPortal(
					<>
						<div
							className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
							onClick={() => setOpen(false)}
						/>
						<div
							className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
						>
							<nav className={styles.mobileNav} aria-label='Мобильная навигация'>
								{NAV_LINKS.map(link => (
									<a
										key={link.href}
										href={link.href}
										className={styles.mobileLink}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</a>
								))}
								<a href='tel:+79168091115' className={styles.mobilePhone}>
									+7 916 809-11-15
								</a>
								<a
									href='#contacts'
									className={styles.mobileCta}
									onClick={() => setOpen(false)}
								>
									Записаться
								</a>
							</nav>
						</div>
					</>,
					document.body,
				)}
		</header>
	);
}
