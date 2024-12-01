// components/Footer.tsx

import Link from "next/link";

const Footer = () => {
    const links = [
        { name: 'Terms of Service', href: '/terms', external: false },
        { name: 'Privacy Policy', href: '/privacy', external: false },
        { name: 'Camel Calculator', href: 'https://camelcalculator.org/', external: true },
        { name: 'Sprunki Incredibox', href: 'https://sprunki-incredibox.io/', external: true },
        { name: 'Headcanon Generator', href: 'https://headcanon-generator.org/', external: true },
    ];

    return (
        <footer className="border-t bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Copyright section */}
                <div className="text-center text-sm text-gray-500 mb-4">
                    © 2024 Terminus Calculator. All rights reserved.
                </div>

                {/* Links section */}
                <div className="flex flex-wrap justify-center gap-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            {...(link.external && {
                                target: "_blank",
                            })}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
