import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clyde — Less inbox. More freight.",
  description: "Clyde automates freight email, paperwork, and load actions so brokers and 3PLs can spend less time checking email and more time moving freight.",
  openGraph: {
    title: "Clyde — Less inbox. More freight.",
    description: "AI freight inbox automation for brokers and 3PLs.",
    siteName: "Clyde",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
