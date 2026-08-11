import clsx from "clsx";
import styles from "./Dots.module.css";

type DotsProps = {
	count: number;
	active: number;
	labels: string[];
	onSelect: (index: number) => void;
};

export function Dots({ count, active, labels, onSelect }: DotsProps) {
	return (
		<div className={styles.dots} role="group" aria-label="Навигация по слайдам">
			{Array.from({ length: count }).map((_, index) => (
				<button
					key={labels[index]}
					type="button"
					className={clsx(styles.dot, active === index && styles.dotActive)}
					aria-label={labels[index]}
					aria-current={active === index ? "true" : undefined}
					onClick={() => onSelect(index)}
				/>
			))}
		</div>
	);
}
