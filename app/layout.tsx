import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const gyahegi = localFont({
  src: "./Gyahegi.otf",
  variable: "--font-gyahegi",
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICN Show 2024",
  description: "Buy your tickets here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${gyahegi.variable} overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
