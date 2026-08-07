import type { Metadata } from "next";
import { Onest, Manrope } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Школа «Богатель» — подготовка к ОГЭ и олимпиадам для 5–9 классов",
  description:
    "Онлайн-школа подготовки к ОГЭ и олимпиадам для учеников 5–9 классов. Математика, русский язык, информатика и другие предметы. Занятия индивидуально.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}