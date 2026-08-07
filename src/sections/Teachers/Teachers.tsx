import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { SlideUp } from "../../components/SlideUp/SlideUp";
import styles from "./Teachers.module.css";

const TEACHERS = [
  {
    initials: "АК",
    name: "Анастасия К.",
    university: "МГТУ им. Н. Э. Баумана",
    subject: "Математика · Физика",
    text: "Готовит к ОГЭ по математике и физике, делится своим свежим опытом сдачи экзаменов.",
  },
  {
    initials: "МВ",
    name: "Михаил В.",
    university: "НИУ ВШЭ",
    subject: "Информатика",
    text: "Призёр олимпиад по информатике, помогает с программированием и подготовкой к ОГЭ.",
  },
  {
    initials: "ЕС",
    name: "Екатерина С.",
    university: "Финансовый университет",
    subject: "Обществознание · История",
    text: "Готовит к ОГЭ по обществознанию и истории, объясняет материал живым языком.",
  },
  {
    initials: "ДА",
    name: "Дарья А.",
    university: "Российский университет медицины",
    subject: "Биология · Химия",
    text: "Помогает разобраться в биологии и химии, готовит к экзаменам и олимпиадам.",
  },
];

export default function Teachers() {
  return (
    <SlideUp className={styles.section} id="teachers">
      <Container>
        <SectionHeading
          kicker="Преподаватели"
          title="Студенты лучших вузов страны"
          subtitle="Бауманка, Вышка, Финашка, РосУниМед и другие. Все они недавно прошли путь, который предстоит вашим детям."
        />
        <div className={styles.grid}>
          {TEACHERS.map((teacher) => (
            <article key={teacher.name} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">
                {teacher.initials}
              </div>
              <h3 className={styles.name}>{teacher.name}</h3>
              <span className={styles.university}>{teacher.university}</span>
              <span className={styles.subject}>{teacher.subject}</span>
              <p className={styles.text}>{teacher.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </SlideUp>
  );
}