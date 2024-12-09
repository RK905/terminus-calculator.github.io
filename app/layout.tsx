import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metaConfig } from "@/meta.config";
import ShareThisScript from "@/components/script/ShareThisScript";
import { GoogleTagManager } from "@next/third-parties/google";
import AdSense from "@/components/script/AdSense";

export async function generateMetadata(): Promise<Metadata> {
  return metaConfig;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TG63FTSG" />
      <head>
        {/* <MultitagScript /> */}
        <AdSense pid="7105881377542983" />
        <ShareThisScript id="672ba513d01e2b0012552a27" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Terminus Calculator",
              "applicationCategory": "Game Tool",
              "operatingSystem": "Any",
              "description": "Free calculator for solving Terminus codes in Black Ops 6",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`antialiased bg-[#FAFAFA]`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full max-w-5xl mx-auto px-2 md:px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
