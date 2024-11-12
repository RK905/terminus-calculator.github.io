// components/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="flex items-center hover:text-blue-600">
                <Home className="w-4 h-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-2" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-blue-600 hover:underline"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-900 font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;