import { Anchor, Radar, ShieldAlert, Ship, Wrench } from "lucide-react";
import { ResearchGroup } from "@/types";

export const researchGroups: ResearchGroup[] = [
  {
    id: "maritime-intelligence",
    eyebrow: "Track 01",
    title: "Maritime Intelligence",
    intro:
      "Ships and ports already produce the data. Most of it never informs a decision. We are researching models that turn it into earlier, better calls.",
    tracks: [
      {
        slug: "arrival-forecasting",
        title: "Arrival & Throughput Forecasting",
        outcome: "Know when ships will arrive before they call in.",
        problem: "Port plans are built on arrival times that slip by hours.",
        approach: "We are testing forecasting models on vessel position and port activity data.",
        stage: "research",
        icon: Ship,
      },
      {
        slug: "predictive-maintenance",
        title: "Predictive Maintenance",
        outcome: "Fix critical systems before they fail at sea.",
        problem: "Most equipment failures are found after the damage is done.",
        approach: "We are exploring deep learning on onboard sensor data to flag early wear.",
        stage: "research",
        icon: Wrench,
      },
    ],
  },
  {
    id: "traffic-optimization",
    eyebrow: "Track 02",
    title: "Traffic & Port Optimization",
    intro:
      "Congested anchorages burn fuel, time, and margin. We are researching why the queues form, and how to stop them forming.",
    tracks: [
      {
        slug: "live-traffic-picture",
        title: "Live Traffic Picture",
        outcome: "One live view of every vessel in a busy waterway.",
        problem: "Port authorities piece traffic together from separate, partial feeds.",
        approach: "We are researching sensor fusion that merges vessel tracking, radar, and port data into one view.",
        stage: "research",
        icon: Radar,
      },
      {
        slug: "arrival-sequencing",
        title: "Arrival Sequencing",
        outcome: "Shorter queues at anchor.",
        problem: "Uncoordinated arrival schedules leave ships waiting at anchorage.",
        approach: "We are designing queueing and scheduling algorithms that plan port entry before ships arrive.",
        stage: "research",
        icon: Anchor,
      },
      {
        slug: "encounter-risk",
        title: "Encounter Risk Detection",
        outcome: "Spot dangerous encounters before they develop.",
        problem: "Close-quarters risk in dense traffic is often seen too late to act on.",
        approach: "We are modelling traffic density and conditions to flag high-risk encounters early.",
        stage: "research",
        icon: ShieldAlert,
      },
    ],
  },
];

// Team members whose expertise backs the research tracks, matched by name in teamData
export const researchContributors = ["Syed Tanvir Faisal", "Dr. Syed Mithun Ali"];
