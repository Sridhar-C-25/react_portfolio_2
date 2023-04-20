// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "JOHN",
    LastName: "ALEX",
    btnText: "Hire Me",
    image: "/images/Hero/person.png",
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/figma.png",
        point1: "Figma1",
        point2: "Figma2",
        point3: "Figma3",
        point4: "Figma4",
        point5: "Figma5"
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/node.png",
        point1: "Nodejs1",
        point2: "Nodejs2",
        point3: "Nodejs3",
        point4: "Nodejs4",
        point5: "Nodejs5"
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/ps.png",
        point1: "Photoshop1",
        point2: "Photoshop2",
        point3: "Photoshop3",
        point4: "Photoshop4",
        point5: "Photoshop5"
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/react.png",
        point1: "Reactjs1",
        point2: "Reactjs2",
        point3: "Reactjs3",
        point4: "Reactjs4",
        point5: "Reactjs5"
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/sketch.png",
        point1: "Skecth1",
        point2: "Skecth2",
        point3: "Skecth3",
        point4: "Skecth4",
        point5: "Skecth5"
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: "/images/Skills/python.png",
        point1: "Python1",
        point2: "Python2",
        point3: "Python3",
        point4: "Python4",
        point5: "Python5"
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: "/images/Services/logo1.png",
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: "/images/Services/logo2.png",
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: "/images/Services/logo3.png",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: "/images/projects/person.png",
    project_content: [
      {
        title: "Gym Website",
        image: "/images/projects/img1.png",
      },
      {
        title: "Social Media web",
        image: "/images/projects/img2.png",
      },
      {
        title: "Creative Website",
        image: "/images/projects/img3.png",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/Testimonials/avatar1.png",
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/Testimonials/avatar2.png",
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/Testimonials/avatar3.png",
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/Testimonials/avatar4.png",
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: "/assets/images/Hireme/person.png",
    image2: "/images/Hireme/person2.png",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
