"use client";
import { useEffect, useState } from "react";
import { trackVisitor } from "@/data/vistors";
import { NumberTicker } from "../magicui/number-ticker";
import { Button } from "../ui/button";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    trackVisitor().then(setVisitorCount);
  }, []);

  return (
    <Button variant="ghost">
        <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-sm font-light">
            Page Visits: 
        </p>
        <NumberTicker
            value={visitorCount}
            className="whitespace-pre-wrap text-sm font-semibold tracking-tighter"
        />
        </div>
    </Button>
    
  );
}
