
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, RefreshCcw, ThumbsUp, ThumbsDown, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";

// Sample interview questions organized by role and difficulty
const sampleQuestions: Record<string, Record<string, string[]>> = {
  "Software Engineer": {
    easy: [
      "What programming languages are you most comfortable with and why?",
      "Explain the difference between an array and a linked list.",
      "What is the difference between a stack and a queue?",
      "What is version control and why is it important?",
      "Explain what RESTful APIs are and how they work."
    ],
    medium: [
      "Explain the concept of time complexity and provide an example.",
      "What are promises in JavaScript and how do they work?",
      "How would you handle a situation where your code needs to make multiple API calls that depend on each other?",
      "Explain the concept of dependency injection and its benefits.",
      "Describe the difference between server-side and client-side rendering."
    ],
    hard: [
      "Design a scalable system for a social media platform that can handle millions of users.",
      "How would you optimize a web application that's loading slowly?",
      "Explain how you would implement a distributed caching system.",
      "Design a database schema for an e-commerce platform with users, products, orders, and reviews.",
      "Discuss strategies for handling race conditions in concurrent systems."
    ]
  },
  "Data Analyst": {
    easy: [
      "What tools have you used for data analysis?",
      "What is the difference between a bar chart and a histogram?",
      "Explain the concept of data normalization.",
      "What is the difference between qualitative and quantitative data?",
      "What are some common data cleaning techniques?"
    ],
    medium: [
      "Explain the difference between correlation and causation with an example.",
      "What statistical methods would you use to identify outliers in a dataset?",
      "How would you approach a time series forecasting problem?",
      "Explain the concept of p-value in statistical hypothesis testing.",
      "What techniques would you use for feature selection in a machine learning model?"
    ],
    hard: [
      "How would you design an A/B test to evaluate the impact of a UI change on user engagement?",
      "Describe a complex data analysis project you've worked on and the insights you discovered.",
      "What methods would you use to handle missing data in a large dataset?",
      "Explain how you would build a recommendation system for an e-commerce website.",
      "How would you detect and address bias in a machine learning model?"
    ]
  },
  "Product Manager": {
    easy: [
      "What is your process for gathering user requirements?",
      "How do you prioritize features in a product backlog?",
      "What is the difference between a product roadmap and a sprint backlog?",
      "How do you measure the success of a product feature?",
      "Explain the concept of an MVP (Minimum Viable Product)."
    ],
    medium: [
      "How would you handle a situation where development resources are limited but stakeholder expectations are high?",
      "Describe your approach to conducting user research and integrating findings into product development.",
      "How do you balance user needs with business objectives when defining product strategy?",
      "What metrics would you track to evaluate product success, and why?",
      "How do you ensure alignment between product, design, and engineering teams?"
    ],
    hard: [
      "Describe a product launch that didn't go as planned and how you handled it.",
      "How would you develop a pricing strategy for a new SaaS product?",
      "Explain how you would approach internationalization of a product for different markets.",
      "How would you turn around a product that is losing market share?",
      "Design a product strategy for entering a competitive market with established players."
    ]
  },
  // Additional roles with placeholder questions for demonstration
  "UX Designer": {
    easy: [
      "What design tools do you use regularly?",
      "Explain the difference between UX and UI design.",
      "What is your design process?",
      "How do you approach user research?",
      "What is a user persona and why is it important?"
    ],
    medium: [
      "Medium UX question 1",
      "Medium UX question 2",
      "Medium UX question 3",
      "Medium UX question 4",
      "Medium UX question 5"
    ],
    hard: [
      "Hard UX question 1",
      "Hard UX question 2",
      "Hard UX question 3",
      "Hard UX question 4",
      "Hard UX question 5"
    ]
  },
  "Marketing Manager": {
    easy: ["Easy marketing question 1", "Easy marketing question 2", "Easy marketing question 3", "Easy marketing question 4", "Easy marketing question 5"],
    medium: ["Medium marketing question 1", "Medium marketing question 2", "Medium marketing question 3", "Medium marketing question 4", "Medium marketing question 5"],
    hard: ["Hard marketing question 1", "Hard marketing question 2", "Hard marketing question 3", "Hard marketing question 4", "Hard marketing question 5"]
  },
  "Sales Representative": {
    easy: ["Easy sales question 1", "Easy sales question 2", "Easy sales question 3", "Easy sales question 4", "Easy sales question 5"],
    medium: ["Medium sales question 1", "Medium sales question 2", "Medium sales question 3", "Medium sales question 4", "Medium sales question 5"],
    hard: ["Hard sales question 1", "Hard sales question 2", "Hard sales question 3", "Hard sales question 4", "Hard sales question 5"]
  },
  "Customer Support": {
    easy: ["Easy customer support question 1", "Easy customer support question 2", "Easy customer support question 3", "Easy customer support question 4", "Easy customer support question 5"],
    medium: ["Medium customer support question 1", "Medium customer support question 2", "Medium customer support question 3", "Medium customer support question 4", "Medium customer support question 5"],
    hard: ["Hard customer support question 1", "Hard customer support question 2", "Hard customer support question 3", "Hard customer support question 4", "Hard customer support question 5"]
  },
  "HR Manager": {
    easy: ["Easy HR question 1", "Easy HR question 2", "Easy HR question 3", "Easy HR question 4", "Easy HR question 5"],
    medium: ["Medium HR question 1", "Medium HR question 2", "Medium HR question 3", "Medium HR question 4", "Medium HR question 5"],
    hard: ["Hard HR question 1", "Hard HR question 2", "Hard HR question 3", "Hard HR question 4", "Hard HR question 5"]
  },
  "Financial Analyst": {
    easy: ["Easy finance question 1", "Easy finance question 2", "Easy finance question 3", "Easy finance question 4", "Easy finance question 5"],
    medium: ["Medium finance question 1", "Medium finance question 2", "Medium finance question 3", "Medium finance question 4", "Medium finance question 5"],
    hard: ["Hard finance question 1", "Hard finance question 2", "Hard finance question 3", "Hard finance question 4", "Hard finance question 5"]
  }
};

