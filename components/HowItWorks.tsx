import { Monitor, MapPin, Calculator } from 'lucide-react';
import Image from 'next/image';

const HowItWorks = () => {
    const steps = [
        {
            icon: <MapPin className="w-12 h-12 mx-auto mb-4" />,
            title: "Locate Laptops in Terminus Map",
            description: "Find three laptops across the BO6 Terminus map: Communications Building, Quick Revive area, and Sea Tower docks. Each laptop reveals specific numbers for the puzzle."
        },
        {
            icon: <Monitor className="w-12 h-12 mx-auto mb-4" />,
            title: "Collect XYZ Symbols",
            description: "Match the numbers from sticky notes with their corresponding X, Y, Z symbols found near each laptop in the Terminus easter egg sequence."
        },
        {
            icon: <Calculator className="w-12 h-12 mx-auto mb-4" />,
            title: "Use Terminus Calculator",
            description: "Input your collected values into our BO6 Terminus calculator to instantly receive the correct codes needed to progress through the game."
        }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                    How to Use Terminus Code Calculator (BO6)
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {step.icon}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                                Step {index + 1}: {step.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative w-full mt-8 aspect-video">
                    <Image
                        src="/images/terminus-map.jpeg"
                        alt="Terminus Map"
                        fill
                        sizes="(max-width: 768px) 100vw, 1200px"
                        className="object-cover"
                    />
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <p className="max-w-2xl mx-auto">
                        Our Terminus code calculator for BO6 simplifies the easter egg solving process,
                        allowing you to focus on gameplay instead of complex calculations. Perfect for
                        both solo and co-op players tackling the Terminus map challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;