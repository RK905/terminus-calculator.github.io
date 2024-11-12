import Image from 'next/image';
import Link from 'next/link';
import { Clock, Target, Star } from 'lucide-react';

const FeaturedGuides = () => {
  const guides = [
    {
      title: "How to Activate Laptops in Terminus Map - BO6 Guide",
      slug: "how-to-activate-terminus-laptops",
      description: "Complete guide to finding and activating laptops in the Terminus map. Learn exact locations, step-by-step activation process, and how to use the Terminus Calculator for solving XYZ equations in BO6 Zombies.",
      image: "/images/terminus-map.jpeg",
      readTime: "5 min",
      difficulty: "Beginner",
      featured: true
    },
    {
      title: "Essential Tips for BO6 Zombies Mode - Complete Guide",
      slug: "bo6-zombies-essential-tips",
      description: "Master BO6 Zombies mode with our essential tips and strategies. Learn about herding zombies, weapon management, movement techniques, and crucial survival tactics for both beginners and experienced players.",
      image: "/images/bo6-zombies-guide.jpeg",
      readTime: "10 min",
      difficulty: "Advanced",
      featured: true
    }
  ];

  return (
    <section className="px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
          BO6 Terminus Guides
        </h2>

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          From basic tutorials to advanced strategies, find everything you need to master the Terminus map
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <Link
              href={`/guides/${guide.slug}`}
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={guide.image}
                  alt={`${guide.title} - BO6 Terminus Guide`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {guide.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime} read</span>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <Link
            href="/guides"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Guides
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedGuides;