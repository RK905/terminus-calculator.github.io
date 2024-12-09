import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
    return (
        <Card className="bg-white shadow-sm border-0">
            <CardHeader>
                {icon && <div className="mb-4">{icon}</div>}
                <CardTitle className="text-xl text-gray-800">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard; 