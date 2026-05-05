import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CNR Solutions | Müşteri Akışı Standardı",
  description:
    "Norm, WhatsApp, Instagram, telefon ve web formundan gelen müşteri taleplerini görünür bir takip akışına dönüştürür.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
