// I am Super

import { Calendar, GitBranch, Rocket } from "lucide-react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
export interface TypeFile {
  icon: string;
  title: string;
  isNew: boolean;
}
export interface Testi {
  text: string;
  name: string;
  title: string;
  avatarImg: string;
}
interface Features {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const FeaturesConstant: Features[] = [
  {
    icon: Rocket,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nisi dignissimos hic ipsam odio officia quos iure eligendi rem nemo eum, ipsum eaque consectetur quibusdam",
  },

  {
    icon: Calendar,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nisi dignissimos hic ipsam odio officia quos iure eligendi rem nemo eum, ipsum eaque consectetur quibusdam",
  },
  {
    icon: GitBranch,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nisi dignissimos hic ipsam odio officia quos iure eligendi rem nemo eum, ipsum eaque consectetur quibusdam",
  },
];
export const Test: Testi[] = [
  {
    text: "This product has completely transformed how I manage my projects and deadlines",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Our team's productivity has increased significantly since we started using this tool",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];
