"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useSearchParams
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export default function QuizPage() {
  const { week } = useParams(); // ✅ Get the week directly from the URL
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`/data/quizzes/${week}.json`);
        if (!res.ok) throw new Error(`Failed to load ${week}.json`);
  
        const data = await res.json();
        console.log("Fetched quiz data:", data);
  
        const quizData = data.quizzes.find(q => q.title.toLowerCase() === week.toLowerCase());
  
        if (!quizData || !quizData.questions) {
          throw new Error("Invalid quiz format");
        }
  
        setQuestions(quizData.questions);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        toast(error.message);
        setQuestions([]);
      }
    }
  
    fetchQuestions();
  }, [week]);
  

  const handleAnswerSelect = (index, value) => {
    setSelectedAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newResults = {};
    let newScore = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        newResults[index] = "correct";
        newScore++;
      } else {
        newResults[index] = "wrong";
      }
    });

    setResults(newResults);
    setScore(newScore);

    toast(<p>Your Score: {newScore} / {questions.length}</p>, {
      action: { label: "Try Again", onClick: () => handleReset() },
      position: "top-right",
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setResults({});
    setScore(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz for {week.replace("week", "Week ")}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.length > 0 ? (
          questions.map((q, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h2 className="font-semibold">Q{index + 1}. {q.question}</h2>
              <RadioGroup
                value={selectedAnswers[index] || ""}
                onValueChange={(value) => handleAnswerSelect(index, value)}
                className="mt-2 space-y-2"
              >
                {q.options.map((option, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} />
                    <span className="text-sm font-medium">{option}</span>
                  </div>
                ))}
              </RadioGroup>

              {results[index] && (
                <span className="ml-4 text-lg">
                  {results[index] === "correct" ? "✅" : "❌"}
                </span>
              )}
            </div>
          ))
        ) : (
          <p>Loading questions...</p>
        )}

        <Button type="submit" className="mt-6 w-full">Submit Answers</Button>
      </form>

      {score !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Your Score: {score} / {questions.length}</p>
          <Button onClick={handleReset} className="mt-4">Try Again</Button>
        </div>
      )}
    </div>
  );
}
