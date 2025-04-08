
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import InterviewForm from "@/components/InterviewForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Video, BarChart2, BookOpen, Clock, Award } from "lucide-react";

const features = [
  {
    title: "AI-Generated Questions",
    description: "Get relevant questions tailored to your specific job role and experience level.",
    icon: MessageSquare
  },
  {
    title: "Video & Text Practice",
    description: "Practice in text mode or record video responses for more realistic preparation.",
    icon: Video
  },
  {
    title: "Performance Analytics",
    description: "Track your progress and identify areas for improvement with detailed analytics.",
    icon: BarChart2
  },
  {
    title: "Learning Resources",
    description: "Access interview tips, common questions, and industry-specific guidance.",
    icon: BookOpen
  },
  {
    title: "Mock Interviews",
    description: "Schedule mock interviews with professionals or practice on your own time.",
    icon: Clock
  },
  {
    title: "Achievement Badges",
    description: "Earn badges and certificates as you improve your interview skills.",
    icon: Award
  }
];

const Index = () => {
  useEffect(() => {
    document.title = "InterviewPro - Ace Your Next Job Interview";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Prepare with Confidence</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive interview preparation platform helps you practice, get feedback, and land your dream job.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in just three simple steps and be interview-ready in no time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center p-6">
                <div className="rounded-full bg-interview-blue bg-opacity-10 h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-interview-blue font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Select Your Job Role</h3>
                <p className="text-gray-600">Choose the position you're interviewing for and set the difficulty level.</p>
              </div>
              <div className="text-center p-6">
                <div className="rounded-full bg-interview-blue bg-opacity-10 h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-interview-blue font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Practice with AI</h3>
                <p className="text-gray-600">Answer questions and receive immediate feedback to improve your responses.</p>
              </div>
              <div className="text-center p-6">
                <div className="rounded-full bg-interview-blue bg-opacity-10 h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-interview-blue font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Track Your Progress</h3>
                <p className="text-gray-600">Review your performance and track improvement over time with detailed analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Start Interview Section */}
        <section className="py-16 bg-interview-blue bg-opacity-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                Ready to Practice? Start a Mock Interview
              </h2>
              <InterviewForm />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-interview-blue-light text-white flex items-center justify-center">
                    <span className="font-semibold">JD</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">"This platform helped me prepare for technical interviews effectively. The AI-generated questions were spot on!"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-interview-blue-light text-white flex items-center justify-center">
                    <span className="font-semibold">AS</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Alice Smith</h3>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">"The feedback system is amazing. I could see my improvement over time and gained confidence for my interviews."</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-interview-blue-light text-white flex items-center justify-center">
                    <span className="font-semibold">RJ</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Robert Johnson</h3>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">"The industry-specific questions helped me prepare for my data analyst interview. I got the job!"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-interview-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start practicing today and build the confidence you need to succeed.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/interview" className="inline-flex items-center">
                Start Practicing
                <CheckCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 text-interview-blue-light" />
                <span className="ml-2 text-xl font-bold">InterviewPro</span>
              </div>
              <p className="mt-2 text-gray-400 max-w-md">
                Helping job seekers prepare for interviews and land their dream jobs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/interview" className="text-gray-400 hover:text-white">Interview Practice</Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">&copy; 2025 InterviewPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
