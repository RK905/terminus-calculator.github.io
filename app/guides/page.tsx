// app/guides/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Filter } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { getGuidesMetaConfig } from '@/meta.config';
import { Metadata } from 'next';

// 这里模拟文章数据，实际应该从数据源获取
const guides = [
  {
    title: "How to Activate Laptops in Terminus Map",
    slug: "how-to-activate-terminus-laptops",
    description: "Complete guide to finding and activating laptops in the Terminus map. Learn exact locations and step-by-step activation process.",
    image: "/images/terminus-map.jpeg",
    category: "Terminus Calculator",
    readTime: "5 min",
    date: "2024-11-09",
    difficulty: "Beginner"
  },
  {
    title: "Essential Tips for BO6 Zombies Mode",
    slug: "bo6-zombies-essential-tips",
    description: "Master BO6 Zombies mode with our essential tips and strategies. Learn about herding zombies, weapon management, and survival tactics.",
    image: "/images/bo6-zombies-guide.jpeg",
    category: "Gameplay",
    readTime: "10 min",
    date: "2024-11-10",
    difficulty: "All Levels"
  },
  // Add more guides...
];

const categories = [
  { label: "All Guides", value: "all" },
  { label: "Terminus Calculator", value: "calculator" },
  { label: "Easter Eggs", value: "easter-eggs" },
  { label: "Gameplay", value: "gameplay" },
];

const difficulties = [
  { label: "All Levels", value: "all" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

export async function generateMetadata(): Promise<Metadata> {
  return getGuidesMetaConfig();
}

export default function GuidesPage() {
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
        {guides.map((guide, index) => (
          <Link 
            href={`/guides/${guide.slug}`}
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {guide.category}
              </div> */}
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {guide.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {guide.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime}</span>
                  </div>
                  {/* <span className="text-blue-600 font-medium">
                    {guide.difficulty}
                  </span> */}
                </div>
                <time dateTime={guide.date}>
                  {new Date(guide.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}