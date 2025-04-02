import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export function QuizCards() {
  return (
    <div className="flex justify-center w-full py-12">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <HoverEffect items={quizzes} />
      </div>
    </div>
  );
}

export const quizzes = [
  {
    title: "Conservation Economics",
    description:
      "Weeks 0-12 for the NPTEL course Conservation Economics",
    link: "https://stripe.com",
  },
  {
    title: "Wildlife Ecology",
    description:
      "Weeks 0-12 for the NPTEL course - Wildlife Ecology",
    link: "https://netflix.com",
  },
  {
    title: "More Quizzes Coming Soon",
    description:
      "Stay Tuned...",
    link: "https://netflix.com",
  },
];