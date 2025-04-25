import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export function ConservationWeeks() {
  return (
    <div className="flex justify-center w-full py-12">
      <div className="w-full max-w-5xl px-2 sm:px-4 lg:px-6">
        <HoverEffect items={quizzes.map(q => ({
          ...q,
          link: `/select-quiz/conservation-econ/${q.link.split('/').pop()}` // Ensure correct URL
        }))} className="compact-cards"/>
      </div>
    </div>
  );
}

export const quizzes = [
  { title: "Week 0", description: "Practice/Intro Quiz", link: "week0" },
  { title: "Week 1", description: "What is Economics?", link: "week1" },
  { title: "Week 2", description: "What is Conservation?", link: "week2" },
  { title: "Week 3", description: "Modern Impacts Necessitating Conservation", link: "week3" },
  { title: "Week 4", description: "Threats To Wildlife", link: "week4" },
  { title: "Week 5", description: "How Can Economics Help?", link: "week5" },
  { title: "Week 6", description: "Markets - Places Where Economics Works", link: "week6" },
  { title: "Week 7", description: "Markets, Welfare And Conservation", link: "week7" },
  { title: "Week 8", description: "Public Sector And Conservation", link: "week8" },
  { title: "Week 9", description: "Industrial Organization And Conservation", link: "week9" },
  { title: "Week 10", description: "Labour Market Economics And Conservation", link: "week10" },
  { title: "Week 11", description: "Practical Issues In Economics And Conservation", link: "week11" },
  { title: "Week 12", description: "Case Studies", link: "week12" },
  { title: "Extras", description: "Some Extra Questions Relvant for The Exam", link: "extras" },
  { title: "Final Exam", description: 'Take the conmbined exam, with total 150+ questions', link: "finalexam" } 
];
