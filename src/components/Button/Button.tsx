import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "light";
  size?: "md" | "lg";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </a>
  );
}
