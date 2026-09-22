"use client";

import { useId, useState } from "react";
import { Container, SectionHeading, SlideUp } from "@/components";
import { FAQ_ITEMS } from "@/data";
import clsx from "clsx";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <SlideUp className={styles.section} id="faq">
      <Container>
        <SectionHeading
          kicker="Вопросы"
          title="Частые вопросы"
          subtitle="Если не нашли ответ — напишите нам, и мы обязательно поможем."
        />
        <div className={styles.list}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-question-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div key={item.question} className={clsx(styles.item, isOpen && styles.open)}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {item.question}
                  <span className={styles.marker} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.answerWrap}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </SlideUp>
  );
}
