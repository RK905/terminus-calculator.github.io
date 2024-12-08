// meta.config.ts

import { Metadata } from "next";
import { isDevelopment } from "./lib/utils";

const siteTitle = "Terminus Code Calculator | BO6 Easter Egg Solver";
const siteTitleTemplate = "Terminus Calculator (BO6)";
const siteDescription = "Free Terminus code calculator for Black Ops 6 Zombies. Instantly solve Easter Egg puzzles and save 5000 points. Get Research Office terminal solutions and XYZ coordinates.";

export const siteUrl = isDevelopment() ? "http://localhost:3000" : "https://terminus-calculator.github.io";

export const metaConfig: Metadata = {
    title: {
        default: siteTitle,
        template: `%s | Terminus Calculator (BO6)`,
    },
    description: siteDescription,
    keywords: 'terminus code, bo6 terminus code, terminus easter egg code solver, terminus calculator, bo6 code solver, terminus xyz calculator',
    verification: {
        google: 'lTwaQTJ2H6vMNYMUd9ooaLxzvssiGoQEuoRdsOYNX8g',
    },
    openGraph: {
        title: siteTitle,
        description: 'Free calculator for Terminus codes. Save 5000 points instantly with our Research Office terminal puzzle solver.',
        url: `${siteUrl}/`,
        siteName: siteTitle,
        images: [
            {
                url: `${siteUrl}/logo.svg`,
                width: 1200,
                height: 630,
                alt: siteTitle,
            },
        ],
        type: 'website',
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
            { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
            { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteUrl}/site.webmanifest`,
};

export function getAboutMetaConfig(): Metadata {
    const title = "About Terminus Calculator";
    const description = "Terms of service and usage conditions for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/about`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/about`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getTermsMetaConfig(): Metadata {
    const title = "Terms of Service";
    const description = "Terms of service and usage conditions for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/terms`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/terms`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getPrivacyMetaConfig(): Metadata {
    const title = "Privacy Policy";
    const description = "Privacy policy and data collection practices for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/privacy`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/privacy`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getGuidesMetaConfig(): Metadata {
    return {
        title: 'BO6 Terminus Calculator Guides & Tutorials',
        description: 'Comprehensive guides for Terminus Calculator, including BO6 math solutions, easter eggs, equation calculator tutorials, and gameplay strategies. Master the Terminus math calculator with our detailed walkthroughs.',
        alternates: {
            canonical: `${siteUrl}/guides`,
        },
        keywords: [
            'terminus calculator',
            'bo6 terminus',
            'bo6 terminus calculator',
            'bo6 calculator',
            'easter egg terminus',
            'terminus code',
            'equation calculator',
            'terminus equation calculator',
            'terminus equation',
            'math calculator',
            'terminus math',
            'terminus math calculator'
        ],
        openGraph: {
            title: 'BO6 Terminus Calculator Guides & Tutorials',
            description: 'Complete guides and tutorials for Terminus Calculator - Your ultimate resource for BO6 math solutions and gameplay strategies.',
            url: `${siteUrl}/guides`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    };
}