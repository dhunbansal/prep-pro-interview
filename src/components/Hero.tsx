
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { userRole } = useUser();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Ace your next</span>
                <span className="block text-interview-blue">job interview</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Practice with AI-powered interview questions tailored to your job role. Receive instant feedback, track your progress, and build confidence.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-interview-blue-light opacity-10 sm:h-72 md:h-96 lg:w-full lg:h-full rounded-bl-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
