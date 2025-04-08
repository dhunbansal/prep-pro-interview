
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { userRole } = useUser();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:w-full">
          <div className="flex flex-wrap">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
              <div className="mx-auto max-w-xl lg:mx-0">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Ace your next</span>
                  <span className="block text-interview-blue">job interview</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  Practice with AI-powered interview questions tailored to your job role. Receive instant feedback, track your progress, and build confidence.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Button size="lg" asChild>
                      <Link to="/interview" className="flex items-center">
                        Start Practicing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/dashboard">
                        {userRole ? "Your Dashboard" : "Learn More"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background/Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-interview-blue-light bg-opacity-10 transform -skew-x-12 translate-x-20"></div>
              <div className="absolute right-0 inset-y-0 w-full lg:w-3/4 bg-interview-blue-light bg-opacity-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
