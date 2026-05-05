"use client";

import { useInView as useInViewFramer, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

export function useInView(options: UseInViewOptions = { once: true, amount: 0.15 }) {
  const ref = useRef(null);
  const isInView = useInViewFramer(ref, options);
  return { ref, isInView };
}
