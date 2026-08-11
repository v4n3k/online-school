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
		<div className={styles.dots} role="tablist" aria-label="Слайдер">
			{Array.from({ length: count }).map((_, index) => (
				<button
					key={labels[index]}
					type="button"
					className={clsx(styles.dot, active === index && styles.dotActive)}
					aria-label={labels[index]}
					aria-selected={active === index}
					onClick={() => onSelect(index)}
				/>
			))}
		</div>
	);
}
