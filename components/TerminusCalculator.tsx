'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 定义类型
type VariableKey = 'x' | 'y' | 'z';
type SelectedValues = {
    [K in VariableKey]: number | null;
};

const TerminusCalculator = () => {
    const [selectedValues, setSelectedValues] = useState<SelectedValues>({
        x: null,
        y: null,
        z: null
    });

    const symbols = [
        { value: 0, image: "symbols-01.jpg" },
        { value: 10, image: "symbols-02.jpg" },
        { value: 11, image: "symbols-03.jpg" },
        { value: 20, image: "symbols-04.jpg" },
        { value: 21, image: "symbols-05.jpg" },
        { value: 22, image: "symbols-06.jpg" }
    ];

    const handleVariableSelect = (variable: VariableKey, value: number) => {
        setSelectedValues(prev => ({
            ...prev,
            [variable]: value
        }));
    };

    const calculateResults = () => {
        if (selectedValues.x === null || selectedValues.y === null || selectedValues.z === null) {
            return {
                result1: '-',
                result2: '-',
                result3: '-'
            };
        }

        const result1 = (selectedValues.x * 2) + 11;
        const result2 = ((selectedValues.z * 2) + selectedValues.y) - 5;
        const result3 = Math.abs((selectedValues.z + selectedValues.y) - selectedValues.x);

        return {
            result1,
            result2,
            result3
        };
    };

    const results = calculateResults();

    return (
        <div className="">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {(['x', 'y', 'z'] as const).map((variable) => (
                        <Card key={variable} className="bg-white shadow-sm border-0">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#374151] text-center uppercase">
                                    {variable}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-3">
                                    {symbols.map((symbol) => (
                                        <div
                                            key={`${variable}-${symbol.value}`}
                                            className={`cursor-pointer transition-all duration-200 hover:scale-105 relative rounded-lg overflow-hidden
                        ${selectedValues[variable] === symbol.value ? 'ring-2 ring-[#374151] ring-offset-2' : ''}`}
                                            onClick={() => handleVariableSelect(variable, symbol.value)}
                                        >
                                            <img
                                                src={`/images/${symbol.image}`}
                                                alt={`Value ${symbol.value}`}
                                                className="w-full h-auto aspect-square object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-[#F3F4F6] rounded-2xl p-8">
                    <h2 className="text-2xl text-[#374151] text-center mb-8">Answer:</h2>
                    <div className="flex justify-center items-center gap-12">
                        {[
                            { value: results.result1 },
                            { value: results.result2 },
                            { value: results.result3 }
                        ].map((result, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-[#374151] mb-2">
                                    {result.value}
                                </div>
                                <div className="w-12 h-0.5 bg-[#374151] mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminusCalculator;