// app/page.tsx

import FAQ from "@/components/FAQ";
import TerminusCalculator from "@/components/TerminusCalculator";
import { siteUrl } from "@/meta.config";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${siteUrl}/`,
    },
  }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Terminus Calculator (BO6)
        </h1>
        <p className="text-lg mb-8">
          A free calculator for solving the Research Office terminal codes, easter eggs, and xyz in BO6 Terminus map. Match the symbols to instantly get your sequence.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="mb-12">
        <h2 id="calc-title" className="text-2xl font-bold text-gray-800 text-center mb-6">
          Terminus Code Calculator
        </h2>
        <TerminusCalculator />
      </section>

      {/* Tutorial Video Section */}
      <section className="mb-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">How to Use Terminus Calculator (BO6)</h2>
        <div className="max-w-3xl mx-auto">
          <YouTubeEmbed videoid="kJYTyNwMyQE" />
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Watch our step-by-step guide on solving the Terminus Easter Egg puzzle
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 px-4" id="faq">
        <FAQ />
      </section>

    </div>
  );
}
