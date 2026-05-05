import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "bat",
    client: "BAT",
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
  }
];
