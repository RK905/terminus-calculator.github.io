const FAQ = () => {
    const faqList = [
        {
            question: "What is the BO6 Terminus Calculator?",
            answer: "The BO6 Terminus Calculator is an essential tool for solving the terminal puzzle in Black Ops 6. This Terminus Calculator instantly computes the correct number sequence, helping players save 5000 essence by bypassing the BEAM SMASHER cost in the Research Office terminal."
        },
        {
            question: "How does the Terminus Calculator work for BO6?",
            answer: "The Terminus Calculator works by converting the three terminal symbols into the correct numerical sequence. Simply input the symbols you see in-game into the BO6 Terminus Calculator's X, Y, and Z sections, and it will instantly generate the exact numbers needed for the Research Office puzzle."
        },
        {
            question: "Why use our BO6 Terminus Calculator?",
            answer: "Our Terminus Calculator is specifically designed for Black Ops 6, offering instant calculations with 100% accuracy. Unlike other methods, the BO6 Terminus Calculator guarantees correct results every time, saving you both essence and time during gameplay."
        },
        {
            question: "Is this Terminus Calculator accurate for Black Ops 6?",
            answer: "Yes, our BO6 Terminus Calculator has been extensively tested to match the exact formula used in the game. Every calculation performed by the Terminus Calculator is verified against in-game results to ensure perfect accuracy for the Research Office puzzle."
        },
        {
            question: "How to use the Terminus Calculator effectively in BO6?",
            answer: "To get the best results from the BO6 Terminus Calculator: 1) Find the three symbols at the Research Office terminal 2) Select matching symbols in the Terminus Calculator's interface 3) Use the generated numbers in exact order 4) Enter the sequence at the terminal to solve the puzzle."
        },
        {
            question: "Will the Terminus Calculator work on mobile while playing BO6?",
            answer: "Yes, our BO6 Terminus Calculator is fully mobile-optimized. The Terminus Calculator's responsive design ensures easy symbol selection and clear number display on any device, making it perfect for quick reference during gameplay."
        },
        {
            question: "What if the Terminus Calculator results don't work?",
            answer: "If the BO6 Terminus Calculator results aren't working, verify that: 1) You've selected the exact symbols from your game 2) You're entering the Terminus Calculator's numbers in the correct order 3) You're at the correct terminal in the Research Office."
        },
        {
            question: "How often is the BO6 Terminus Calculator updated?",
            answer: "The Terminus Calculator is regularly updated to maintain compatibility with all Black Ops 6 patches. We ensure our BO6 Terminus Calculator stays current with any game changes to maintain its 100% accuracy rate."
        }
    ]

    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-6">BO6 Terminus Calculator FAQ</h2>
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