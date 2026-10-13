import {
  Anchor,
  Handshake,
  MapPin,
  MessageSquare,
  Radar,
  ShieldAlert,
  Ship,
  Workflow,
  Wrench,
} from "lucide-react";
import { AppliedResearch, ResearchGroup } from "@/types";

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

// Applied R&D that has already shipped: the n8n workflow automation built for Amar Bot.
// Facts are taken from the Amar Bot admin codebase and its design docs.
export const appliedResearch: AppliedResearch = {
  id: "conversational-commerce",
  eyebrow: "Applied R&D · Amar Bot",
  title: "Order-taking that runs in n8n",
  intro:
    "Small merchants in Bangladesh sell through Messenger DMs, and every order used to mean typing out prices and re-keying names, phones, and addresses by hand. For Amar Bot we moved the whole order conversation into n8n, one workflow per merchant, and shipped it. The automation work below is in production and taking orders.",
  nextUp:
    "Next up: booking the Pathao or RedX parcel the moment an order is confirmed, with no click in the admin panel.",
  stats: [
    { value: "170+", label: "Nodes in the Messenger workflow" },
    { value: "1", label: "n8n workflow per merchant" },
    { value: "3", label: "Delivery fee models" },
    { value: "24h", label: "Handover idle window" },
  ],
  items: [
    {
      slug: "workflow-per-merchant",
      title: "One Workflow per Merchant",
      outcome: "A merchant goes live by connecting a page. Nobody builds a workflow by hand.",
      detail:
        "The admin panel hydrates a master Messenger template with the page's credentials and a fresh webhook, then creates the workflow through the n8n Public API. A redeploy script pushes template changes to every live bot while keeping each webhook URL stable.",
      icon: Workflow,
    },
    {
      slug: "order-capture-in-chat",
      title: "Order Capture in Chat",
      outcome: "A buyer browses, picks, and confirms an order without leaving the DM.",
      detail:
        "A 170+ node n8n workflow runs the whole conversation: product cards, cart, name and phone capture, delivery area, and order confirmation. Redis holds the conversation state and PostgreSQL holds the orders.",
      icon: MessageSquare,
    },
    {
      slug: "zone-based-delivery",
      title: "Zone-Based Delivery Pricing",
      outcome: "The right delivery fee, resolved from the buyer's answer in chat.",
      detail:
        "Each product carries a flat, free, or zoned delivery charge. A zoned product shows its fee range on the card, the workflow asks the buyer which area they are in, and the fee is fixed before the order is confirmed.",
      icon: MapPin,
    },
    {
      slug: "human-handover",
      title: "Human Handover",
      outcome: "A merchant can step into any chat. The bot steps back out on its own.",
      detail:
        "A persistent-menu item or quick reply hands the thread to the merchant's Page Inbox and silences the bot. A return-to-bot button or a 24-hour idle sweep hands it back, so no conversation is stranded on either side.",
      icon: Handshake,
    },
  ],
  stack: ["n8n", "PostgreSQL", "Redis", "Meta Graph API", "Next.js", "Hono"],
  caseStudy: { label: "Read the Amar Bot case study", href: "/portfolio/botx/" },
};

// Team members whose expertise backs the research tracks, matched by name in teamData
export const researchContributors = ["Syed Tanvir Faisal", "Dr. Syed Mithun Ali"];
