// components/Header.tsx

import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <header className="border-b">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Terminus Calculator Icon"
                        width={32}
                        height={32}
                        className="mr-2"
                    />
                    <span className="text-2xl font-bold">Terminus Calculator</span>
                </a>
                <nav className="hidden md:flex">
                    <a href="https://sprunki-incredibox.io/" title="Sprunki Incredibox" target="_blank" className="px-4">
                        <Image
                            src="/sprunki-incredibox.png"
                            alt="Sprunki Incredibox"
                            width={32}
                            height={32} />
                    </a>

                    <ul className="flex space-x-4">
                        <li><Button variant="ghost" asChild><a href="/guides">BO6 Guides</a></Button></li>
                        <li><Button variant="ghost" asChild><a href="/about">About</a></Button></li>
                    </ul>
                </nav>
                {/* <div className="hidden md:flex">
                    <LocaleSwitcher />
                </div> */}

                {/* Mobile Menu */}
                {/* <MobileMenu /> */}
            </div>
        </header>
    )
}

export default Header;