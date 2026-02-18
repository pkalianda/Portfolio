import type { Metadata } from "next";
import { Manrope, Reenie_Beanie } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
});

export const metadata: Metadata = {
  title: "Prayag Kalianda - Product Designer",
  description: "Portfolio of Prayag Kalianda, Product Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${reenieBeanie.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
