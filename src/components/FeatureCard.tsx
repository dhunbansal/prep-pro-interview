
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="rounded-full bg-interview-blue bg-opacity-10 p-2 w-10 h-10 flex items-center justify-center mb-4">
          <Icon className="h-5 w-5 text-interview-blue" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
