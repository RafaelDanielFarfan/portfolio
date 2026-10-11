import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Rafael Daniel Farfán — SDET / QE Automation · Full Stack Developer",
  description: "SDET / QE Automation Engineer and Full Stack Developer. Playwright, Selenium, Java, Python, React.",
  metadataBase: new URL("https://rafaeldanielfarfan.github.io/portfolio/"),
  openGraph: {
    title: "Rafael Daniel Farfán — SDET / QE Automation · Full Stack Developer",
    description: "QE Automation Engineer and Full Stack developer. Playwright, Selenium, Java, Spring Boot, React.",
    url: "https://rafaeldanielfarfan.github.io/portfolio/",
    type: "website",
    images: [{ url: "og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
