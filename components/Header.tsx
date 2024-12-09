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
                        alt="Terminus Calculator"
                        width={32}
                        height={32}
                        className="mr-2"
                    />
                    <span className="text-2xl font-bold">Terminus Calculator</span>
                </a>
                
                <nav className="hidden md:flex space-x-4">
                    <Button variant="ghost" asChild>
                        <a href="/guides">Tutorials</a>
                    </Button>
                    <Button variant="ghost" asChild>
                        <a href="/#faq">FAQ</a>
                    </Button>
                </nav>
            </div>
        </header>
    );
}

export default Header;