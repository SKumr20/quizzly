import { ConservationWeeks } from "./ConservationWeeks";
export default function ConservationPage() {

    return (
        <div className="flex flex-col justify-center items-center">
            Select week number: 
            <ConservationWeeks />
        </div>
    );
  }