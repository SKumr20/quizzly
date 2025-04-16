"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Check, XIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import QuizLoader from "@/components/ui/QuizLoader";

export default function QuizPage() {
  const { week } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState(null);
  const [results, setResults] = useState(null);
  const [score, setScore] = useState(null);
  const [isSubmittedButton, setIsSubmittedButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const fetchQuestions = async () => {
    try {
      const res = await import(`@/data/quizzes/${week}.json`);
      const data = res.default;

      const quizData = data.quizzes.find(q => q.title.toLowerCase() === week.toLowerCase());

      if (!quizData || !quizData.questions) {
        throw new Error("Invalid quiz format");
      }

      // Shuffle questions
      const shuffledQuestions = [...quizData.questions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions);

    } catch (error) {
      console.error("Error fetching quiz data:", error);
      toast(error.message);
      setQuestions([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    fetchQuestions();
  }, [week]);

  const handleAnswerSelect = (index, value) => {
    if (finalAnswers) return;
    setSelectedAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newResults = {};
    let newScore = 0;

    questions.forEach((q, index) => {
      // Check if the question was answered
      if (selectedAnswers[index]) {
        if (selectedAnswers[index] === q.correct) {
          newResults[index] = "correct";
          newScore++;
        } else {
          newResults[index] = "wrong";
        }
      } else {
        // Question not answered
        newResults[index] = "unanswered";
      }
    });

    setFinalAnswers({ ...selectedAnswers });
    setResults(newResults);
    setScore(newScore);

    toast(<p>Your Score: {newScore} / {questions.length}</p>, {
      action: { label: "Try Again", onClick: () => handleReset() },
      position: "top-right",
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setFinalAnswers(null);
    setResults(null);
    setScore(null);
    setIsSubmittedButton(false);
    fetchQuestions();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-2">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Quiz For {week === "finalexam" ? "Final Exam" : week.replace("week", "Week").charAt(0).toUpperCase() + week.slice(1)}
      </h1>

      {isLoading ? (
        <QuizLoader onFinish={() => setIsLoading(false)} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h2 className="font-semibold mb-4">Q{index + 1}. {q.question}</h2>
              
              {/* Show message for unanswered questions after submission */}
              {results && results[index] === "unanswered" && (
                <div className="mb-4 text-amber-500 text-sm font-medium">
                  Not answered. The correct answer is: {q.correct}
                </div>
              )}
              
              <RadioGroup
                value={selectedAnswers[index] || ""}
                onValueChange={(value) => handleAnswerSelect(index, value)}
                className="mt-2"
              >
                {q.options.map((option, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} disabled={!!finalAnswers} />
                    <span className="text-sm font-medium">{option}</span>
                    {results && (
                      <>
                        {/* Correct answer */}
                        {finalAnswers[index] === option && results[index] === "correct" && (
                          <Check className="ml-2 text-lg text-green-600" />
                        )}
                        
                        {/* Show X mark if this was the user's answer and it was wrong */}
                        {finalAnswers[index] === option && results[index] === "wrong" && (
                          <XIcon className="ml-2 text-lg text-red-600" />
                        )}
                        
                        {/* Show check mark if this is the correct answer and user got it wrong */}
                        {option === q.correct && finalAnswers[index] !== option && results[index] === "wrong" && (
                          <Check className="ml-2 text-lg text-green-600" />
                        )}
                        
                        {/* No icons for unanswered questions */}
                      </>
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          <div className="flex flex-col items-center mt-8 space-y-4">
            <AnimatedSubscribeButton
              type="submit"
              disabled={!!finalAnswers}
              subscribeStatus={isSubmittedButton}
              setSubscribeStatus={setIsSubmittedButton}
              onClick={(e) => !finalAnswers && handleSubmit(e)}
            >
              <span>Submit Answers</span>
              <span>Submitted!</span>
            </AnimatedSubscribeButton>

            {score !== null && (
              <div className="text-center">
                <p className="text-lg font-semibold">Your Score: {score} / {questions.length}</p>
                <Button onClick={handleReset} className="mt-4">Try Again</Button>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}