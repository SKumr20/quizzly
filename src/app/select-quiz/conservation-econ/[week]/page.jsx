"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function QuizPage() {
  const searchParams = useSearchParams();
  const week = searchParams.get("week") || "week1"; // Default to week1

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`/data/quizzes/${week}.json`);
        if (!res.ok) throw new Error(`Failed to load ${week}.json`);
        
        const data = await res.json();
        console.log("Fetched quiz data:", data); // Debugging
  
        // Extracting questions from the correct structure
        const quiz = data.quizzes.find(q => q.title === week);
        if (!quiz || !quiz.questions) throw new Error("Invalid quiz format");
  
        setQuestions(quiz.questions);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setQuestions([]); // Prevents crashing
      }
    }
  
    fetchQuestions();
  }, [week]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz for {week.replace("week", "Week ")}</h1>

      {questions.length > 0 ? (
        questions.map((q, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg">
            <h2 className="font-semibold">{q.question}</h2>
            <div className="mt-2">
              {q.options.map((option, i) => (
                <label key={i} className="block">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleAnswerSelect(index, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading questions...</p>
      )}

      <Link href="/select-quiz/conservation-econ">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Back to Quizzes</button>
      </Link>
    </div>
  );
}
