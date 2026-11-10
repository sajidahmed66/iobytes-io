import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  // {
  //   slug: "bat",
  //   client: "BAT",
  //   logo: "/bat-bangladesh-logo.png",
  //   metric: "40% efficiency increase",
  //   outcome: "in order processing",
  //   industry: "Manufacturing",
  //   teaser: "Optimizing global order flow through automated validation and routing.",
  //   summary: "Implementing a custom middleware to handle complex order validation rules across 40+ markets.",
  //   challenge: "BAT faced significant delays in order processing due to manual validation steps and inconsistent data formats from regional distributors. The average processing time per order was 12 minutes, leading to bottlenecks during peak demand.",
  //   approach: "We engineered a high-throughput validation engine using a rules-as-code philosophy. The system normalizes incoming data and applies business logic in parallel, drastically reducing latency.",
  //   results: [
  //     "Reduced per-order processing time from 12 minutes to 15 seconds.",
  //     "Eliminated 98% of manual validation errors.",
  //     "Successfully scaled to handle 4x holiday peak volume without downtime."
  //   ],
  //   metrics: [
  //     { target: 40, suffix: "%", label: "Efficiency Increase" },
  //     { target: 12, suffix: "m", label: "Original Latency" },
  //     { target: 15, suffix: "s", label: "New Latency" }
  //   ],
  //   techStack: ["Next.js", "Go", "PostgreSQL", "Kafka"],
  //   testimonial: {
  //     quote: "Most firms just build what you ask for. iobytes pushed back, optimized our logic, and saved us thousands of manual hours. They didn't just build a tool; they solved a business problem.",
  //     attribution: "Global Supply Chain Director, BAT"
  //   }
  // },
  {
    slug: "agroshift",
    client: "Agroshift",
    logo: "/agroshift.avif",
    metric: "Agri-commerce",
    outcome: "a technology platform connecting farmers, processors and consumers across Bangladesh's food supply chain",
    industry: "Agriculture",
    teaser: "Software for a Singapore and Dhaka agritech company building the digital backbone of agri-commerce.",
    summary: "We built software for Agroshift, an agritech company based in Singapore and Dhaka that runs digital retail, processing and private label, and cross-border trade for essential food commodities like grains, pulses, wheat, edible oil and rice.",
    challenge: "Agroshift is building the digital backbone of agri-commerce, linking smallholder farmers to businesses and consumers through a mix of physical micro-fulfillment and digital ordering. Running that model means handling high order volumes, sourcing from thousands of farmers, and coordinating retail, processing and trade flows on one reliable system.",
    approach: "We designed and built the ordering platform, internal operations tools and farmer and reseller apps for Agroshift. The system supports their structured sourcing and demand-driven distribution model across digital retail, private label and cross-border trade.",
    results: [
      "Digital ordering across workplace hubs and a reseller network",
      "Structured sourcing from farmers into one platform",
      "Support for private label and processor supply workflows"
    ],
    metrics: [
      { target: 450949, label: "Total Orders on the Platform" },
      { target: 6000, suffix: "+", label: "Farmers Worked With" },
      { target: 6, label: "Private Label Products" }
    ],
    techStack: ["React", "Node.js", "AWS IoT", "TimescaleDB"]
  },
  {
    slug: "factorynext",
    client: "Factory Next",
    logo: "/factorynext.png",
    metric: "Real-time factory monitoring",
    outcome: "an IoT and AI platform that tracks energy, water, gas, ETP and carbon data across manufacturing sites",
    industry: "Industrial IoT",
    teaser: "Monitoring software for an industrial IoT and AI company serving RMG, textile and other manufacturers in Bangladesh.",
    summary: "We built the monitoring software behind Factory Next, a Dhaka-based Industrial IoT and AI company that helps manufacturers cut costs and carbon emissions while improving uptime, quality and compliance.",
    challenge: "Factory Next helps manufacturers, especially in textile and RMG, reduce costs and carbon emissions while improving uptime, quality and compliance. To do that, their customers needed one place to see critical factory data that was scattered across production, inventory, utilities, effluent treatment and environmental readings. Factory Next needed a reliable software layer to turn live sensor data into something factory teams could act on.",
    approach: "We designed and built the monitoring software that sits on top of Factory Next's IoT devices. It brings production processes, inventory, energy, water and gas consumption, ETP plant operations, environmental metrics and carbon footprint into a single platform, so real-time operations data becomes insight into energy use, asset health and process performance.",
    results: [
      "One platform for production, inventory, utilities and ETP monitoring",
      "Real-time visibility into energy, water and gas consumption",
      "Environmental and carbon footprint tracking for compliance reporting",
      "Foundation for AI-driven optimization of energy use and asset health"
    ],
    techStack: ["Python", "TensorFlow", "InfluxDB", "Grafana"]
  },
  {
    slug: "musaafir",
    client: "Musaafir",
    logo: "/musaafir.png",
    metric: "Verified stays",
    outcome: "a purpose-built stays marketplace for Bangladesh",
    industry: "TRAVEL TECH",
    teaser: "Verified short stays near hospitals, exam centres and landmarks, booked and paid end to end.",
    summary: "A live stays marketplace for Bangladesh, built around why people travel: medical, exam, tourism, business and student stays, with verified hosts and in-app payments.",
    challenge: "People travelling to Dhaka for treatment, exams or work often end up exhausted, with no trusted place to rest near where they need to be. Informal stays mean unverified hosts, unreliable availability and no safety net.",
    approach: "We engineered a purpose-first marketplace: guests search by landmark, purpose and listing type, including voice search in Bangla and Banglish. Hosts are verified with NID plus a live selfie and an in-person address check, and availability is enforced server-side so double bookings are blocked.",
    results: [
      "Live end to end today: search, booking, payment and host payout. Not a prototype.",
      "Payments via bKash, Nagad and cards, or cash on arrival.",
      "Host identity verification with NID plus a live selfie, reviewed by a person.",
      "Built-in 999 SOS safety centre with stay-sharing to a trusted contact.",
      "Host earnings dashboard with payouts to bKash, Nagad, Rocket or bank."
    ],
    metrics: [
      { target: 0, suffix: "%", label: "Host Commission" },
      { target: 24, suffix: "h", label: "Host Response Window" }
    ],
    techStack: ["Node.js", "Flutter", "Supabase"]
  },
  // {
  //   slug: "project-mr-radio",
  //   client: "Project Mr. Radio",
  //   logo: "/ais.png",
  //   metric: "Sub-second data ingestion",
  //   outcome: "Advancing maritime surveillance via open-source AIS network engineering",
  //   industry: "MARITIME INTELLIGENCE",
  //   teaser: "Terrestrial AIS base station network capturing real-time vessel data from the Bay of Bengal. Engineering RF telemetry pipelines for global maritime transparency.",
  //   summary: "Engineering terrestrial AIS stations to capture and broadcast real-time vessel data from the high-density shipping lanes of the Bay of Bengal.",
  //   challenge: "Global maritime transparency depends on accurate, real-time vessel tracking  yet vast coastal regions remain data black zones. The Bay of Bengal, one of the world's busiest shipping corridors, lacked sufficient terrestrial AIS coverage to support international search-and-rescue operations, logistics optimization, and maritime compliance.",
  //   approach: "iobytes partnered with AISHub under the strategic initiative Project Mr. Radio to engineer, deploy, and maintain open-source terrestrial AIS stations across the Bangladesh coastline.",
  //   results: [
  //     "Sub-second data ingestion with zero packet loss from coastal AIS stations",
  //     "Continuous VHF signal decoding from high-density commercial shipping lanes",
  //     "Global data contribution to AISHub international vessel tracking",
  //     "Edge resilience maintaining data integrity through power fluctuations",
  //     "Scalable open-source architecture ready for 5-10 station national expansion"
  //   ],
  //   metrics: [
  //     { target: 1, prefix: "<", suffix: "s", label: "Data Ingestion" },
  //     { target: 100, suffix: "%", label: "Packet Integrity" }
  //   ],
  //   techStack: ["AIS Receivers", "VHF Radio", "NMEA Protocol", "RF Telemetry", "Edge Computing", "Python"],
  //   testimonial: {
  //     quote: "iobytes bridges the gap between complex RF engineering and global data pipelines. Their coastal stations are some of the most resilient and reliable in our entire maritime network.",
  //     attribution: "AISHub Partnership Team"
  //   }
  // },
  // {
  //   slug: "rr-erp-pos",
  //   client: "RR",
  //   logo: "/RR-LIFESTYLE-PNG.webp",
  //   metric: "50% faster checkout",
  //   outcome: "for multi-store retail",
  //   industry: "Retail",
  //   teaser: "Modernizing legacy POS systems for high-volume retail environments.",
  //   summary: "Cloud-native ERP and POS integration for real-time inventory and sales.",
  //   challenge: "Legacy POS systems were slow, causing long queues and lost sales. Inventory data was only updated overnight, leading to stockouts and customer frustration.",
  //   approach: "We built a lightweight, cloud-synchronized POS application that works offline and syncs instantly when online. The system integrates directly with a central ERP for real-time inventory management.",
  //   results: [
  //     "Reduced average checkout time from 45 seconds to 22 seconds.",
  //     "Eliminated inventory drift across 150+ stores.",
  //     "Increased basket size by 12% through real-time cross-sell recommendations."
  //   ],
  //   metrics: [
  //     { target: 50, suffix: "%", label: "Faster Checkout" },
  //     { target: 150, suffix: "+", label: "Stores Synced" }
  //   ],
  //   techStack: ["React Native", "Go", "Redis", "Elasticsearch"],
  //   testimonial: {
  //     quote: "Our stores are finally operating in the 21st century. The checkout experience is flawless.",
  //     attribution: "Director of Retail Tech, RR"
  //   }
  // },
  // {
  //   slug: "healthcare",
  //   client: "Healthcare",
  //   metric: "60% reduction",
  //   outcome: "in admin time",
  //   industry: "Healthcare",
  //   teaser: "Automating patient intake and clinical documentation.",
  //   summary: "HIPAA-compliant automation platform for clinical workflows.",
  //   challenge: "Doctors were spending more time on paperwork than with patients. Manual data entry into legacy EHR systems was slow and error-prone.",
  //   approach: "We developed a voice-to-structured-data pipeline that automatically populates EHR fields. We also automated the patient intake process through a secure, glassmorphism-inspired patient portal.",
  //   results: [
  //     "Reclaimed 15 hours per week for every physician in the group.",
  //     "Improved data accuracy in clinical records by 40%.",
  //     "Reduced patient wait times by an average of 20 minutes."
  //   ],
  //   metrics: [
  //     { target: 60, suffix: "%", label: "Admin Reduction" },
  //     { target: 15, suffix: "h", label: "Reclaimed/Physician/Week" }
  //   ],
  //   techStack: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
  //   testimonial: {
  //     quote: "The doctors are happier, and the patients are getting better care. It's a win-win.",
  //     attribution: "Chief Medical Officer"
  //   }
  // },
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
      quote: "The architecture is robust, but it was the delivery speed that surprised us. iobytes built a social ecosystem that scales with our community, flawlessly on time.",
      attribution: "Executive Leadership, Kaicom"
    }
  },
  {
    slug: "botx",
    client: "Toge AI",
    logo: "/toge-mark.svg",
    metric: "AI-powered commerce automation",
    outcome: "a platform that automates customer replies, order processing and bookings around the clock",
    industry: "SOCIAL COMMERCE",
    teaser: "Software for businesses selling through social channels, built to automate conversations, orders and operational workflows.",
    summary: "We built Toge AI to automate the journey from customer enquiry to confirmed order. The platform answers product questions, captures order details, tracks deliveries and manages booking requests through connected workflows, with a central dashboard for configuring and monitoring business operations.",
    challenge: "Traditional social commerce relied on manual responses, leading to slow turnaround times and significant lost revenue from high-intent shoppers who dropped off before checkout. Product questions, order updates and repeated data entry added to the workload as message volumes grew.",
    approach: "We engineered an n8n-powered workflow automation system with a dual-interface approach (Meta DMs + custom admin panel). The solution ensures full Meta API compliance while providing elastic scalability for viral sales events. Toge AI connects product information, configurable replies, order capture and tracking in automated workflows, with a central dashboard for managing business operations.",
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
      quote: "Toge AI keeps customer conversations, orders and business workflows moving automatically, so businesses can keep selling around the clock.",
      attribution: "Toge AI automation platform"
    }
  },
  {
    slug: "aivax",
    client: "Aivax",
    logo: "/AIVAX.png",
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
      quote: "Aivax provided the intelligence and defense we needed at a critical scale. The local language NLP accuracy was the differentiator in protecting our digital presence during the surge.",
      attribution: "LogicBoom Leadership, Aivax Partner"
    }
  }
];
