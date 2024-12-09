const Stats = () => {
    return (
        <div className="bg-gray-50 py-12 mb-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-gray-800">1.2M+</div>
                        <div className="text-gray-600">Active Users</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-800">5M+</div>
                        <div className="text-gray-600">Codes Solved</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-800">4.9/5</div>
                        <div className="text-gray-600">User Rating</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats; 