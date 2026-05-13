import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "bat",
    client: "BAT",
    logo: "/bat-bangladesh-logo.png",
    metric: "40% efficiency increase",
    outcome: "in order processing",
    industry: "Manufacturing",
    teaser: "Optimizing global order flow through automated validation and routing.",
    summary: "Implementing a custom middleware to handle complex order validation rules across 40+ markets.",
    challenge: "BAT faced significant delays in order processing due to manual validation steps and inconsistent data formats from regional distributors. The average processing time per order was 12 minutes, leading to bottlenecks during peak demand.",
    approach: "We engineered a high-throughput validation engine using a rules-as-code philosophy. The system normalizes incoming data and applies business logic in parallel, drastically reducing latency.",
    results: [
      "Reduced per-order processing time from 12 minutes to 15 seconds.",
      "Eliminated 98% of manual validation errors.",
      "Successfully scaled to handle 4x holiday peak volume without downtime."
    ],
    metrics: [
      { target: 40, suffix: "%", label: "Efficiency Increase" },
      { target: 12, suffix: "m", label: "Original Latency" },
      { target: 15, suffix: "s", label: "New Latency" }
    ],
    techStack: ["Next.js", "Go", "PostgreSQL", "Kafka"],
    testimonial: {
      quote: "The speed of execution and the measurable impact on our bottom line was immediate. iobytes didn't just provide a tool; they solved a business problem.",
      attribution: "Global Supply Chain Director, BAT"
    }
  },
  {
    slug: "agroshift",
    client: "Agroshift",
    logo: "/agroshift.avif",
    metric: "3x faster visibility",
    outcome: "in supply chain",
    industry: "Agriculture",
    teaser: "Real-time tracking of perishables from farm to table.",
    summary: "Building an IoT-integrated dashboard for real-time perishables tracking.",
    challenge: "Agroshift struggled with high spoilage rates due to lack of visibility into the cold chain. Information about temperature excursions often arrived too late to save the cargo.",
    approach: "We deployed a real-time IoT monitoring platform that integrates with existing hardware. The dashboard uses predictive modeling to alert handlers before temperature thresholds are breached.",
    results: [
      "Reduced spoilage rate by 65% in the first quarter.",
      "Achieved 3x faster response times to supply chain disruptions.",
      "Automated compliance reporting for food safety regulations."
    ],
    metrics: [
      { target: 3, suffix: "x", label: "Faster Visibility" },
      { target: 65, suffix: "%", label: "Spoilage Reduction" }
    ],
    techStack: ["React", "Node.js", "AWS IoT", "TimescaleDB"],
    testimonial: {
      quote: "Visibility is the foundation of our business. iobytes gave us a clear window into our entire operation.",
      attribution: "CEO, Agroshift"
    }
  },
  {
    slug: "factorynext",
    client: "Factorynext",
    logo: "/factorynext.png",
    metric: "$2.3M cost avoidance",
    outcome: "per annum",
    industry: "Industrial IoT",
    teaser: "Predictive maintenance for large-scale manufacturing plants.",
    summary: "AI-driven maintenance scheduling to prevent costly equipment failures.",
    challenge: "Unplanned downtime was costing Factorynext millions annually. Traditional scheduled maintenance was either too frequent (wasting parts) or too late (causing failures).",
    approach: "We implemented a predictive maintenance system using vibration and thermal sensor data. The system identifies early signatures of wear and schedules maintenance precisely when needed.",
    results: [
      "Saved $2.3M in the first year by avoiding unplanned equipment failure.",
      "Increased overall equipment effectiveness (OEE) by 14%.",
      "Extended machine life cycles by an average of 22%."
    ],
    metrics: [
      { target: 2.3, prefix: "$", suffix: "M", label: "Annual Cost Avoidance" },
      { target: 14, suffix: "%", label: "OEE Increase" }
    ],
    techStack: ["Python", "TensorFlow", "InfluxDB", "Grafana"],
    testimonial: {
      quote: "We've moved from reactive to proactive. The ROI was clear within the first six months.",
      attribution: "Head of Operations, Factorynext"
    }
  },
  {
    slug: "rr-erp-pos",
    client: "RR",
    logo: "/RR-LIFESTYLE-PNG.webp",
    metric: "50% faster checkout",
    outcome: "for multi-store retail",
    industry: "Retail",
    teaser: "Modernizing legacy POS systems for high-volume retail environments.",
    summary: "Cloud-native ERP and POS integration for real-time inventory and sales.",
    challenge: "Legacy POS systems were slow, causing long queues and lost sales. Inventory data was only updated overnight, leading to stockouts and customer frustration.",
    approach: "We built a lightweight, cloud-synchronized POS application that works offline and syncs instantly when online. The system integrates directly with a central ERP for real-time inventory management.",
    results: [
      "Reduced average checkout time from 45 seconds to 22 seconds.",
      "Eliminated inventory drift across 150+ stores.",
      "Increased basket size by 12% through real-time cross-sell recommendations."
    ],
    metrics: [
      { target: 50, suffix: "%", label: "Faster Checkout" },
      { target: 150, suffix: "+", label: "Stores Synced" }
    ],
    techStack: ["React Native", "Go", "Redis", "Elasticsearch"],
    testimonial: {
      quote: "Our stores are finally operating in the 21st century. The checkout experience is flawless.",
      attribution: "Director of Retail Tech, RR"
    }
  },
  {
    slug: "healthcare",
    client: "Healthcare",
    metric: "60% reduction",
    outcome: "in admin time",
    industry: "Healthcare",
    teaser: "Automating patient intake and clinical documentation.",
    summary: "HIPAA-compliant automation platform for clinical workflows.",
    challenge: "Doctors were spending more time on paperwork than with patients. Manual data entry into legacy EHR systems was slow and error-prone.",
    approach: "We developed a voice-to-structured-data pipeline that automatically populates EHR fields. We also automated the patient intake process through a secure, glassmorphism-inspired patient portal.",
    results: [
      "Reclaimed 15 hours per week for every physician in the group.",
      "Improved data accuracy in clinical records by 40%.",
      "Reduced patient wait times by an average of 20 minutes."
    ],
    metrics: [
      { target: 60, suffix: "%", label: "Admin Reduction" },
      { target: 15, suffix: "h", label: "Reclaimed/Physician/Week" }
    ],
    techStack: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
    testimonial: {
      quote: "The doctors are happier, and the patients are getting better care. It's a win-win.",
      attribution: "Chief Medical Officer"
    }
  },
  {
    slug: "kaicom",
    client: "Kaicom",
    logo: "/kiacom.png",
    metric: "99.9% uptime",
    outcome: "user-friendly social platform engineered for scale",
    industry: "IT COMPANY",
    teaser: "User-friendly social platform engineered for scale.",
    summary: "High-concurrency social ecosystem across web and mobile. Custom microservices architecture with intuitive UX and millisecond-level performance.",
    challenge: "Developing a next-generation social network required handling massive concurrency, a strict delivery timeline, and a refusal to settle for off-the-shelf solutions that lacked flexibility.",
    approach: "Serving as sole architect, we designed a robust hybrid data layer using PostgreSQL, MongoDB, and Redis. The solution featured a React/Next.js web portal and a high-performance Flutter mobile application, all deployed via a Docker/Kubernetes microservices architecture.",
    results: [
      "Achieved 99.9% uptime during peak concurrency events.",
      "Engineered a smart feed algorithm with millisecond-level delivery.",
      "Integrated real-time WebSocket messaging and AI-driven content moderation.",
      "Delivered a unified cross-platform mobile experience with enterprise security."
    ],
    metrics: [
      { target: 99.9, suffix: "%", label: "Uptime" },
      { target: 100, suffix: "ms", label: "Feed Latency" }
    ],
    techStack: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Redis", "React", "Next.js", "Flutter", "Docker", "Kubernetes"],
    testimonial: {
      quote: "The architecture is robust, and the delivery was flawlessly on time. iobytes built exactly what we needed to scale our community.",
      attribution: "Executive Leadership, Kaicom"
    }
  },
  {
    slug: "botx",
    client: "BotX",
    logo: "/botx-logo.png",
    metric: "Zero manual grind",
    outcome: "24/7 automated sales engine turning DMs into revenue",
    industry: "SOCIAL COMMERCE",
    teaser: "24/7 automated sales engine turning DMs into revenue.",
    summary: "Social commerce automation ecosystem. Eliminates manual social selling by converting direct messages into frictionless, structured sales pipelines.",
    challenge: "Traditional social commerce relied on manual responses, leading to slow turnaround times and significant lost revenue from high-intent shoppers who dropped off before checkout.",
    approach: "We engineered an n8n-powered workflow automation system with a dual-interface approach (Meta DMs + custom admin panel). The solution ensures full Meta API compliance while providing elastic scalability for viral sales events.",
    results: [
      "Achieved 24/7 fully automated social selling with zero manual grind.",
      "Successfully handled thousands of concurrent customer conversations.",
      "Implemented direct-from-DM checkout with live inventory synchronization.",
      "Provided granular funnel analytics and hands-off revenue generation."
    ],
    metrics: [
      { target: 100, suffix: "%", label: "Automated Responses" },
      { target: 24, suffix: "/7", label: "Operational Coverage" }
    ],
    techStack: ["n8n", "Node.js", "Meta APIs", "CRM APIs", "Fulfillment APIs", "Accounting APIs", "Real-time DBs", "Encryption"],
    testimonial: {
      quote: "BotX has completely transformed our social sales. We've gone from chasing DMs to watching automated revenue grow while we sleep.",
      attribution: "Executive Leadership, BotX"
    }
  },
  {
    slug: "aivax",
    client: "Aivax",
    logo: "/aivax-logo.png",
    metric: "Millions of data points processed",
    outcome: "real-time political intelligence and automated digital defense",
    industry: "POLITICAL TECH",
    teaser: "Real-time political intelligence and automated digital defense.",
    summary: "Cloud-native big-data sentiment analysis and automated moderation ecosystem. Processes millions of concurrent data points to protect public digital personas.",
    challenge: "The 2026 Bangladesh National Election presented a massive data challenge: millions of social conversations in mixed-script Bangla/Banglish and frequent misinformation attacks required immediate, accurate response.",
    approach: "We built a custom NLP engine optimized for hyper-local dialects and high-velocity data ingestion via Facebook Graph API. The 'Digital Shield' moderation layer was deployed on a microservices cloud infrastructure for peak surge resilience.",
    results: [
      "Processed millions of data points with high custom NLP accuracy.",
      "Achieved zero data lag during peak election-cycle social surges.",
      "Implemented automated digital shield moderation and crisis alert systems.",
      "Transformed raw sentiment data into structured political strategy insights."
    ],
    metrics: [
      { target: 10, suffix: "M+", label: "Data Points Processed" },
      { target: 95, suffix: "%", label: "NLP Accuracy" }
    ],
    techStack: ["Node.js", "Python", "TensorFlow", "Facebook Graph API", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Stream Processing"],
    testimonial: {
      quote: "Aivax provided the intelligence and defense we needed at a critical scale. The local language NLP accuracy was the differentiator.",
      attribution: "LogicBoom Leadership, Aivax Partner"
    }
  }
];
