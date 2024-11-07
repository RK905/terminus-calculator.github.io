import { getPrivacyMetaConfig } from "@/meta.config"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    return getPrivacyMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto  px-4 py-8 prose dark:prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

            <div>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Data Collection</h2>
                    <p>
                        The BO6 Terminus Calculator prioritizes your privacy. Here's how we handle data:
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">What We Don't Collect</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Personal information</li>
                        <li>User accounts or credentials</li>
                        <li>Gameplay data</li>
                        <li>IP addresses</li>
                        <li>Browser information</li>
                        <li>Usage statistics</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Our Commitment</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>No data storage: All calculations are performed locally in your browser</li>
                        <li>No cookies: We don't use cookies or tracking technologies</li>
                        <li>No third-party sharing: We don't share any information because we don't collect any</li>
                        <li>No analytics: We don't track user behavior or usage patterns</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Technical Operation</h2>
                    <p>
                        The Terminus Calculator operates entirely within your web browser. Each calculation is processed locally, meaning:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>No data is sent to our servers</li>
                        <li>No information is stored between sessions</li>
                        <li>No personal data is required for operation</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Third-Party Services</h2>
                    <p>
                        Our website does not integrate with any third-party services that might collect user data. We don't use:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Analytics tools</li>
                        <li>Advertising networks</li>
                        <li>Social media plugins</li>
                        <li>User tracking systems</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-600 mt-8">
                    Last Updated: November 2024
                </p>
            </div>
        </div>
    )
}