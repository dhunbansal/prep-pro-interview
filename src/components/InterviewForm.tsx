
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const jobRoles = [
  "Software Engineer",
  "Data Analyst",
  "Product Manager",
  "UX Designer",
  "Marketing Manager",
  "Sales Representative",
  "Customer Support",
  "HR Manager",
  "Financial Analyst",
];

const InterviewForm = () => {
  const navigate = useNavigate();
  const { setUserRole, setIsLoggedIn } = useUser();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("medium");
  const [userType, setUserType] = useState<"jobseeker" | "recruiter" | "admin">("jobseeker");

  const handleStartInterview = () => {
    if (!selectedRole) {
      toast.error("Please select a job role to continue");
      return;
    }

    // Simulate login by setting user role
    setUserRole(userType);
    setIsLoggedIn(true);

    // Store interview settings in localStorage
    localStorage.setItem("interviewRole", selectedRole);
    localStorage.setItem("interviewDifficulty", difficulty);

    toast.success(`Starting a ${difficulty} interview for ${selectedRole}`);
    navigate("/interview");
  };

  return (
    <Card className="w-full max-w-md mx-auto border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Start Interview Practice</CardTitle>
        <CardDescription>Configure your practice interview session</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="user-type">I am a</Label>
          <RadioGroup
            id="user-type"
            value={userType}
            onValueChange={(value) => setUserType(value as "jobseeker" | "recruiter" | "admin")}
            className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="jobseeker" id="jobseeker" />
              <Label htmlFor="jobseeker" className="cursor-pointer">Job Seeker</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recruiter" id="recruiter" />
              <Label htmlFor="recruiter" className="cursor-pointer">Recruiter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="admin" id="admin" />
              <Label htmlFor="admin" className="cursor-pointer">Admin</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Job Role</Label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger id="role" className="w-full">
              <SelectValue placeholder="Select a job role" />
            </SelectTrigger>
            <SelectContent>
              {jobRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty">Difficulty Level</Label>
          <RadioGroup
            id="difficulty"
            value={difficulty}
            onValueChange={setDifficulty}
            className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="easy" id="easy" />
              <Label htmlFor="easy" className="cursor-pointer">Easy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hard" id="hard" />
              <Label htmlFor="hard" className="cursor-pointer">Hard</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleStartInterview} className="w-full">
          Start Interview
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewForm;
