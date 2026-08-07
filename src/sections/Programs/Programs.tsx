import Image from "next/image";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { SlideUp } from "../../components/SlideUp/SlideUp";
import styles from "./Programs.module.css";

const PROGRAMS = [
  {
    kicker: "ОГЭ",
    title: "Подготовка к ОГЭ",
    image: "/images/programs-math.jpg",
    imageAlt: "Рукописные математические формулы на листе",
    text: "Индивидуальная подготовка по любому предмету ОГЭ — от математики до английского. Программу строим под текущий уровень и цель ученика.",
    items: [
      "Все предметы ОГЭ — школьной программы и профильные",
      "Индивидуальная программа под ученика",
      "Регулярные пробники в формате ОГЭ",
      "Разбор типовых ошибок и ловушек",
      "Проверка домашних заданий с комментариями",
    ],
  },
  {
    kicker: "Олимпиады",
    title: "Олимпиадная подготовка",
    image: "/images/formats-study.jpg",
    imageAlt: "Рабочий стол с тетрадями для самостоятельной подготовки",
    text: "Индивидуальная подготовка к перечневым олимпиадам и ВсОШ по выбранному предмету — от школьного этапа до заключительного.",
    items: [
      "Все предметы — олимпиадные направления по выбору",
      "Индивидуальная программа под цель ученика",
      "Разбор задач прошлых лет",
      "Тренировка на тайминг и стресс",
      "Бонусы: поступление и льготы в вузах",
    ],
  },
];

export default function Programs() {
  return (
    <SlideUp className={styles.section} id="programs">
      <Container>
        <SectionHeading
          kicker="Направления"
          title="Программа под каждого ученика"
          subtitle="Готовим по всем предметам ОГЭ и олимпиадным направлениям. Индивидуальный план под уровень, темп и цель — без групповых программ."
        />
        <div className={styles.grid}>
          {PROGRAMS.map((program) => (
            <article key={program.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 860px) 100vw, 45vw"
                />
              </div>
              <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <span className={styles.kicker}>{program.kicker}</span>
              </div>
              <h3 className={styles.title}>{program.title}</h3>
              <p className={styles.text}>{program.text}</p>
              <ul className={styles.list}>
                {program.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.check} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contacts" className={styles.link}>
                Записаться на бесплатное занятие
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SlideUp>
  );
}