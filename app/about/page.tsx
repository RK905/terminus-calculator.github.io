import { getAboutMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getAboutMetaConfig();
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto  px-4 py-8 prose dark:prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-center">About Terminus Calculator</h1>

            <div className="space-y-6 text-gray-700">
                <section>
                    <h2 className="text-xl font-semibold text-[#374151] mb-3">Our Mission</h2>
                    <p>
                        Terminus Calculator was created to help Black Ops 6 players solve the Research Office terminal puzzle quickly and accurately. Our goal is to save players' time and in-game resources with a reliable, easy-to-use tool.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#374151] mb-3">What We Offer</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Free and instant access to accurate puzzle solutions</li>
                        <li>Mobile-friendly design for convenient use during gameplay</li>
                        <li>Regular updates to maintain accuracy with game patches</li>
                        <li>Clear, user-friendly interface for quick results</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#374151] mb-3">Why Trust Us</h2>
                    <p>
                        Our calculator has been thoroughly tested by experienced players to ensure 100% accuracy. We maintain the tool regularly and update it promptly with any game changes to provide reliable results every time.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#374151] mb-3">Community Contribution</h2>
                    <p>
                        As passionate gamers ourselves, we understand the importance of community tools. That's why we've made this calculator completely free and continue to improve it based on player feedback.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h2 className="text-xl font-semibold text-[#374151] mb-3">Contact Us</h2>
                    <p className="mb-4">
                        Have questions, suggestions, or found a bug? We'd love to hear from you!
                    </p>
                    <div className="flex items-center space-x-2">
                        <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <a
                            href="mailto:contact@terminuscalculator.com"
                            className="text-[#5436DA] hover:text-[#7B61FF] transition-colors"
                        >
                            contact@terminuscalculator.com
                        </a>
                    </div>
                </section>

                <footer className="text-sm text-gray-500 mt-8">
                    <p>
                        Note: Terminus Calculator is a fan-made tool and is not affiliated with, endorsed by, or connected to any game publishers or developers.
                    </p>
                </footer>
            </div>
        </div>
    )
}
