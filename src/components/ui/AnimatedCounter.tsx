"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  className,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Power-out easing
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span
      ref={ref}
      className={cn("font-mono tabular-nums", className)}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
