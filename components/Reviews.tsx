import { Star, ThumbsUp, Clock } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            text: "Saved 5000 points first try with the Terminus code calculator. Best BO6 tool ever!",
            author: "@ZombieSlayer",
            rating: 5,
            date: "2 days ago",
            likes: 234,
            highlight: "Instant code solutions"
        },
        {
            text: "Finally completed the Easter Egg thanks to this calculator. The code solver works perfectly every time.",
            author: "@TerminusPlayer",
            rating: 5,
            date: "1 week ago",
            likes: 189,
            highlight: "100% accurate"
        },
        {
            text: "Our team uses this BO6 Terminus code solver for every run. Never fails!",
            author: "@EasterEggPro",
            rating: 5,
            date: "3 days ago",
            likes: 156,
            highlight: "Team favorite"
        },
        {
            text: "The most reliable Terminus code calculator I've found. Perfect for Easter Egg runs.",
            author: "@CodeMaster",
            rating: 5,
            date: "5 days ago",
            likes: 142,
            highlight: "Easter Egg pro"
        },
        {
            text: "Quick and accurate terminal code solutions. Saved our team countless points!",
            author: "@TerminusVet",
            rating: 5,
            date: "1 day ago",
            likes: 167,
            highlight: "Team approved"
        },
        {
            text: "Best BO6 calculator for solving Research Office codes. Use it every game.",
            author: "@ZombieHunter",
            rating: 5,
            date: "4 days ago",
            likes: 198,
            highlight: "Daily essential"
        }
    ];

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                What Players Say About Our Terminus Code Calculator
            </h2>
            
            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <span className="text-lg font-bold">4.9/5</span>
                <span className="text-gray-600 ml-2">from 1.2M+ users</span>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                        {/* Rating Stars */}
                        <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        
                        {/* Highlight */}
                        <div className="inline-block bg-blue-50 text-blue-700 text-sm px-2 py-1 rounded mb-2">
                            {review.highlight}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 mb-4 min-h-[3rem]">"{review.text}"</p>
                        
                        {/* Review Meta */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-gray-500">
                            <span className="font-medium">{review.author}</span>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 whitespace-nowrap">
                                    <ThumbsUp className="w-4 h-4 shrink-0" />
                                    {review.likes}
                                </span>
                                <span className="flex items-center gap-1 whitespace-nowrap">
                                    <Clock className="w-4 h-4 shrink-0" />
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews; 