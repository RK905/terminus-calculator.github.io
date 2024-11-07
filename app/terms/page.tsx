import { getTermsMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getTermsMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

            <div className="prose">
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Usage and Access</h2>
                    <p>
                        The BO6 Terminus Calculator is provided as a free online tool for solving Research Office terminal puzzles. By using our calculator, you agree to these terms of service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Permitted Use</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Personal, non-commercial use</li>
                        <li>Accessing the calculator through standard web browsers</li>
                        <li>Sharing the calculator link with other players</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Prohibited Use</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Unauthorized data collection or scraping</li>
                        <li>Attempts to modify or reverse engineer the calculator</li>
                        <li>Distribution of modified versions of the calculator</li>
                        <li>Commercial use without permission</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Service Availability</h2>
                    <p>
                        The Terminus Calculator is provided "as is" with no guarantees of:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Continuous availability</li>
                        <li>Error-free operation</li>
                        <li>Compatibility with all devices</li>
                        <li>Future maintenance</li>
                    </ul>
                    <p className="mt-3">
                        We strive to maintain reliable service but reserve the right to modify or discontinue the calculator at any time.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Disclaimer</h2>
                    <p>
                        The Terminus Calculator is a fan-created tool. We are not affiliated with, endorsed by, or connected to any game publishers or developers. All game-related trademarks and copyrights belong to their respective owners.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Modifications</h2>
                    <p>
                        We may update these terms of service periodically. Continued use of the calculator constitutes acceptance of any changes.
                    </p>
                </section>
            </div>
        </div>
    )
}