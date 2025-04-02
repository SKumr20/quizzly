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
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 2",
      link: "#",
  },
  {
    title: "Week 3",
    link: "#",
  },
  {
    title: "Week 4",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 5",
      link: "#",
  },
  {
    title: "Week 6",
    link: "#",
  },
  {
    title: "Week 7",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 8",
      link: "#",
  },
  {
    title: "Week 9",
    link: "#",
  },
  {
    title: "Week 10",
    link: "/select-quiz/conservation-econ/",
  },
  {
    title: "Week 11",
      link: "#",
  },
  {
    title: "Week 12",
    link: "#",
  },
];