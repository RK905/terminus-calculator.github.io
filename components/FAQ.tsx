const FAQ = () => {
    const faqList = [
        {
            question: "What is the Terminus Code Calculator?",
            answer: "The Terminus Code Calculator is a free tool that instantly solves codes in BO6 Terminus map. It helps you solve Research Office terminal codes, saving 5000 points/essence on your first try. Simply match the symbols and get your code solution immediately."
        },
        {
            question: "How do I find and solve BO6 Terminus codes?",
            answer: "To solve BO6 Terminus codes: 1) Find the three laptops in Research Office, 2) Input the symbols into our Terminus Code Calculator, 3) Get your instant code solution. Our calculator works for all Terminus codes in Black Ops 6."
        },
        {
            question: "How does the Terminus Easter Egg Code Solver work?",
            answer: "Our Terminus Easter Egg Code Solver provides instant solutions for the Research Office puzzle. Match the three terminal symbols in our calculator, and get your Easter Egg code immediately. 100% accurate for all Terminus Easter Egg codes."
        },
        {
            question: "Where do I find Terminus codes in the game?",
            answer: "Terminus codes are found at three laptop locations in the Research Office: main entrance, upper floor, and research lab. Use our Terminus Code Calculator after finding all symbols to get your solution."
        },
        {
            question: "Why use our Terminus Code Solver?",
            answer: "The Terminus Code Solver saves you 5000 points by providing instant, accurate code solutions. It's the most reliable way to solve Terminus codes, with continuous updates for all terminal and Easter Egg codes."
        },
        {
            question: "Is this calculator updated for BO6?",
            answer: "Yes, our BO6 Terminus Code Calculator is constantly updated to match the latest Black Ops 6 version. We ensure accurate code solutions for all Terminus puzzles, including Easter Egg and terminal codes."
        },
        {
            question: "How do I use the Terminus Code Calculator?",
            answer: "Using our Terminus Code Calculator is simple: 1) Find the terminal codes in-game, 2) Match the exact symbols in our calculator, 3) Get your code solution instantly. Perfect for both Easter Egg and regular terminal codes."
        },
        {
            question: "What if my Terminus code doesn't work?",
            answer: "If your Terminus code isn't working: 1) Verify you've matched the exact symbols, 2) Check you're entering the code in the correct order, 3) Make sure you're at the right terminal. Our code solutions are verified for accuracy."
        },
        {
            question: "Is the Terminus Code Calculator free?",
            answer: "Yes, our Terminus Code Calculator is completely free. No registration needed to solve Terminus codes, Easter Egg sequences, or terminal puzzles. Just visit our site and start solving codes immediately."
        }
    ]

    return (
        <>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Terminus Code Calculator FAQ</h2>
            <div className="space-y-4">
                {faqList.map((faq, index) => (
                    <details key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                        <div className="mt-2 text-gray-700">{faq.answer}</div>
                    </details>
                ))}
            </div>
        </>
    )
}

export default FAQ;