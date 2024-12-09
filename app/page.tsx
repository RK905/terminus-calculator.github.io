// app/page.tsx

import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import LatestGuides from "@/components/LatestGuides";
import TerminusCalculator from "@/components/TerminusCalculator";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import { siteUrl } from "@/meta.config";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Calculator, PlayCircle, Zap, Target, Users } from "lucide-react";

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
      <section className="max-w-4xl mx-auto text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Terminus Code Calculator for BO6
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600">
          Free calculator for solving Terminus codes in Black Ops 6. Save 5000 points instantly with our Research Office terminal puzzle solver. Used by over 1.2M players!
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#calc-title" className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Solve Code Now
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#tutorial" className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Tutorial
            </a>
          </Button>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="mb-12" id="calc-title">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Terminus Code Solver
        </h2>
        <TerminusCalculator />
      </section>

      {/* Stats Section */}
      <Stats />

      {/* How it Works Section */}
      <section className="mb-12">
        <HowItWorks />
      </section>

      {/* Tutorial Video Section */}
      <section className="mb-12 px-4" id="tutorial">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">How to Use Terminus Code Calculator (BO6) - Video Guide</h2>
        <div className="max-w-3xl mx-auto">
          <YouTubeEmbed videoid="kJYTyNwMyQE" />
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Watch our step-by-step guide on solving the Terminus Easter Egg puzzle
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12 px-4">
        <Benefits />
      </section>

      {/* LatestGuides Section */}
      <section className="mb-12 px-4">
        <LatestGuides />
      </section>

      {/* Reviews Section */}
      <section className="mb-12 px-4">
        <Reviews />
      </section>

      {/* FAQ Section */}
      <section className="mb-12 px-4" id="faq">
        <FAQ />
      </section>

    </div>
  );
}
