import { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "engineering-outcomes-not-output",
    title: "Engineering Outcomes, Not Just Output",
    excerpt: "Why the billable hour is the enemy of enterprise ROI and how we're changing the model.",
    content: `
      ## The Output Trap
      Most consultancies sell you "output" lines of code, story points, or hours worked. But for an enterprise, output is a cost, not a benefit.

      ## The Outcome Philosophy
      We've aligned our engineering culture around business outcomes. This means we don't just ask "how do we build this?" but "why should this exist, and what metric will it move?"

      ### Key Principles:
      - **Metric Accountability**: Every project begins with a baseline and a target outcome.
      - **Pragmatic Architecture**: We choose tech that scales with your revenue, not just the trend of the week.
      - **Continuous Feedback**: We ship fast to validate assumptions early.
    `,
    category: "Philosophy",
    date: "2026-04-15",
    readTime: "6 min read",
    image: "/images/blog/outcomes.jpg",
    author: {
      name: "Alex Rivera",
      role: "Founding Engineer",
      bio: "Alex has led engineering for three Fortune 500 digital transformations.",
      photo: "/images/team/alex.jpg"
    }
  },
  {
    slug: "scaling-b2b-infrastructure",
    title: "Scaling B2B Infrastructure Without Breaking the Bank",
    excerpt: "How to architect for 10x growth while maintaining a 60% reduction in cloud spend.",
    content: `
      ## Start With the Load Profile
      Scaling responsibly begins with understanding where traffic spikes, where data accumulates, and which workflows actually drive revenue. Most teams overprovision everything instead of modeling the few paths that matter.

      ## Split the Hot Path From the Rest
      We design systems so that high-frequency actions stay fast while slower, less critical tasks move into async queues or background jobs. That keeps customer-facing latency predictable without forcing the whole stack to grow at the same rate.

      ## Reduce Waste Before You Add Capacity
      Before adding more servers or cloud services, we look for duplicate queries, oversized payloads, stale jobs, and redundant integrations. In many systems, cleaning up those inefficiencies produces more headroom than a bigger instance ever will.

      ## Measure the Economics, Not Just the Uptime
      The best infrastructure decisions are tied to business impact. We track cost per transaction, throughput per dollar, and failure recovery time so scale stays aligned with both performance and margin.

      ## The Outcome
      Sustainable infrastructure is not the biggest setup you can afford. It is the smallest reliable system that can carry tomorrow's demand without making today's product harder to run.
    `,
    category: "Technical",
    date: "2026-04-02",
    readTime: "8 min read",
    image: "/images/blog/scaling.jpg",
    author: {
      name: "Sarah Chen",
      role: "Solutions Architect",
      bio: "Sarah is a distributed systems expert and ex-FAANG engineer.",
      photo: "/images/team/sarah.jpg"
    }
  }
];
