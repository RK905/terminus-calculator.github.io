// components/Footer.tsx

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="max-w-5xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Terminus Calculator. All rights reserved.</p>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                            {/* <li><a href="/contact" className="hover:underline">Contact Us</Link></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;