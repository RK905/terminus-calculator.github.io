import { Clock, MousePointer, Laptop, Users } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Clock className="w-12 h-12 mx-auto mb-4" />,
            title: "Save Time in Terminus",
            description: "Instantly solve the BO6 Terminus easter egg codes without manual calculations. Perfect for time-sensitive co-op sessions and speedruns."
        },
        {
            icon: <MousePointer className="w-12 h-12 mx-auto mb-4" />,
            title: "User-Friendly Interface",
            description: "Simple, intuitive design makes solving Terminus math puzzles effortless. Input symbols and receive your codes instantly."
        },
        {
            icon: <Laptop className="w-12 h-12 mx-auto mb-4" />,
            title: "Access Anywhere",
            description: "Free online BO6 calculator available on any device. No downloads required - solve Terminus codes right from your browser."
        },
        {
            icon: <Users className="w-12 h-12 mx-auto mb-4" />,
            title: "Perfect for Co-op",
            description: "Keep your team moving through the Terminus easter egg sequence without delays. Ideal for both solo and multiplayer sessions."
        }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
                    Why Use Our Terminus Code Calculator
                </h2>

                <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                    Streamline your BO6 Terminus easter egg hunt with our specialized calculator designed for efficient puzzle solving.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
                        >
                            {benefit.icon}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-center text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-blue-600 font-semibold">
                        Join thousands of players using our Terminus calculator for BO6 easter eggs
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;