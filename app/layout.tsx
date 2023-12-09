import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ShoppingCartProvider } from "./store/context/ShoppingCartContext";

const gyahegi = localFont({
  src: "./Gyahegi.otf",
  variable: "--font-gyahegi",
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICN 2024 Musical: Kaharsa",
  description: "Buy your tickets here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ICN-logo.png" />
      </head>
      <body
        className={`${montserrat.className} ${gyahegi.variable}`}
        suppressHydrationWarning={true}
      >
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </body>
    </html>
  );
}
