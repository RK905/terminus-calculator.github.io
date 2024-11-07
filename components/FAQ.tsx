const FAQ = () => {
    const faqList = [
        {
            question: "What is BO6 in Terminus Calculator?",
            answer: "BO6 refers to Call of Duty: Black Ops 6, the latest installment in the Black Ops series. In the game's Zombies mode, players encounter various puzzles including the Research Office terminal in the Terminus map, which our calculator is specifically designed to solve."
        },
        {
            question: "What is the Terminus Calculator?",
            answer: "The Terminus Calculator is a precision tool for solving in-game Research Office puzzles. It converts terminal symbols into exact numerical sequences, helping you save valuable essence and time. Simply match the symbols you find in-game to get instant results."
        },
        {
            question: "How do I save essence with this calculator?",
            answer: "By using our calculator to get the correct code on your first try, you'll save 5000 essence that would otherwise be spent on failed attempts. This makes the Terminus Calculator an essential resource for efficient gameplay."
        },
        {
            question: "What makes this calculator reliable?",
            answer: "Our calculator uses verified mathematical formulas that have been extensively tested by experienced players. Each calculation is precise and matches the in-game requirements perfectly, ensuring you get accurate results every time."
        },
        {
            question: "Can I use this calculator during gameplay?",
            answer: "Yes! Our calculator features a mobile-friendly design that works smoothly on all devices. The interface is optimized for quick symbol selection and clear number display, perfect for real-time use during your gaming sessions."
        },
        {
            question: "How do I input the symbols correctly?",
            answer: "Look for three distinct symbols at the Research Office terminal. Match these with the corresponding options in our calculator's X, Y, and Z sections. The calculator will automatically generate your numerical sequence once all symbols are selected."
        },
        {
            question: "What should I do if the code doesn't work?",
            answer: "First, verify you've selected the exact symbols from your game. Then, ensure you're entering the numbers in the correct sequence. If issues persist, double-check that you're at the right terminal location."
        },
        {
            question: "Is the calculator regularly maintained?",
            answer: "Yes, we continuously monitor game updates and maintain the calculator to ensure consistent accuracy. Any gameplay changes that affect the puzzle mechanics are promptly reflected in our calculations."
        },
        {
            question: "Do I need to register or pay to use the calculator?",
            answer: "No, the Terminus Calculator is completely free to use with no registration required. We believe in providing accessible tools to help all players succeed in their gameplay."
        }
    ]

    return (
        <>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Terminus Calculator (BO6) FAQ</h2>
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