import Breadcrumb from '@/components/Breadcrumb';
import { getSortedPostsData } from '@/lib/posts';
import { Clock } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    readTime: string;
    description?: string;
}

export default function BlogIndex() {
    const allPostsData: BlogPost[] = getSortedPostsData();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Breadcrumb
                items={[
                    { label: 'Guides' }
                ]}
            />

            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    BO6 Guides & Tutorials
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive guides for Terminus Calculator, easter eggs, and gameplay strategies
                </p>
            </div>

            {/* Guides Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {allPostsData.map(({ id, date, title, image, readTime, description }) => (
                    <a
                        href={`/guides/${id}`}
                        key={id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                    >
                        <div className="relative w-full aspect-video">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                {title}
                            </h2>

                            <p className="text-gray-600 mb-4">
                                {description}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{readTime}</span>
                                    </div>
                                </div>
                                <time dateTime={date}>
                                    {new Date(date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}