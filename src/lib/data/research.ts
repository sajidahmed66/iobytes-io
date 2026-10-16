import {
  Anchor,
  ArrowLeftRight,
  ClipboardCheck,
  Handshake,
  Languages,
  MapPin,
  MessageSquare,
  Radar,
  RadioTower,
  ScanEye,
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
      "Ships and ports already generate a lot of data, AIS positions, berth logs, engine readings and so on. Very little of it is actually used when a decision is being made. We started by putting up our own AIS receivers so we're not depending on somebody else's feed. Now we're trying to build models on that data, so the people running a port or a fleet get a bit more warning before something goes wrong.",
    tracks: [
      {
        slug: "coastal-ais-stations",
        title: "Coastal AIS Stations",
        outcome: "Our own live vessel feed from the Bay of Bengal, going into AISHub.",
        problem:
          "Most of the Bangladesh coast simply had no terrestrial AIS coverage. If you wanted vessel positions here you bought a satellite feed, or you went without.",
        approach:
          "Together with AISHub we put up receiver stations on the coast. They decode the VHF AIS signals from the shipping lanes and push the data into AISHub's global network. The stations have been live for a while now and have kept going through power fluctuations, which is not a small thing here. Every other maritime track on this page sits on this data.",
        stage: "pilot",
        icon: RadioTower,
        link: { label: "Read the Project Mr. Radio case study", href: "/portfolio/project-mr-radio/" },
      },
      {
        slug: "arrival-forecasting",
        title: "Arrival & Throughput Forecasting",
        outcome: "Knowing roughly when a ship will actually arrive, and not only the ETA she declared.",
        problem:
          "Port planning depends on declared arrival times, and those slip by hours, sometimes by a full day. Then the whole berth plan has to be redone.",
        approach:
          "We're testing forecasting models on vessel position history from our own stations and on port activity data, to see how far ahead we can predict the real arrival time with useful accuracy.",
        stage: "research",
        icon: Ship,
      },
      {
        slug: "predictive-maintenance",
        title: "Predictive Maintenance",
        outcome: "Catching engine and system wear before it becomes a breakdown at sea.",
        problem:
          "Most equipment failures on board are found after the damage is already done, because planned maintenance still goes by the calendar and nobody is looking at the actual condition of the machine.",
        approach:
          "We're exploring deep learning on onboard sensor data, mainly vibration, temperature and pressure logs, to check whether we can pick up early wear patterns well before a failure.",
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
      "If you've seen the outer anchorage at Chattogram, you know the problem. Around 90% of Bangladesh's seaborne trade passes through that one port, and ships sit there for days burning fuel, the shipping line isn't happy and neither is the port. We're looking at why these queues form in the first place, and what can be done about it before a vessel even reaches the anchorage.",
    tracks: [
      {
        slug: "live-traffic-picture",
        title: "Live Traffic Picture",
        outcome: "A single live picture of every vessel moving in a busy waterway.",
        problem:
          "At present a port authority has to piece the traffic picture together from a few separate feeds, AIS, radar, VTS logs, and each one covers only a part of it. On a narrow channel like the Karnaphuli that gap matters.",
        approach:
          "We're researching sensor fusion, basically merging vessel tracking, radar and port data into one combined view that doesn't fall out of sync as the traffic moves.",
        stage: "research",
        icon: Radar,
      },
      {
        slug: "arrival-sequencing",
        title: "Arrival Sequencing",
        outcome: "Less waiting time at anchorage, because port entry gets planned in advance.",
        problem:
          "Arrivals aren't coordinated with each other. Ships turn up when they turn up, and then they wait at anchorage for a berth to become free.",
        approach:
          "We're designing queueing and scheduling algorithms that plan the entry sequence before the ships arrive. The aim is that ships wait less overall, and when they do have to wait, they do it somewhere cheaper than at anchor.",
        stage: "research",
        icon: Anchor,
      },
      {
        slug: "encounter-risk",
        title: "Encounter Risk Detection",
        outcome: "Early warning for risky close-quarters situations in dense traffic.",
        problem:
          "In crowded waters a dangerous encounter is often noticed too late, when there's very little room left to manoeuvre.",
        approach:
          "We're modelling traffic density together with weather and visibility conditions, so that high-risk encounters can be flagged earlier, while there's still time to do something about it.",
        stage: "research",
        icon: ShieldAlert,
      },
    ],
  },
  {
    id: "automation-applied-ai",
    eyebrow: "Track 03",
    title: "Automation & Applied AI",
    intro:
      "Not everything we look at is about ships. These are the smaller research threads the team keeps going on the side, mostly coming out of problems we hit on client work. None of them has shipped as a product yet, but a few have working pieces inside projects we've already delivered.",
    tracks: [
      {
        slug: "office-automation",
        title: "Office Automation",
        outcome: "Approvals and reporting handled by a workflow, with a person involved only where one is really needed.",
        problem:
          "In most companies here a surprising amount of office time goes into moving the same numbers between email, Excel and the ERP, and then following up with people for sign-off. We've seen this at nearly every client.",
        approach:
          "We're testing n8n workflows with an LLM in the middle, on document reading, approval routing and report generation. The honest question is which of these jobs can be handed off fully and which ones still need somebody in the loop, and we don't have a clean answer yet.",
        stage: "research",
        icon: ClipboardCheck,
      },
      {
        slug: "b2b-automation",
        title: "B2B Business Automation",
        outcome: "Orders and invoices moving between two businesses without anyone typing them in a second time.",
        problem:
          "Between a distributor and its retailers, or a factory and its suppliers, most orders still arrive as a phone call or a WhatsApp message, or as a PDF that somebody then types into the system again. Mistakes creep in at every step.",
        approach:
          "A lot of this comes out of the Amar Bot work. We're researching how to capture these orders from chat and from documents and push them straight into the other side's system, so a person only looks at the exceptions. Getting the two sides to agree on a format is the hard part, more than the tech.",
        stage: "research",
        icon: ArrowLeftRight,
      },
      {
        slug: "computer-vision",
        title: "Computer Vision",
        outcome: "Cameras that count, read and flag things on site, so nobody has to sit and watch a screen all day. That's the aim, we're not there yet.",
        problem:
          "Factories and yards here mostly have cameras already. The footage just gets looked at after something has gone wrong, if at all.",
        approach:
          "We're experimenting with vision models on live camera feeds, for counting, for reading plates and labels, and for spotting unsafe situations. Much of the work is checking how well these models hold up with the camera quality and lighting we actually find on site, which is usually a lot worse than in the demo videos.",
        stage: "research",
        icon: ScanEye,
      },
      {
        slug: "bangla-nlp",
        title: "Bangla NLP",
        outcome: "Language models that understand Bangla and Banglish properly, the way people here actually write it.",
        problem:
          "Most language models are weak on Bangla, and weaker still on Banglish, the Bangla-written-in-English-letters that fills comment sections and Messenger chats. Spelling differs from person to person, and dialect changes from district to district.",
        approach:
          "We built a custom NLP engine for Bangla and Banglish for Aivax, and that one is in production. The research side is taking it further, better handling of dialect and spelling variation, and finding out how far open-source models can be tuned for Bangla before you have to build something custom.",
        stage: "research",
        icon: Languages,
        link: { label: "Read the Aivax case study", href: "/portfolio/aivax/" },
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
    "Small merchants in Bangladesh mostly sell through Facebook pages and Messenger DMs. Every order used to mean typing out the price, then asking for name, phone and address, and then re-keying all of that somewhere else by hand. For Amar Bot we moved the whole order conversation into n8n, one workflow per merchant, and it's been running in production since. Everything listed below is live and taking real orders.",
  nextUp:
    "What we're doing next is parcel booking. The idea is that once an order is confirmed, the Pathao or RedX pickup gets booked on its own, without anyone having to click anything in the admin panel.",
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
      outcome: "A merchant connects their page and the bot is live. Nobody builds a workflow by hand.",
      detail:
        "When a page is connected, the admin panel takes a master Messenger template, fills in that page's credentials and a fresh webhook, and creates the workflow through the n8n Public API. When we change the template we run a redeploy script that pushes the update to every live bot. Each bot keeps its own webhook URL, so nothing breaks on the Meta side.",
      icon: Workflow,
    },
    {
      slug: "order-capture-in-chat",
      title: "Order Capture in Chat",
      outcome: "A buyer can browse, pick and confirm an order without ever leaving the DM.",
      detail:
        "The Messenger workflow is around 170 nodes now and it handles the full conversation, product cards, cart, name and phone capture, delivery area and the final confirmation. Conversation state sits in Redis and the orders go into PostgreSQL.",
      icon: MessageSquare,
    },
    {
      slug: "zone-based-delivery",
      title: "Zone-Based Delivery Pricing",
      outcome: "The correct delivery fee, worked out from what the buyer answers in chat.",
      detail:
        "Every product has a delivery charge type, flat, free or zoned. For a zoned product the card shows the fee range, then the workflow asks the buyer which area they are in, and the exact fee is fixed before the order gets confirmed. This matters a lot here, because inside Dhaka and outside Dhaka delivery charges aren't even close.",
      icon: MapPin,
    },
    {
      slug: "human-handover",
      title: "Human Handover",
      outcome: "The merchant can take over any chat, and the bot gets out of the way until it's needed again.",
      detail:
        "There's a persistent menu item and a quick reply that hand the thread over to the merchant's Page Inbox and silence the bot. To hand it back there's a return-to-bot button, and if nobody touches the chat for 24 hours a sweep returns it to the bot on its own. So a conversation doesn't get stuck on either side.",
      icon: Handshake,
    },
  ],
  stack: ["n8n", "PostgreSQL", "Redis", "Meta Graph API", "Next.js", "Hono"],
  caseStudy: { label: "Read the Amar Bot case study", href: "/portfolio/botx/" },
};

// Team members whose expertise backs the research tracks, matched by name in teamData
export const researchContributors = ["Syed Tanvir Faisal", "Dr. Syed Mithun Ali"];
