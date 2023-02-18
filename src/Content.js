// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import laravel from "./assets/images/Skills/laravel.png";
import postman from "./assets/images/Skills/postman.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import teamwork from "./assets/images/Skills/teamwork.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/img6.png";
import person_project from "./assets/images/Projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePermContactCalendar, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
// import { MdOutlinePermContactCalendar } from "react-icons";
import { AiFillGithub } from "react-icons/ai";

export const content = {
  en: {
    nav: [
      {
        link: "#home",
        icon: TbSmartHome,
      },
      {
        link: "#aboutme",
        icon: BiUser,
      },
      {
        link: "#skills",
        icon: GiSkills,
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
      title: "Software Engineering student",
      firstName: "SOHAIB",
      LastName: "MANAH",
      btnText: "Explore more about Me",
      image: Hero_person,
      hero_content: [
        {
          count: "2+",
          text: "Years of Experinse in Web development And software development",
        },
        {
          count: "3+",
          text: "Projects Worked in my career",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "MY TOP SKILLS",
      skills_content: [
        {
          name: "Mongodb developer | DBA",
          para: "in NodeJs & Java & Php",
          logo: mongodb,
        },
        {
          name: "Node js | Expres.js ",
          para: "with  Rest Api |  GraphQL",
          logo: nodejs,
        },
        {
          name: "React js | Next js",
          para: "with Redux - Hooks- Material UI - Typescript - Tailwind css",
          logo: reactjs,
        },
        {
          name: "Php | Laravel",
          para: "with MVC & OOP & REST API",
          logo: laravel,
        },
        {
          name: "MySql | PostgreSql",
          para: "and relational data modeling with UML & ERD & MERISE ",
          logo: mysql,
        },
        {
          name: "c | c++",
          para: "university projects | data structures & algorithms | OOP",
          logo: cpp,
        },
        {
          name: "Linux (Debian based)",
          para: "Famliare with bash scripting & system administration basics",
          logo: linux,
        },
        {
          name: "Git | GitHub",
          para: "Famliare with git and github",
          logo: git,
        },
        {
          name: "DataStructure | Problem Solving | Graph Theory",
          para: "in c & c++ & java & javascript",
          logo: datastructure,
        },

        {
          name: "Postman",
          para: "Api testing",
          logo: postman,
        },
        {
          name: "Java",
          para: "Swing",
          logo: java,
        },
        {
          name: "UML | Data Modeling",
          para: "Software Design & Analysis with common design patterns",
          logo: uml,
        },
        {
          name: "TypeScript | JavaScript",
          para: "with React & Next js & Node js",
          logo: typescript,
        },
        {
          name: "teamwork | communication",
          para: "I like to work in a team and I am a good communicator",
          logo: teamwork,
        },
      ],
    },
    services: {
      title: "Services",
      subtitle: "WHAT I OFFER",
      service_content: [
        {
          title: "Web Development",
          para: "As a web developer with 2+ years of experience, I have worked on a variety of projects, from small personal websites to medium web applications. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies and frameworks.",
          logo: services_logo1,
        },
        {
          title: "MongoDB developer | DBA",
          para: "keeping your data safe and secure and persistent  is my priority and I can help you to do that with my experience in this field",
          logo: services_logo2,
        },
        {
          title: "Data modeling & Prototyping",
          para: "This is the most important part and crucial step in any project development.And with my experience in this field I can help you to make your project a success",
          logo: services_logo3,
        },
      ],
    },
    Projects: {
      title: "Projects",
      subtitle: "MY CREATION",
      image: person_project,
      project_content: [
        {
          title: "Club Website",
          link: "https://itgeeks.social/",
          image: project1,
        },
        {
          title: "Multiform Registration page",
          image: project2,
          link: "https://registration.itgeeks.social/",
        },
        {
          title: "Recipe App(Hackathon)",
          link: "https://rich-lime-piglet-tam.cyclic.app/#5ed6604591c37cdc054bcf74",
          image: project3,
        },
        {
          title: "Natours (tourism website)",
          link: "https://sohaibman.github.io/Natours.github.io/",
          image: project4,
        },
        {
          title: "meal delivered",
          link: "https://sohaibman.github.io/Omifood.github.io/",
          image: project5,
        },
        {
          title: "Bankist (bank website for learning purpose)",
          link: "https://sohaibman.github.io/Bankist.github.io/",
          image: project6,
        },
      ],
    },
    // Testimonials: {
    //   title: "Testimonials",
    //   subtitle: "MY CLIENT REVIEWS",
    //   testimonials_content: [
    //     {
    //       review:
    //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //       img: avatar1,
    //       name: "JOHN DOE",
    //     },
    //     {
    //       review:
    //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //       img: avatar2,
    //       name: "Tom Alex",
    //     },
    //     {
    //       review:
    //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //       img: avatar3,
    //       name: "Johnny",
    //     },
    //     {
    //       review:
    //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //       img: avatar4,
    //       name: "ROBBIN",
    //     },
    //   ],
    // },
    Aboutme: {
      title: "About Me",
      subtitle: "Hello Dear,This is a brief introduction about me",
      image1: Hireme_person,
      image2: Hireme_person2,
      para: "I am a software Engineering student in UAE University at FSTT ,specialty LSI (software and intelligent systems) and a MERN stack developer , \nI have worked on several projects and contribute in some small projects.\n I am looking for an internship for the next Summer.or a freelance job ",
      btnText: "learn more about my skills",
    },
    Contact: {
      title: "Contact Me",
      subtitle: "LET'S GET IN TOUCH",
      social_media: [
        {
          text: "souhaibemanah@gmail.com",
          icon: GrMail,
          link: "mailto:souhaibemanah@gmail.com",
        },
        {
          text: "sohaib manah",
          icon: AiFillLinkedin,
          link: "https://www.linkedin.com/in/sohaibmanah/",
        },
        {
          text: "sohaibMan",
          icon: AiFillGithub,
          link: "https://github.com/sohaibMan",
        },
        {
          text: "sohaib_manah",
          icon: BsInstagram,
          link: "https://www.instagram.com/sohaib_manah/",
        },
        {
          text: "sohaib_manah",
          icon: AiFillTwitterCircle,
          link: "https://twitter.com/sohaib_manah",
        },
      ],
    },
  },
};
