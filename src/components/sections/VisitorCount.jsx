"use client";
import { useEffect, useState } from "react";
import { trackVisitor } from "@/data/vistors";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    trackVisitor().then(setVisitorCount);
  }, []);

  return <p>Live Visitors: {visitorCount}</p>;
}
