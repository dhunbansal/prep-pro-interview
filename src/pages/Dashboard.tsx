
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart2, Clock, Activity, Award, BookOpen, Calendar } from "lucide-react";
import { toast } from "sonner";

// Sample data for demonstration
const mockInterviewData = {
  completedInterviews: 5,
  upcomingInterviews: 2,
  averageScore: 7.8,
  strengths: ["Technical knowledge", "Problem-solving"],
  areasToImprove: ["Communication", "Confidence"],
  recentActivities: [
    { type: "Practice", title: "Software Engineer Interview", date: "2025-04-05", score: 8.2 },
    { type: "Practice", title: "Product Manager Interview", date: "2025-03-30", score: 7.5 },
    { type: "Review", title: "Bookmarked Questions", date: "2025-03-28", score: null },
  ],
  achievements: [
    { name: "First Interview", description: "Completed your first practice interview", earned: true },
    { name: "Consistent", description: "Practiced for 5 days in a row", earned: true },
    { name: "All-Rounder", description: "Tried interviews for 3 different roles", earned: false },
  ]
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userRole } = useUser();

  useEffect(() => {
    document.title = "Dashboard - InterviewPro";
    
    if (!isLoggedIn) {
      toast.error("Please log in to access the dashboard");
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Track your progress and improve your interview skills</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed Interviews</CardTitle>
                <BarChart2 className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockInterviewData.completedInterviews}</div>
                <p className="text-xs text-gray-500 mt-1">+2 from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Upcoming Interviews</CardTitle>
                <Calendar className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockInterviewData.upcomingInterviews}</div>
                <p className="text-xs text-gray-500 mt-1">Next one in 2 days</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Average Score</CardTitle>
                <Activity className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockInterviewData.averageScore}/10</div>
                <p className="text-xs text-gray-500 mt-1">+0.3 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Achievements</CardTitle>
                <Award className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockInterviewData.achievements.filter(a => a.earned).length}/{mockInterviewData.achievements.length}</div>
                <p className="text-xs text-gray-500 mt-1">2 new this week</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest interview practice sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockInterviewData.recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center p-3 rounded-lg bg-white border border-gray-200">
                        <div className="bg-interview-blue bg-opacity-10 p-2 rounded-full">
                          {activity.type === "Practice" ? (
                            <Clock className="h-5 w-5 text-interview-blue" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-interview-blue" />
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</p>
                        </div>
                        <div className="ml-auto text-right">
                          {activity.score !== null && (
                            <span className="font-medium">Score: {activity.score}/10</span>
                          )}
                          <p className="text-sm text-gray-500">{activity.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" onClick={() => navigate("/interview")}>
                      Start New Practice
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Insights */}
            <div className="col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Strengths</CardTitle>
                    <CardDescription>Areas where you excel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockInterviewData.strengths.map((strength, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Areas to Improve</CardTitle>
                    <CardDescription>Focus on these skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockInterviewData.areasToImprove.map((area, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your interview milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {mockInterviewData.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          {achievement.earned ? (
                            <div className="h-6 w-6 rounded-full bg-interview-blue-light text-white flex items-center justify-center mr-2">
                              <Award className="h-3 w-3" />
                            </div>
                          ) : (
                            <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mr-2">
                              <Award className="h-3 w-3" />
                            </div>
                          )}
                          <div>
                            <p className={`text-sm font-medium ${achievement.earned ? "" : "text-gray-500"}`}>
                              {achievement.name}
                            </p>
                            <p className="text-xs text-gray-500">{achievement.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
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

export default Dashboard;
