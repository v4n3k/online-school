import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { SlideUp } from "../../components/SlideUp/SlideUp";
import styles from "./Reviews.module.css";

const REVIEWS = [
  {
    author: "Анна",
    role: "мама ученика 7 класса",
    stars: 5,
    text: "Понравилось, что занятия ведёт один преподаватель и группа маленькая — правда уделяет время каждому. За два месяца сын заметно увереннее стал в математике.",
  },
  {
    author: "Дмитрий",
    role: "ученик 9 класса",
    stars: 5,
    text: "Преподаватель сам недавно проходил тот же путь, поэтому объясняет, на чём реально сосредоточиться на ОГЭ. Разборы ошибок — по делу, без воды.",
  },
  {
    author: "Марина",
    role: "мама ученицы 8 класса",
    stars: 5,
    text: "Ценим личный подход: план подстраивают под дочь, а не наоборот. Каждый месяц присылают краткий отчёт о прогрессе — очень удобно для родителя.",
  },
];

export default function Reviews() {
  return (
    <SlideUp className={styles.section} id="reviews">
      <Container>
        <SectionHeading
          kicker="Отзывы"
          title="Что говорят ученики и их родители"
          subtitle="Реальные истории занятий — от разбора ошибок до уверенности перед экзаменом."
        />
        <div className={styles.grid}>
          {REVIEWS.map((review) => (
            <article key={review.author} className={styles.card}>
              <div className={styles.stars} aria-label={`Оценка ${review.stars} из 5`}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
                  </svg>
                ))}
              </div>
              <p className={styles.text}>{review.text}</p>
              <footer className={styles.footer}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.author[0]}
                </span>
                <div>
                  <span className={styles.name}>{review.author}</span>
                  <span className={styles.role}>{review.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </SlideUp>
  );
}