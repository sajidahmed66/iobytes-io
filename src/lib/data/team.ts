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
      bio: "Distributed systems specialist with a background in high-frequency trading infrastructure. Designs architectures that fail gracefully and scale predictably.",
      photo: "/team/naib-hossain-khan.jpeg",
      // linkedin: "https://www.linkedin.com/in/naibkhan/"
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital. Specializes in translating board-level strategy into roadmaps.",
      photo: "/team/anik-islam.jpeg",
      // linkedin: "https://www.linkedin.com/in/anik587/"
    },
    {
      name: "Plabon Dutta",
      role: "Acting CEO & Director",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure, with 9+ years of industry experience.",
      photo: "/team/plabon-dutta.jpeg",
      // linkedin: "https://www.linkedin.com/in/plabon-dutta-780895365/"
    },
    {
      name: "Dr. Fahmida Chowdhury",
      role: "Director",
      bio: "Recruited 100+ engineers in 6 months while maintaining <1% defect rate.",
      photo: "/team/elena-vasquez.jpg",
      linkedin: ""
    },
    {
      name: "Mossammat Mahmuda Khatun",
      role: "Director",
      bio: "Achieved 99.99% uptime while cutting infrastructure costs by 40%.",
      photo: "/team/mossammat-mahmuda-khatun.jpg",
    }
  ],
  consultants: [
    {
      name: "Syed Tanvir Faisal",
      role: "Marine and shippment Procurement & Specialist",
      bio: "Migrated 12 enterprise workloads to cloud with zero downtime.",
      photo: "/team/syed-tanvir-faisal.jpg",
      // linkedin: "https://www.linkedin.com/in/syedtanvirfaisal/"
    },
    {
      name: "Abdulla Al Mamun",
      role: "Technical Consultant and Architect",
      bio: "Unified 8 legacy systems into a single API gateway.",
      photo: "/team/abdulla-al-mamun.jpg",
      // linkedin: "https://www.linkedin.com/in/abdullah-al-mamun-47924aa6/"
    },
    {
      name: "Insan Arafat Jamil",
      role: "Embedded System and IoT Consultant",
      bio: "Deployed predictive models that reduced client churn by 25%.",
      photo: "/team/insan-arafat-jamil.jpg",
      linkedin: "https://www.linkedin.com/in/insan-arafat-jamil/"
    }
  ],
  leadership: [
    {
      name: "Plabon Dutta",
      role: "Director & Chief Technical Officer",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure.",
      photo: "/team/plabon-dutta.jpeg",
      linkedin: "https://www.linkedin.com/in/plabon-dutta-780895365/",
      stackoverflow: "https://stackoverflow.com/users/4180545/plabon-dutta"
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director & Lead Solutions Architect",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital.",
      photo: "/team/anik-islam.jpeg",
      linkedin: "https://linkedin.com/in/priya-sharma-md"
    },
    {
      name: "Naib Hossain khan",
      role: "Chairman",
      bio: "Distributed systems specialist with a background in high-frequency trading infrastructure.",
      photo: "/team/naib-hossain-khan.jpeg",
      // linkedin: "https://linkedin.com/in/david-okonkwo-architect",
      stackoverflow: ""
    },
    {
      name: "Sajid Ahmed Siddiqui",
      role: "Senior Software Engineer",
      bio: "Reduced time-to-value from 6 months to 8 weeks for new clients.",
      photo: "/team/sajid-ahmed.jpeg",
      // linkedin: "https://www.linkedin.com/in/sajidahmed66/"
    },
  ]
};
