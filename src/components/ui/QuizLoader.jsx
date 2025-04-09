"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function QuizLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setProgress(30), 400),
      setTimeout(() => setProgress(70), 1000),
      setTimeout(() => setProgress(100), 1600),
      setTimeout(() => onFinish(), 2000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-56">
      <p className="text-center text-gray-500 text-lg">Loading quiz...</p>
      <Progress value={progress} className="w-[60%] max-w-md" />
    </div>
  );
}