// Simple feedback templates
const feedbackTemplates = [
  "Great answer! Your response was clear and comprehensive.",
  "Good job! Consider adding more specific examples to strengthen your answer.",
  "Your answer covers the basics, but could be improved by addressing the 'why' behind your approach.",
  "Consider structuring your answer using the STAR method (Situation, Task, Action, Result).",
  "Try to be more concise while still providing enough detail.",
  "Your technical explanation was strong, but consider how you'd explain this to non-technical stakeholders."
];

interface QuestionGeneratorProps {
  jobRole: string;
  difficulty: string;
}

const QuestionGenerator = ({ jobRole, difficulty }: QuestionGeneratorProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  // Get questions for the selected job role and difficulty
  const getQuestionsForRole = () => {
    // Default to Software Engineer if role not found, and medium difficulty if difficulty not found
    const roleQuestions = sampleQuestions[jobRole] || sampleQuestions["Software Engineer"];
    return roleQuestions[difficulty] || roleQuestions["medium"] || [];
  };

  // Load a question
  const loadQuestion = () => {
    const questions = getQuestionsForRole();
    if (questions.length > 0) {
      // Use modulo to cycle through questions
      const index = questionIndex % questions.length;
      setCurrentQuestion(questions[index]);
      setQuestionIndex(index + 1);
    } else {
      setCurrentQuestion("No questions available for this role and difficulty level.");
    }
    setAnswer("");
    setFeedback("");
    setIsAnswered(false);
  };

  // Generate feedback for the answer
  const generateFeedback = () => {
    if (!answer.trim()) {
      toast.error("Please provide an answer first");
      return;
    }

    // Simple feedback generation - in a real app, this would be more sophisticated
    const randomFeedback = feedbackTemplates[Math.floor(Math.random() * feedbackTemplates.length)];
    setFeedback(randomFeedback);
    setIsAnswered(true);
    setAnsweredQuestions(answeredQuestions + 1);
  };

  // Reset questions
  const handleReset = () => {
    setQuestionIndex(0);
    loadQuestion();
    toast.info("Questions have been reset");
  };

  // Bookmark question
  const handleBookmark = () => {
    toast.success("Question bookmarked!");
    // In a real app, we would save this to user's bookmarks in a database
  };

  // Load initial question
  useEffect(() => {
    loadQuestion();
  }, [jobRole, difficulty]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{jobRole}</h2>
          <p className="text-sm text-gray-500 capitalize">{difficulty} difficulty</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RefreshCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <p className="text-lg font-medium mb-4">{currentQuestion}</p>
            <Button variant="ghost" size="sm" onClick={handleBookmark} className="ml-2">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
          </div>
          <Textarea
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-32"
          />
          <div className="mt-4 flex justify-between">
            <div className="text-sm text-gray-500">
              {answeredQuestions} question{answeredQuestions !== 1 ? "s" : ""} answered
            </div>
            <Button onClick={generateFeedback} disabled={isAnswered}>
              Submit Answer
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {feedback && (
        <Card className="border border-gray-200 bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Feedback:</h3>
            <p className="text-gray-700">{feedback}</p>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => toast.success("Feedback was helpful!")}>
                <ThumbsUp className="h-4 w-4 mr-1" />
                Helpful
              </Button>
              <Button variant="outline" size="sm" onClick={() => toast.info("We'll improve our feedback!")}>
                <ThumbsDown className="h-4 w-4 mr-1" />
                Not helpful
              </Button>
            </div>
            <div className="mt-4">
              <Button onClick={loadQuestion}>
                Next Question
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuestionGenerator;
