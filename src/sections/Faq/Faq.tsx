"use client";

import { useState } from "react";
import { Container, SectionHeading, SlideUp } from "@/components";
import clsx from "clsx";
import styles from "./Faq.module.css";

const FAQ_ITEMS = [
  {
    question: "В каком классе лучше начинать готовиться к ОГЭ?",
    answer:
      "Оптимально — с 7 класса: успеваем спокойно пройти все темы, привыкнуть к формату и без стресса подойти к 9 классу. Но начать можно в любой момент — программу подстраиваем под текущий уровень ученика.",
  },
  {
    question: "Что нужно для занятий онлайн?",
    answer:
      "Компьютер или планшет и стабильный интернет. Всё остальное даём мы: интерактивную платформу, записи уроков и домашние задания. Камеру включать не обязательно.",
  },
  {
    question: "Как проходит первое занятие?",
    answer:
      "Первое занятие бесплатное: знакомимся, определяем уровень знаний, ставим цель и подбираем индивидуальную программу. Вы ничего не платите и не обязаны продолжать.",
  },
  {
    question: "Можно ли перенести или отменить занятие?",
    answer:
      "Да. Это можно сделать заранее без штрафов, а пропущенное занятие можно посмотреть в записи или пересогласить с преподавателем.",
  },
  {
    question: "Как вы проверяете домашние задания?",
    answer:
      "Каждый преподаватель проверяет работы лично, даёт развёрнутый комментарий и разбирает ошибки на следующем занятии.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            return (
              <div key={item.question} className={clsx(styles.item, isOpen && styles.open)}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className={styles.marker} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className={styles.answerWrap}>
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
