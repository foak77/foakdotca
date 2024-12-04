import styles from "./Layout.module.scss";
import MainHeader from "./../components/MainHeader/MainHeader";
import MainFooter from "./../components/MainFooter/MainFooter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { nunito } from "./fonts";

export const metadata = {
  title: "Welcome to Fred's Web Page",
  description: "This is Frederico's Web Page Resume",
  keywords: [
    "Resume",
    "Portfolio",
    "Graphic Design",
    "Industrial Design",
    "Web Design",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className} ${styles.html}`}>
      <body className={styles.body}>
        <section className={styles.home}>
          <MainHeader />
          <section className={styles.pageBlock}>{children}</section>
          <MainFooter />
        </section>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
