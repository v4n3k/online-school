import { Container, SectionHeading, SlideUp } from "@/components";
import styles from "./Advantages.module.css";

const FEATURES = [
  {
    title: "Только занятия один на один",
    text: "Программа строится строго под вашего ребёнка: его темп, его пробелы, его цель.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="7" r="4" />
        <path d="M12 13.5c-3.8 0-6 2.2-6 4.5" strokeLinecap="round" />
        <path d="M12 13.5c3.8 0 6 2.2 6 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Регулярная обратная связь",
    text: "После каждого месяца присылаем разбор прогресса: что получилось и над чем работаем дальше.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Занятия из дома",
    text: "Онлайн-платформа с интерактивной доской и записями уроков, которые пересматриваются сколько нужно.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Пробный формат экзамена",
    text: "Тренировочные ОГЭ в реальных условиях — чтобы на настоящем экзамене не было стресса.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v3M12 18v3" strokeLinecap="round" />
        <circle cx="12" cy="12" r="7" />
        <path d="M9.5 12h5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Advantages() {
  return (
    <SlideUp className={styles.section} id="advantages">
      <Container>
        <SectionHeading
          kicker="Почему мы"
          title="Ученикам и родителям удобно с нами"
          subtitle="Мы выстроили процесс так, чтобы подготовка давала результат, а не выматывала."
        />
        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <div key={feature.title} className={styles.block}>
              <div className={styles.head}>
                <span className={styles.icon}>{feature.icon}</span>
                <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.text}>{feature.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </SlideUp>
  );
}