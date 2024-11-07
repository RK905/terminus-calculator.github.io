import { getAboutMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getAboutMetaConfig();
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto  px-4 py-8 prose dark:prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-center">About Terminus Calculator</h1>
            <p className="mb-6 text-center">
                The Terminus Calculator is a specialized online tool designed for Black Ops 6 players tackling the Research Office puzzle. Born from the gaming community's need for quick and accurate solutions, this calculator helps players save valuable resources and time during their gameplay sessions.
            </p>
            
            <div>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Our free BO6 Terminus Calculator features:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Instant terminal code calculations</li>
                        <li>Mobile-friendly interface for easy use during gameplay</li>
                        <li>Regular updates to maintain accuracy</li>
                        <li>Simple symbol-matching system</li>
                        <li>Community-tested formulas</li>
                        <li>No registration required</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">How the Terminus Calculator Works</h2>
                    <p>
                        Input the three symbols you find at the Research Office terminal into our calculator's X, Y, and Z sections. The calculator instantly processes these symbols using verified formulas to generate the exact numerical sequence needed for the terminal puzzle.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Why Use Our Calculator</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Save time and resources on puzzle solving</li>
                        <li>Get accurate results every time</li>
                        <li>Access from any device</li>
                        <li>No downloads needed</li>
                        <li>Always free to use</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Community Support</h2>
                    <p>
                        The Terminus Calculator is maintained by dedicated players who understand the importance of reliable tools for the gaming community. We regularly test and verify our calculations to ensure consistent accuracy with game updates.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                    <p>
                        For questions, feedback, or support, reach out to us at <span> </span>
                        <a href="https://github.com/terminus-calculator/terminus-calculator.github.io/issues">
                            github issues
                        </a>
                    </p>
                </section>

                <p className="text-sm text-gray-600 mt-8">
                    Note: This is a fan-made tool created to help the gaming community. We are not affiliated with any game developers or publishers.
                </p>
            </div>
        </div>
    )
}
