import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Rafael Daniel Farfán — SDET / QE Automation Engineer",
  description: "SDET / QE Automation Engineer and Full Stack developer. Playwright, Selenium, Java, Python, React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
