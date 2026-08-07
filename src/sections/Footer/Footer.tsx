import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#programs", label: "Программы" },
  { href: "#teachers", label: "Преподаватели" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <Logo />
          <span className={styles.brandName}>Школа «Богатель»</span>
        </a>

        <nav className={styles.nav} aria-label="Навигация в подвале">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className={styles.copy}>© {new Date().getFullYear()} Онлайн-школа «Богатель»</p>
      </Container>
    </footer>
  );
}