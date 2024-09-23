import { Sora, Onest, Plus_Jakarta_Sans } from "next/font/google";

export const soraSans = Sora({
  variable: "--soraSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const onestSans = Onest({
  variable: "--onestSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plusJakartaSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});
