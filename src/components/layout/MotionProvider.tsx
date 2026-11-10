"use client";

import { MotionConfig } from "framer-motion";

// Honors the OS "reduce motion" setting for every motion component:
// transform and layout animations are skipped, opacity fades still run.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
