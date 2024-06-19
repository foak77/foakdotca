import { Indie_Flower, Nunito } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const indie = Indie_Flower({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
