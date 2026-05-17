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
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital. Specializes in translating board-level strategy into roadmaps.",
      photo: "/team/anik-islam.jpeg",
    },
    {
      name: "Plabon Dutta",
      role: "Acting CEO & Director",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure, with 9+ years of industry experience.",
      photo: "/team/plabon-dutta.jpeg",
    }
  ],
  consultants: [
    {
      name: "Syed Tanvir Faisal",
      role: "Marine & Shipping Procurement Specialist",
      bio: "Deep expertise in maritime logistics, vessel procurement, and international shipping operations. Optimizes fleet management and supply chain for global clients.",
      photo: "/team/syed-tanvir-faisal.jpg",
      skills: ["Maritime Logistics", "Fleet Management", "Supply Chain"]
    },
    {
      name: "Abdulla Al Mamun",
      role: "Technical Consultant and Architect",
      bio: "Unified 8 legacy systems into a single API gateway.",
      photo: "/team/abdulla-al-mamun.jpg",
      skills: ["System Integration", "API Design", "Cloud Architecture"]
    },
    {
      name: "Insan Arafat Jamil",
      role: "Embedded System and IoT Consultant",
      bio: "Specializes in embedded firmware, IoT sensor networks, and real-time systems. Delivered connected device solutions across industrial and consumer domains.",
      photo: "/team/insan-arafat-jamil.jpg",
      linkedin: "https://www.linkedin.com/in/insan-arafat-jamil/",
      imagePosition: "50% 10%",
      skills: ["Embedded Systems", "IoT", "Real-time Systems"]
    }
  ],
  leadership: [
    {
      name: "Plabon Dutta",
      role: "Director & Chief Technical Officer",
      bio: "PhD student in Computer Science specializing in high-performance systems, networking, and distributed infrastructure.",
      photo: "/team/plabon-dutta.jpeg",
      linkedin: "https://www.linkedin.com/in/plabon-dutta-780895365/",
      stackoverflow: "https://stackoverflow.com/users/4180545/plabon-dutta",
      github: "https://github.com/pldutta",
      isAlsoBoard: true,
      skills: ["Distributed Systems", "High-Performance Computing", "Networking"]
    },
    {
      name: "Mohammad Anik Islam Sojib",
      role: "Managing Director & Lead Solutions Architect",
      bio: "15 years in B2B enterprise consulting. Former engagement partner at Deloitte Digital.",
      photo: "/team/anik-islam.jpeg",
      linkedin: "https://www.linkedin.com/in/anik587/",
      isAlsoBoard: true,
      skills: ["Enterprise Strategy", "Digital Transformation", "B2B Consulting"]
    },
    {
      name: "Naib Hossain khan",
      role: "Chairman",
      bio: "Distributed systems specialist with a background in high-frequency trading infrastructure.",
      photo: "/team/naib-hossain-khan.jpeg",
      github: "https://github.com/naibkhan",
      isAlsoBoard: true,
      skills: ["Trading Systems", "Distributed Architecture", "System Design"]
    },
    {
      name: "Sajid Ahmed Siddiqui",
      role: "Lead Software Engineer",
      bio: "Full-stack engineer with deep expertise in fintech and enterprise applications. Reduced time-to-value from 6 months to 8 weeks for new clients.",
      photo: "/team/sajid-ahmed.jpeg",
      skills: ["Full-Stack Development", "Fintech", "Enterprise Apps"]
    },
    {
      name: "Abdullah Al Mamun",
      role: "Law Officer",
      bio: "Law graduate with experience in company, civil, and financial litigation matters. Skilled in legal drafting, compliance support, legal research, and client consultation.",
      photo: "/team/abdullah-al-mamun.png",
      skills: [
        "Legal Research",
        "Legal Drafting",
        "Compliance Support",
        "Financial Law",
        "Civil Litigation",
        "MS Office"
      ]
    }
  ]
};
