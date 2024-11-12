import Image from 'next/image';
import { Clock, Target, Users, Sword, Laptop } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Metadata } from 'next';
import { siteUrl } from '@/meta.config';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Essential Tips for BO6 Zombies Mode - Complete Guide',
        description: 'Master Zombies mode in Black Ops 6 with our comprehensive guide covering essential tips, weapon strategies, and survival tactics.',
        keywords: "",
        alternates: {
            canonical: `${siteUrl}/guides/bo6-zombies-essential-tips`,
        }
    }
}

const ZombiesGuidePage = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">

            <Breadcrumb
                items={[
                    { label: 'Guides', href: '/guides' },
                    { label: 'Essential Tips and Strategies for BO6 Zombies Mode' }
                ]}
            />

            {/* Article Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Essential Tips and Strategies for BO6 Zombies Mode
                </h1>

                <div className="flex items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>10 min read</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>All Skill Levels</span>
                    </div> */}
                    <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4" />
                        <span>Last Updated: Nov 10, 2024</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image
                        src="/images/bo6-zombies-guide.jpeg"
                        alt="BO6 Zombies Mode Gameplay"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
                <p>
                    Master the <strong>Zombies mode</strong> in <em>Call of Duty: Black Ops 6</em> (BO6) with our comprehensive guide.
                    Whether you're a beginner or experienced player, these essential tips and strategies will help you survive longer
                    and complete objectives more efficiently.
                </p>

                <h2>Essential Zombies Tips and Tricks</h2>

                <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <Sword className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Zombie Herding</h3>
                        <p className="text-gray-700">
                            Master the art of herding zombies into large groups for efficient kills and maximum Essence points.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <Target className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Movement Strategy</h3>
                        <p className="text-gray-700">
                            Stay mobile and use the mini-map to track zombies. Standing still is a deadly mistake.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <Users className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Team Coordination</h3>
                        <p className="text-gray-700">
                            Coordinate with teammates to maximize efficiency in resource management and objective completion.
                        </p>
                    </div>
                </div>

                <h3>Herding Zombies</h3>
                <p>
                    One of the most crucial skills in Zombies mode is manipulating zombie movements. Here's how to master it:
                </p>
                <ul>
                    <li>Group zombies into large clusters for efficient elimination</li>
                    <li>Aim for critical hits to maximize Essence points</li>
                    <li>Use wide open areas for better control of zombie hordes</li>
                    <li>Keep track of spawn points to predict zombie movements</li>
                </ul>

                <h3>Weapon Management</h3>
                <div className="bg-blue-50 p-6 rounded-lg my-6 not-prose">
                    <h4 className="font-bold text-lg mb-4">Starting Weapons Tips:</h4>
                    <ul className="space-y-2">
                        <li>✓ Your knife is an instant kill up to round 4</li>
                        <li>✓ Upgrade your knife at Arsenal vending machines</li>
                        <li>✓ Save points early game by using melee kills</li>
                        <li>✓ Understand weapon rarity system (gray to gold)</li>
                    </ul>
                </div>

                <h2>Game Features and Mechanics</h2>

                <h3>Weapon Loadouts</h3>
                <p>
                    Customize your loadouts effectively by considering:
                </p>
                <ul>
                    <li>Weapon rarity affects damage output</li>
                    <li>Different weapons excel at different tasks</li>
                    <li>Balance between close and long-range options</li>
                    <li>Consider team composition when selecting weapons</li>
                </ul>

                <h3>Currency System</h3>
                <p>
                    Managing your points effectively is crucial for success:
                </p>
                <ul>
                    <li>Earn more points through critical kills</li>
                    <li>Prioritize door purchases that open key areas</li>
                    <li>Save points for Mystery Box when needed</li>
                    <li>Invest in Perk-a-Cola machines strategically</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-lg my-8 not-prose">
                    <h4 className="font-bold text-lg mb-4">Pro Tips for Advanced Players:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Keep a few zombies alive at round end for completing objectives</li>
                        <li>Coordinate Mystery Box usage with teammates</li>
                        <li>Learn optimal training routes for each map</li>
                        <li>Practice efficient point-earning techniques</li>
                    </ol>
                </div>

                <h2>Survival Strategies</h2>
                <p>
                    Follow these key strategies to survive higher rounds:
                </p>
                <ul>
                    <li><strong>Constant Movement:</strong> Keep moving to avoid being surrounded</li>
                    <li><strong>Resource Management:</strong> Balance ammunition and points</li>
                    <li><strong>Map Awareness:</strong> Know escape routes and camping spots</li>
                    <li><strong>Team Communication:</strong> Coordinate with teammates effectively</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    Mastering Zombies mode in BO6 requires practice and understanding of core mechanics. Focus on these essential
                    tips while developing your own strategies. Remember that success comes from both individual skill and team
                    coordination.
                </p>
            </div>
        </article>
    );
};

export default ZombiesGuidePage;