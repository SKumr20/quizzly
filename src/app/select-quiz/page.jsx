import { QuizCards } from "./QuizCards";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function SelectQuiz() {

    return (
        <div className="flex flex-col justify-center items-center mt-14">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Select <AuroraText>Course: </AuroraText>
            </h1>
            <QuizCards />
        </div>
    );
  }
  