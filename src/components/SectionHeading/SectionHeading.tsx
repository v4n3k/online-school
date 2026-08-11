import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <header
      className={`${styles.heading} ${styles[align]} ${dark ? styles.dark : ""}`}
    >
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
