import figma from "./assets/images/Skills/figma.png";
import javascript from "./assets/images/Skills/javascript.png";
import html from "./assets/images/Skills/html.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import WoodworkingLogo from "./assets/images/Services/woodworking-logo.svg";
import AIEvolutionLogo from "./assets/images/Services/ai-evolution-logo.svg";
import ExerciseLogo from "./assets/images/Services/exercise-logo.svg";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
  ],
  hero: {
    title: "Web Developer",
    hero_content: [
      {
        count: " 3+ ",
        text: "Years of Experience in Software Development",
      },
      {
        count: " 4+ ",
        text: "Coding Languages Under the Belt",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "AND ABILITIES",
    skills_content: [
      {
        name: "Figma",
        para: "Mastered one of the biggest tools of Web Design",
        logo: figma,
      },
      {
        name: "Node.js",
        para: "Accompanying Front-End Web Development with Back-End",
        logo: nodejs,
      },
      {
        name: "HTML",
        para: "Using one of the center blocks of Front-End Development",
        logo: html,
      },
      {
        name: "React",
        para: "Strong grasp on the staple of designing Web Applications",
        logo: reactjs,
      },
      {
        name: "Javascript",
        para: "Conquered the true language of Web Design",
        logo: javascript,
      },
      {
        name: "Python",
        para: "Over 2 years of experience in Python",
        logo: python,
      },
    ],

  },
  services: {
    title: "Hobbies",
    subtitle: "AND INTERESTS",
    service_content: [
      {
        title: "Woodworking",
        para: "I have a big interest in hands-on work and creating things for people, giving me insight on UX and UI as I have to conform to the standards of my customers.",
      },
      {
        title: "AI Evolution",
        para: "In order to keep up with the ever-evolving software world, and indulge in my nerdy interests, I keep up with the growth of AI in the new Modern World",
      },
      {
        title: "Exercise",
        para: "I have dedicated myself to the gym for the past 6 years, and I believe no matter what consistency and persistence yield results!",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    /*image: "name_of_file"*/
    project_content: [
      {
        title: "Gym Website",
      },
      {
        title: "Social Media web",
      },
      {
        title: "Creative Website",
      },
    ],
  },

  Blog: {
    title: "Blog",
    subtitle: "CURRENT",
    blog_content: [
      {/*something here set up with dad*/}
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "INTO YOUR COMPANY",
    para: "As a hard working member of the software world I am a prime candidate for any Front-End Development position that may arise. I will always strive to meet and exceed expectations, fueled by my creative energy!",
    btnText: "See my Resume!"
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mripekci@gmail.com",
        icon: GrMail,
        link: "mailto:mripekci@gmail.com",
      },
      {
        text: "408 338 8954",
        icon: MdCall,
        link: "https://wa.me/4083388954",
      },
      {
        text: "LinkedIn: Mustafa Ipekci",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/mustafa-ipekci-96a98925b/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
