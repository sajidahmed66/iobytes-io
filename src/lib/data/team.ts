import { TeamMember } from "@/types";

export interface TeamData {
  board: TeamMember[];
  consultants: TeamMember[];
  leadership: TeamMember[];
}

export const teamData: TeamData = {
  board: [
    {
      name: "Naib Hossain khan",
      role: "Chairman",
      metric: "Reduced system integration time by 70% for 4 enterprise clients",
      bio: "Distributed systems specialist with a background in high-frequency trading infrastructure. Designs architectures that fail gracefully and scale predictably.",
      photo: "/team/naib-hossain-khan.jpg",
      linkedin: "https://linkedin.com/in/david-okonkwo-architect"
    },
    {
      name: "Plabon Dutta",
      role: "Director",
      metric: "Scaled platform to handle 10M+ daily transactions",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure, with 9+ years of industry experience.",
      photo: "/team/plabon-dutta.jpg",
      linkedin: "https://www.linkedin.com/in/plabon-dutta-780895365/"
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director",
      metric: "Grew client portfolio from $2M to $12M ARR in 18 months",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital. Specializes in translating board-level strategy into roadmaps.",
      photo: "/team/anik-islam.jpg",
      linkedin: "https://linkedin.com/in/priya-sharma-md"
    },
    {
      name: "Dr. Fahmida Chowdhury",
      role: "Director",
      metric: "Recruited 100+ engineers in 6 months while maintaining <1% defect rate",
      bio: "",
      photo: "/team/elena-vasquez.jpg",
      linkedin: "https://linkedin.com/in/elena-vasquez-backend"
    },
    {
      name: "Mossammat Mahmuda Khatun",
      role: "Director",
      metric: "Achieved 99.99% uptime while cutting infrastructure costs by 40%",
      bio: "",
      photo: "/team/mossammat-mahmuda-khatun.jpg",
    }
  ],
  consultants: [
    {
      name: "Syed Tanvir Faisal",
      role: "Marine and shippment Procurement & Specialist",
      metric: "Migrated 12 enterprise workloads to cloud with zero downtime",
      bio: "",
      photo: "/team/syed-tanvir-faisal.jpg",
      linkedin: "https://www.linkedin.com/in/syedtanvirfaisal/"
    },
    {
      name: "Abdulla Al Mamun",
      role: "Technical Consultant and Architect",
      metric: "Unified 8 legacy systems into a single API gateway",
      bio: "",
      photo: "/team/abdulla-al-mamun.jpg",
      linkedin: "https://www.linkedin.com/in/abdullah-al-mamun-47924aa6/"
    },
    {
      name: "Insan Arafat Jamil",
      role: "Embedded System and IoT Consultant",
      metric: "Deployed predictive models that reduced client churn by 25%",
      bio: "",
      photo: "/team/insan-arafat-jamil.jpg",
      linkedin: "https://www.linkedin.com/in/insan-arafat-jamil/"
    }
  ],
  leadership: [
    {
      name: "Plabon Dutta",
      role: "Director & Chief Technical Officer",
      metric: "Scaled platform to handle 10M+ daily transactions",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure.",
      photo: "/team/plabon-dutta.jpg",
      linkedin: "https://www.linkedin.com/in/plabon-dutta-780895365/",
      stackoverflow: "https://stackoverflow.com/users/4180545/plabon-dutta"
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director & Lead Solutions Architect",
      metric: "Grew client portfolio from $2M to $12M ARR in 18 months",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital.",
      photo: "/team/anik-islam.jpg",
      linkedin: "https://linkedin.com/in/priya-sharma-md"
    },
    {
      name: "Naib Hossain khan",
      role: "Chairman",
      metric: "Reduced system integration time by 70% for 4 enterprise clients",
      bio: "Distributed systems specialist with a background in high-frequency trading infrastructure.",
      photo: "/team/naib-hossain-khan.jpg",
      linkedin: "https://linkedin.com/in/david-okonkwo-architect",
      stackoverflow: "https://stackoverflow.com/users/4419023/davidokonkwo"
    },
    {
      name: "Dr. Fahmida Chowdhury",
      role: "Director",
      metric: "Recruited 100+ engineers in 6 months while maintaining <1% defect rate",
      bio: "",
      photo: "/team/elena-vasquez.jpg",
      linkedin: "https://linkedin.com/in/elena-vasquez-backend"
    },
    {
      name: "Mossammat Mahmuda Khatun",
      role: "Director & Head Of Product Strategist",
      metric: "Achieved 99.99% uptime while cutting infrastructure costs by 40%",
      bio: "",
      photo: "/team/mossammat-mahmuda-khatun.jpg",
    },
    {
      name: "Sajid Ahmed Siddiqui",
      role: "Technical Lead",
      metric: "Reduced time-to-value from 6 months to 8 weeks for new clients",
      bio: "",
      photo: "/team/sajid-ahmed-siddiqui.jpg",
      linkedin: "https://www.linkedin.com/in/sajidahmed66/"
    },
    {
      name: "Thomas Berg",
      role: "Data Engineering Lead",
      metric: "Built real-time analytics pipeline processing 2TB+ daily",
      bio: "Ex-quantitative researcher turned data engineer. Designs pipelines that turn messy enterprise data into board-ready insights.",
      photo: "/team/thomas-berg.jpg",
      linkedin: "https://linkedin.com/in/thomas-berg-data",
      stackoverflow: "https://stackoverflow.com/users/3342101/thomasberg"
    },
    {
      name: "Linh Nguyen",
      role: "Frontend Engineering Lead",
      metric: "Improved core web vitals score from 42 to 96 across client dashboards",
      bio: "Accessibility-first engineer. Believes enterprise software doesn't have to feel like enterprise software.",
      photo: "/team/linh-nguyen.jpg",
      linkedin: "https://linkedin.com/in/linh-nguyen-frontend",
      stackoverflow: "https://stackoverflow.com/users/4521098/linhnguyen"
    }
  ]
};
