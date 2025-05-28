import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empathys - Verbinding en Vertrouwen",
  description: "Empathys staat voor verbinding en vertrouwen. Trainingen voor kinderen, professionals en ouders. Therapeutisch prentenboek 'Samen naar de Finish'.",
  keywords: "empathys, kindertraining, oudercursus, therapeutisch prentenboek, hoogbegaafdheid, sova-breintraining",
  authors: [{ name: "Empathys" }],
  openGraph: {
    title: "Empathys - Verbinding en Vertrouwen",
    description: "Trainingen voor kinderen, professionals en ouders",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}