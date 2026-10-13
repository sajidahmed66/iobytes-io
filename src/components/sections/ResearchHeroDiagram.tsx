"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Two arrival lanes into the same quay. The top lane shows uncoordinated
// arrivals bunching up at anchorage; the bottom lane shows sequenced arrivals
// reaching the berth in order. This is the page's single ambient motion moment.

const START_X = 24;
const QUAY_X = 448;
const LANE_A_Y = 104;
const LANE_B_Y = 232;
const ANCHORAGE_LEFT = 276;

// Ships already waiting at anchorage, deliberately uneven.
const QUEUE = [
  { x: 292, y: 104 },
  { x: 310, y: 98 },
  { x: 327, y: 109 },
  { x: 346, y: 102 },
  { x: 366, y: 106 },
];

const LANE_A_TRAVEL = ANCHORAGE_LEFT - START_X - 6;
const LANE_B_TRAVEL = QUAY_X - START_X - 12;

const fadeTimes = [0, 0.08, 0.92, 1];
const keyframes = (travel: number) => [0, travel * 0.08, travel * 0.92, travel];

interface ResearchHeroDiagramProps {
  className?: string;
}

export function ResearchHeroDiagram({ className }: ResearchHeroDiagramProps) {
  const reduceMotion = useReducedMotion();

  return (
    <figure className={cn("w-full", className)}>
      <svg
        viewBox="0 0 520 300"
        role="img"
        aria-labelledby="research-diagram-title research-diagram-desc"
        className="w-full h-auto text-ink"
      >
        <title id="research-diagram-title">Two arrival lanes into the same port</title>
        <desc id="research-diagram-desc">
          In the top lane ships arrive unsequenced and bunch up at anchorage. In the bottom
          lane ships arrive in sequence and reach the berth in order.
        </desc>

        {/* Quay */}
        <rect x={QUAY_X} y="28" width="48" height="244" fill="currentColor" opacity="0.06" />
        <line x1={QUAY_X} y1="28" x2={QUAY_X} y2="272" stroke="currentColor" strokeWidth="2" />
        <text x={QUAY_X + 24} y="18" textAnchor="middle" className="fill-soft-ink text-[14px] md:text-[12px] font-medium">
          Berth
        </text>

        {/* Lane A: today */}
        <text x={START_X} y={LANE_A_Y - 26} className="fill-soft-ink text-[14px] md:text-[12px] font-medium">
          Today
        </text>
        <line
          x1={START_X}
          y1={LANE_A_Y}
          x2={QUAY_X}
          y2={LANE_A_Y}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.35"
        />
        <rect
          x={ANCHORAGE_LEFT}
          y={LANE_A_Y - 24}
          width="110"
          height="48"
          rx="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <text
          x={ANCHORAGE_LEFT + 55}
          y={LANE_A_Y + 44}
          textAnchor="middle"
          className="fill-soft-ink text-[14px] md:text-[12px] font-medium"
        >
          Waiting at anchor
        </text>
        {QUEUE.map((ship) => (
          <circle key={`${ship.x}-${ship.y}`} cx={ship.x} cy={ship.y} r="5" fill="currentColor" />
        ))}
        {reduceMotion ? (
          <>
            <circle cx={START_X + 70} cy={LANE_A_Y - 3} r="5" fill="currentColor" opacity="0.55" />
            <circle cx={START_X + 118} cy={LANE_A_Y + 3} r="5" fill="currentColor" opacity="0.55" />
          </>
        ) : (
          [0, 1.6].map((delay) => (
            <motion.circle
              key={delay}
              cx={START_X}
              cy={delay === 0 ? LANE_A_Y - 3 : LANE_A_Y + 3}
              r="5"
              fill="currentColor"
              opacity="0.55"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: keyframes(LANE_A_TRAVEL), opacity: [0, 0.55, 0.55, 0] }}
              transition={{ duration: 5.5, delay, repeat: Infinity, ease: "linear", times: fadeTimes }}
            />
          ))
        )}

        {/* Lane B: with sequencing */}
        <text x={START_X} y={LANE_B_Y - 26} className="fill-soft-ink text-[14px] md:text-[12px] font-medium">
          With arrival sequencing
        </text>
        <line
          x1={START_X}
          y1={LANE_B_Y}
          x2={QUAY_X}
          y2={LANE_B_Y}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.35"
        />
        <rect x={QUAY_X - 3} y={LANE_B_Y - 10} width="6" height="20" rx="1" className="fill-electric" />
        {reduceMotion ? (
          [96, 196, 296, 396].map((x) => (
            <circle key={x} cx={x} cy={LANE_B_Y} r="5" className="fill-electric" />
          ))
        ) : (
          [0, 2.5, 5, 7.5].map((delay) => (
            <motion.circle
              key={delay}
              cx={START_X}
              cy={LANE_B_Y}
              r="5"
              className="fill-electric"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: keyframes(LANE_B_TRAVEL), opacity: [0, 1, 1, 0] }}
              transition={{ duration: 10, delay, repeat: Infinity, ease: "linear", times: fadeTimes }}
            />
          ))
        )}
      </svg>
      <figcaption className="mt-3 text-sm text-soft-ink leading-relaxed">
        Uncoordinated arrivals queue at anchor. Sequenced arrivals go straight to berth.
      </figcaption>
    </figure>
  );
}
