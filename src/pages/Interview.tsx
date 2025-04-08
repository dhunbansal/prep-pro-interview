
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import QuestionGenerator from "@/components/QuestionGenerator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Interview = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();
  const [jobRole, setJobRole] = useState<string>("Software Engineer");
  const [difficulty, setDifficulty] = useState<string>("medium");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Interview Practice - InterviewPro";
    
    // Load interview settings from localStorage
    const storedRole = localStorage.getItem("interviewRole");
    const storedDifficulty = localStorage.getItem("interviewDifficulty");
    
    if (storedRole) {
      setJobRole(storedRole);
    }
    
    if (storedDifficulty) {
      setDifficulty(storedDifficulty);
    }
    
    setLoading(false);
  }, []);

  const handleEndInterview = () => {
    toast.info("Interview session ended");
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-interview-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your interview session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Interview Practice</h1>
              <p className="text-gray-600">Answer the questions as if you were in a real interview</p>
            </div>
            
            <Button variant="outline" onClick={handleEndInterview}>
              End Session
            </Button>
          </div>
          
          <QuestionGenerator jobRole={jobRole} difficulty={difficulty} />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Tip: Structure your answers using the STAR method - Situation, Task, Action, Result
            </p>
          </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 InterviewPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Interview;
