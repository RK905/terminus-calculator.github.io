import { getPrivacyMetaConfig } from "@/meta.config"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    return getPrivacyMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto  px-4 py-8 prose dark:prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
            <div className="space-y-4">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
                    <p>The BO6 Terminus Calculator does not collect, store, or process any personal information. All calculations are performed locally in your browser.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Cookies</h2>
                    <p>We do not use cookies or any other tracking technologies on our website.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
                    <p>Our website may use basic analytics tools to understand overall usage patterns. These services may collect anonymous usage data.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Children's Privacy</h2>
                    <p>Our service is available to all users and does not knowingly collect any information from anyone, including children under 13.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
                    <p>If you have any questions about this privacy policy, you can contact us through our provided contact methods.</p>
                </section>
            </div>

            <div className="mt-8 text-sm text-gray-600">
                Last updated: November 7, 2024
            </div>
        </div>
    )
}