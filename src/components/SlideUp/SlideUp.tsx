"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./SlideUp.module.css";

type SlideUpOwnProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
  className?: string;
};

type SlideUpProps<E extends ElementType> = SlideUpOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof SlideUpOwnProps<E>>;

export const SlideUp = <E extends ElementType = "section">({
  as,
  children,
  className,
  ...props
}: SlideUpProps<E>) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const Component = (as ?? "section") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = clsx(styles.root, isVisible && styles.visible, className);

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
};
