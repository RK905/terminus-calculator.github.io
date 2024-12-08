import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metaConfig } from "@/meta.config";
import ShareThisScript from "@/components/script/ShareThisScript";
import { GoogleTagManager } from "@next/third-parties/google";
import AdSense from "@/components/script/AdSense";
import FloatingAds from "@/components/FloatingAds";

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
          <div className="flex flex-grow justify-center w-full">
            <div className="hidden xl:block w-[160px] pt-20">
              <FloatingAds pid="7105881377542983" slotId="5055352333" side="left" />
            </div>
            <main className="flex-grow w-full px-2 md:px-4 min-w-0 max-w-4xl">
              {children}
            </main>
            <div className="hidden xl:block w-[160px] pt-20">
              <FloatingAds pid="7105881377542983" slotId="3895709138" side="right" />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
