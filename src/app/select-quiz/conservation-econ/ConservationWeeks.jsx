import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export function ConservationWeeks() {
  return (
    <div className="flex justify-center w-full py-12">
      <div className="w-full max-w-5xl px-2 sm:px-4 lg:px-6">
        <HoverEffect items={quizzes} className="compact-cards"/>
      </div>
    </div>
  );
}

export const quizzes = [
  {
    title: "Week 1",
    description: "What is Economics?",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 2",
    description: "What is Conservation?",
    link: "#",
  },
  {
    title: "Week 3",
    description: "Modern Impacts Necessitating Conservation",
    link: "#",
  },
  {
    title: "Week 4",
    description: "Threats To Wildlife",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 5",
    description: "How Can Economics Help?",
    link: "#",
  },
  {
    title: "Week 6",
    description: "Markets - Places Where Economics Works",
    link: "#",
  },
  {
    title: "Week 7",
    description: "Markets, Welfare And Conservation",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 8",
    description: "Public Sector And Conservation",
    link: "#",
  },
  {
    title: "Week 9",
    description: "Industrial Organization And Conservation",
    link: "#",
  },
  {
    title: "Week 10",
    description: "Labour Market Economics And Conservation",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 11",
    description: "Practical Issues In Economics And Conservation",
    link: "#",
  },
  {
    title: "Week 12",
    description: "Final Exam",
    link: "#",
  },
];