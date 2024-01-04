import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ShoppingCartProvider } from "./store/(context)/ShoppingCartContext";
import { DataProvider } from "./store/(context)/StoreDataContext";

const gyahegi = localFont({
  src: "./Gyahegi.otf",
  variable: "--font-gyahegi",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ICN 2024 Musical: Kaharsa",
  alternateName: ["ICN", "ICN Musical"],
  url: "https://www.show.icnmusical.com/",
  description: "Buy your tickets here",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICN 2024 Musical: Kaharsa",
  description: "Buy your tickets here",
  keywords:
    "ICN, ICN Musical, Indonesia Cultural Night, NTU, ICN NTU, Indonesia Cultural Night NTU, NTU Indonesia",
  applicationName: "Show ICN 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.className} ${gyahegi.variable}`}
        suppressHydrationWarning={true}
      >
        <DataProvider>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </DataProvider>
      </body>
    </html>
  );
}
