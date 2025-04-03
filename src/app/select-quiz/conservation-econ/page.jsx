import { ConservationWeeks } from "./ConservationWeeks";
import { AuroraText } from "@/components/magicui/aurora-text";
export default function ConservationPage() {

    return (
        <div className="flex flex-col justify-center items-center mt-14">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              Select <AuroraText>Week: </AuroraText>
          </h1>
          <ConservationWeeks />
        </div>
    );
  }