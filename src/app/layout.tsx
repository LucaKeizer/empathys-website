import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieNotification from "@/components/CookieNotification";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} antialiased`}>
      <head>
        {/* Preload critical images to prevent flash and layout shift */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/book-cover.png"
          type="image/png"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/empathys-logo.png"
          type="image/png"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/images/empathys-logo-white.png"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} page-container`}>
        <CartProvider>
          <div className="page-header">
            <Navigation />
          </div>
          <main className="page-main">{children}</main>
          <div className="page-footer">
            <Footer />
          </div>
          <CookieNotification />
        </CartProvider>
      </body>
    </html>
  );
}