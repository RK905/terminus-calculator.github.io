import Image from 'next/image';
import { Clock } from 'lucide-react';
import { getSortedPostsData } from '@/lib/posts';

const FeaturedGuides = () => {

  const posts = getSortedPostsData().slice(0, 4);

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
          {posts.map(({ id, date, title, image, readTime, description }) => (
            <a
              href={`/guides/${id}`}
              key={id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={image}
                  alt={`${title} - BO6 Terminus Guide`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{readTime} read</span>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    Read Guide →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <a
            href="/guides"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Guides
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedGuides;