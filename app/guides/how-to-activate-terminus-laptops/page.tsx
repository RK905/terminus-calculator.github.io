import Image from 'next/image';
import Link from 'next/link';
import { Clock, Laptop, User } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { siteUrl } from '@/meta.config';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'How to Activate Laptops in Terminus Map - BO6 Guide',
        description: 'Complete guide to finding and activating laptops in the Terminus map. Learn exact locations, step-by-step activation process, and how to use the Terminus Calculator for solving XYZ equations in BO6 Zombies.',
        keywords: "",
        alternates: {
            canonical: `${siteUrl}/guides/how-to-activate-terminus-laptops`,
        }
    }
}

const LaptopGuidePage = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">

            <Breadcrumb
                items={[
                    { label: 'Guides', href: '/guides' },
                    { label: 'How to Activate Laptops' }
                ]}
            />

            {/* Article Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    How do I activate the laptops around the Terminus map
                </h1>

                <div className="flex items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>3 min read</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Beginner Friendly</span>
                    </div> */}
                    <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4" />
                        <span>Last Updated: Nov 09, 2024</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image
                        src="/images/terminus-map.jpeg"
                        alt="Terminus Map Laptop Locations"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
                <p>
                    To activate the laptops around the <strong>Terminus</strong> map in <em>Call of Duty: Black Ops 6</em> (BO6) Zombies, follow these detailed steps:
                </p>

                <h2>Step-by-Step Guide to Activating Laptops</h2>

                <h3>1. Locate the Laptops</h3>
                <p>
                    There are three laptops that you need to find and activate. Each laptop corresponds to a variable (X, Y, Z) needed for solving the math puzzle. Here are their locations:
                </p>

                <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                    {/* X Laptop Card */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">X Laptop</h4>
                        <p className="text-gray-700">
                            <strong>Location:</strong> Near the Docks, under the Sea Tower
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Located at the top of the stairs leading down to the docks area
                        </p>
                    </div>

                    {/* Y Laptop Card */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Y Laptop</h4>
                        <p className="text-gray-700">
                            <strong>Location:</strong> Outside near Quick Revive
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Found in the Storage Area, close to spawn and Interrogation Rooms
                        </p>
                    </div>

                    {/* Z Laptop Card */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Z Laptop</h4>
                        <p className="text-gray-700">
                            <strong>Location:</strong> Outside Control Center
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Near Stamin-Up machine in the area containing the Armory
                        </p>
                    </div>
                </div>

                <h3>2. Activating Each Laptop</h3>
                <ul>
                    <li>Approach each laptop and press the interact button (usually indicated by a prompt on your screen)</li>
                    <li>Once activated, each laptop will display a symbol along with a corresponding number on sticky notes</li>
                    <li>Take note of these numbers as they will be used later to solve the math equations</li>
                </ul>

                <h3>3. Collecting Information</h3>
                <p>
                    After activating all three laptops, you will have three symbols and their associated numbers (X, Y, Z).
                    The symbols may change with each game session, so it's essential to record them each time you play.
                </p>

                <h3>4. Using the Terminus Calculator</h3>
                <div className="bg-blue-50 p-6 rounded-lg my-6 not-prose">
                    <h4 className="font-bold text-lg mb-4">Quick Solution Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Visit our <Link href="/calculator" className="text-blue-600 hover:underline">Terminus Calculator</Link></li>
                        <li>Input the values you collected from each laptop into the corresponding X, Y, Z fields</li>
                        <li>Click "Calculate" to instantly get your results</li>
                        <li>Use these results in the Research Office computer</li>
                    </ol>
                </div>

                <h3>Why Use Our Calculator?</h3>
                <ul>
                    <li><strong>Save Time:</strong> No need for manual calculations during intense gameplay</li>
                    <li><strong>Avoid Errors:</strong> Eliminate mistakes that could cost you precious time</li>
                    <li><strong>Focus on Gaming:</strong> Keep your attention on surviving and completing objectives</li>
                    <li><strong>Perfect for Co-op:</strong> Quick solutions when playing with teammates</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    Activating and using the laptops in Terminus is crucial for progressing through <em>Black Ops 6</em> Zombies'
                    Easter egg challenges. With our Terminus Calculator, you can quickly convert the laptop values into the correct
                    codes needed for the Research Office computer.
                </p>

                <h3>Additional Tips</h3>
                <ul>
                    <li>Remember to activate all three laptops before using the calculator</li>
                    <li>Keep track of which symbol corresponds to which variable (X, Y, Z)</li>
                    <li>Have one team member ready at the Research Office while others gather the laptop codes</li>
                    <li>Consider taking screenshots of the symbols if you're having trouble remembering them</li>
                </ul>
            </div>
        </article>
    );
};

export default LaptopGuidePage;