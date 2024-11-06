import { getTermsMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getTermsMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
            <div className="space-y-4">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Terms of Use</h2>
                    <p>The BO6 Terminus Calculator is provided as a free service. By accessing and using this calculator, you agree to these terms of service.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Service Description</h2>
                    <p>This calculator is designed to help players solve puzzles in-game. It is provided "as is" without any warranties, express or implied.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Fair Use</h2>
                    <p>You may use this calculator for personal, non-commercial purposes. Any automated or systematic data collection is prohibited.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Disclaimer</h2>
                    <p>We are not affiliated with, endorsed by, or connected to any game publishers or developers. All game-related trademarks and copyrights belong to their respective owners.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Changes to Service</h2>
                    <p>We reserve the right to modify or discontinue the calculator service at any time, with or without notice.</p>
                </section>
            </div>
        </div>
        // <div className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert">
        //     <div className="text-center">
        //         <h1>Terms of Service</h1>

        //         <p><em>Last updated: November 03, 2024</em></p>
        //     </div>

        //     <section>
        //         <h2>1. Acceptance of Terms</h2>
        //         <p>
        //             By accessing or using our games and websites, you agree to be bound by these Terms.
        //             If you do not agree to these Terms, please do not use our services.
        //         </p>
        //     </section>

        //     <section>
        //         <h2>2. Usage Rules</h2>
        //         <p>When using our services, you agree to:</p>
        //         <ul>
        //             <li>Use our games for personal, non-commercial purposes only</li>
        //             <li>Not modify or attempt to reverse engineer our games</li>
        //             <li>Not use cheats, automation software, hacks, or other unauthorized third-party software</li>
        //             <li>Not exploit bugs or engage in any activity that disrupts the gaming experience for others</li>
        //         </ul>
        //     </section>

        //     <section>
        //         <h2>3. Intellectual Property</h2>
        //         <p>
        //             All content within our games and websites, including but not limited to:
        //         </p>
        //         <ul>
        //             <li>Graphics and visual elements</li>
        //             <li>Game code and mechanics</li>
        //             <li>Text and descriptions</li>
        //             <li>Logos and trademarks</li>
        //         </ul>
        //         <p>Are protected by intellectual property rights and belong to us or our licensors.</p>
        //     </section>

        //     <section>
        //         <h2>4. Game Accounts</h2>
        //         <p>If our games offer account features:</p>
        //         <ul>
        //             <li>You are responsible for maintaining the security of your account</li>
        //             <li>You are responsible for all activities that occur under your account</li>
        //             <li>We reserve the right to terminate accounts that violate these Terms</li>
        //         </ul>
        //     </section>

        //     <section>
        //         <h2>5. Disclaimer of Warranties</h2>
        //         <p>
        //             Our games are provided "as is" and "as available" without any warranties,
        //             express or implied. We do not guarantee that our services will be
        //             uninterrupted or error-free.
        //         </p>
        //     </section>

        //     <section>
        //         <h2>6. Limitation of Liability</h2>
        //         <p>We shall not be liable for any indirect, incidental, special, or consequential damages resulting from:</p>
        //         <ul>
        //             <li>Use or inability to use our services</li>
        //             <li>Any unauthorized access to or use of our servers</li>
        //             <li>Any bugs, viruses, or technical issues</li>
        //         </ul>
        //     </section>

        //     <section>
        //         <h2>7. Modifications</h2>
        //         <p>We reserve the right to:</p>
        //         <ul>
        //             <li>Modify these Terms at any time</li>
        //             <li>Change or discontinue any aspect of our games</li>
        //             <li>Suspend or terminate access to our services for any reason</li>
        //         </ul>
        //     </section>

        //     <section>
        //         <h2>8. General Provisions</h2>
        //         <ul>
        //             <li>These Terms constitute the entire agreement between you and us</li>
        //             <li>Our failure to enforce any right or provision of these Terms will not be considered a waiver</li>
        //             <li>If any provision of these Terms is found to be invalid, the remaining provisions will remain in effect</li>
        //         </ul>
        //     </section>

        //     <section>
        //         <h2>9. Contact Information</h2>
        //         <p>If you have any questions about these Terms, please contact us at:</p>
        //         <ul>
        //             <li>Email: contact@cookieclickerplus.com</li>
        //         </ul>
        //     </section>

        //     <p>This document was last updated on November 03, 2024.</p>
        // </div>
    )
}