import { Button, Container } from '@/components';
import styles from './not-found.module.css';

export default function NotFound() {
	return (
		<Container className={styles.wrap}>
			<span className={styles.code} aria-hidden='true'>
				404
			</span>
			<h1 className={styles.title}>Страница не найдена</h1>
			<p className={styles.text}>
				Возможно, страница удалена или ещё не создана. Вернитесь на главную и
				продолжите с того места, где остановились.
			</p>
			<Button href='/' variant='accent' size='lg'>
				На главную
			</Button>
		</Container>
	);
}