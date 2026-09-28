'use client';

import { Container, Logo } from '@/components';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
	{ href: '#advantages', label: 'Преимущества' },
	{ href: '#programs', label: 'Программы' },
	{ href: '#teachers', label: 'Преподаватели' },
	{ href: '#pricing', label: 'Цены' },
	{ href: '#faq', label: 'Вопросы' },
];

export const Header = () => {
	const [open, setOpen] = useState(false);
	const mounted = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false,
	);
	const burgerRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const backdropRef = useRef<HTMLButtonElement>(null);

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

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false);
				burgerRef.current?.focus();
				return;
			}
			if (e.key !== 'Tab') return;

			const menu = menuRef.current;
			const burger = burgerRef.current;
			if (!menu) return;
			const active = document.activeElement;
			const inMenu = menu.contains(active);

			if (!inMenu && active !== burger) {
				e.preventDefault();
				burger?.focus();
				return;
			}

			const focusables = Array.from(
				menu.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
				),
			);
			if (focusables.length === 0) return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];

			if (e.shiftKey) {
				if (active === burger) {
					e.preventDefault();
					last.focus();
				} else if (active === first) {
					e.preventDefault();
					burger?.focus();
				}
			} else if (active === burger) {
				e.preventDefault();
				first.focus();
			} else if (active === last) {
				e.preventDefault();
				burger?.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [open]);

	useEffect(() => {
		if (open) return;
		const el = document.activeElement;
		const inMenu = el instanceof Node && menuRef.current?.contains(el);
		const onBackdrop = backdropRef.current === el;
		if ((inMenu || onBackdrop) && !(el instanceof HTMLAnchorElement)) {
			burgerRef.current?.focus();
		}
	}, [open]);

	return (
		<header className={styles.header}>
			<Container className={styles.inner}>
				<a href='#top' className={styles.brand}>
					<Logo />
					<span className={styles.brandText}>
						<span className={styles.brandName}>Азимут</span>
						<span className={styles.brandTag}>онлайн-школа</span>
					</span>
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
					ref={burgerRef}
					className={styles.burger}
					aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
					aria-expanded={open}
					aria-controls={mounted ? 'mobile-menu' : undefined}
					onClick={() => setOpen(o => !o)}
				>
					<span
						className={`${styles.burgerLine} ${
							open ? styles.burgerLineActive : ''
						}`}
					/>
					<span
						className={`${styles.burgerLine} ${
							open ? styles.burgerLineActive : ''
						}`}
					/>
					<span
						className={`${styles.burgerLine} ${
							open ? styles.burgerLineActive : ''
						}`}
					/>
				</button>
			</Container>

			{mounted &&
				createPortal(
					<>
						<button
							type='button'
							ref={backdropRef}
							className={`${styles.backdrop} ${
								open ? styles.backdropOpen : ''
							}`}
							aria-label='Закрыть меню'
							onClick={() => setOpen(false)}
						/>
						<div
							id='mobile-menu'
							ref={menuRef}
							className={`${styles.mobileMenu} ${
								open ? styles.mobileMenuOpen : ''
							}`}
							role='dialog'
							aria-modal='true'
							aria-label='Меню'
						>
							<nav
								className={styles.mobileNav}
								aria-label='Мобильная навигация'
							>
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
};
