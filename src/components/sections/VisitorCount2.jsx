"use client";
import { useEffect, useState } from "react";
import { trackVisitor } from "@/data/vistors";
import { NumberTicker } from "../magicui/number-ticker";
import { AuroraText } from "../magicui/aurora-text";

export default function VisitorCount2() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    trackVisitor().then(setVisitorCount);
  }, []);

  return (
        <div className="flex flex-row items-center justify-center gap-2 mt-10">
        <p className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            <AuroraText>People Improving - </AuroraText>
        </p>
        <NumberTicker
            value={visitorCount}
            className="whitespace-pre-wrap text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl"
        />
        <p className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">+</p>
        </div>  
  );
}
