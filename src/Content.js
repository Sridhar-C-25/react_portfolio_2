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
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import cert1 from "./assets/images/Certifications/cert1.png";
import cert2 from "./assets/images/Certifications/cert2.png";
import cert3 from "./assets/images/Certifications/cert3.png";
import cert4 from "./assets/images/Certifications/cert4.png";
import cert5 from "./assets/images/Certifications/cert5.png";
import cert6 from "./assets/images/Certifications/cert6.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/img6.png";
// import person_project from "./assets/images/Projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

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
import { TbCertificate } from "react-icons/tb";

const Nav = [
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
    link: "#certifications",
    icon: TbCertificate,
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
];

const social_media = [
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
];
const cert_content = [
  {
    title: "MongoDB Node.js Developer Path",
    link: "https://learn.mongodb.com/c/gQa2lhNtSgqM_tM35YbVkQ",
    image: cert1,
  },
  {
    title: "MongoDB Data Modeling",
    image: cert2,
    link: "https://learn.mongodb.com/c/lkxA2J6RTE2Ash0IL--EtA",
  },
  {
    title: "MongoDB java Developer Path",
    image: cert3,
    link: "https://learn.mongodb.com/c/Xl-2HBe4SAWvzjUjjEWICg",
  },
  {
    title: "React + Redux ",
    link: "https://www.sololearn.com/certificates/CT-MHOKZQZV",
    image: cert4,
  },
  {
    title: "Postman API Fundamentals Student Expert",
    link: "https://badgr.com/public/assertions/JKnbd3dAQwCPpg3dxr1n_A?identity__email=sohaib.manah@etu.uae.ac.ma",
    image: cert5,
  },
  {
    title: "SQL (Advanced)",
    link: "https://www.hackerrank.com/certificates/3a683fbab8d4",
    image: cert6,
  },
];

export const content = {
  en: {
    Nav,
    hero: {
      title: "Software Engineering student",
      firstName: "SOHAIB",
      LastName: "MANAH",
      btnText: "Explore more about Me",
      image: Hero_person,
      hero_content: [
        {
          count: "1+",
          text: "Year of Experience in Web development And software development",
        },
        {
          count: "5+",
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
          name: "Node js | Express.js ",
          para: "with  Rest Api |  GraphQL",
          logo: nodejs,
        },
        {
          name: "React js | Next js",
          para: "with Redux - Hooks- Material UI - Typescript - Tailwind css",
          logo: reactjs,
        },
        {
          name: "Php | laravel",
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
          para: "Familiar with bash scripting & system administration basics",
          logo: linux,
        },
        {
          name: "Git | GitHub",
          para: "Familiar with git and github",
          logo: git,
        },
        {
          name: "Data Structure | Problem Solving | Graph Theory",
          para: "in c & c++ & java & javascript",
          logo: datastructure,
        },

        {
          name: "Postman",
          para: "Automated API testing",
          logo: postman,
        },
        {
          name: "Java",
          para: "Swing (Desktop Graphical User Interface)",
          logo: java,
        },
        {
          name: "UML | Data Modeling(Sql & NoSql)",
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
        {
          name: "Python",
          para: "in Graph theory",
          logo: python,
        },
      ],
    },
    services: {
      title: "Services",
      subtitle: "WHAT I OFFER",
      service_content: [
        {
          title: "Web Development",
          para: "As a web developer with 1+ year of experience, I have worked on a variety of projects, from small personal websites to medium web applications. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies and frameworks.",
          logo: services_logo1,
        },
        {
          title: "MongoDB developer | DBA",
          para: "keeping your data safe and secure and persistent  is my priority and I can help you to do that with my experience in this field",
          logo: services_logo2,
        },
        {
          title: "Data modeling & Prototyping",
          para: "This is the most important phase and crucial step in any project development.And with my experience in this field I can help you to make your project a success",
          logo: services_logo3,
        },
      ],
    },
    Projects: {
      title: "Projects",
      subtitle: "MY CREATION",
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
          title: "Meal delivered",
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
      image2: Hireme_person,
      para: "I am a software Engineering student in UAE University at FSTT ,specialty LSI (software and intelligent systems) and a MERN stack developer , \nI have worked on several projects and contribute in some small projects.\n I am looking for an internship for the next Summer.or a freelance job ",
      btnText: "learn more about my skills",
    },
    Contact: {
      title: "Contact Me",
      subtitle: "LET'S GET IN TOUCH",
      social_media,
    },
    Certifications: {
      title: "Certifications",
      subtitle: "My Certifications",
      cert_content,
    },
  },
  fr: {
    Nav,
    hero: {
      title: "Élève ingénieur en LSI",
      firstName: "SOHAIB",
      LastName: "MANAH",
      btnText: "En savoir plus sur moi",
      image: Hero_person,
      hero_content: [
        {
          count: "1+",
          text: "An d'expérience en développement Web et en développement de logiciels",
        },
        {
          count: "5+",
          text: "Projets Travaillé dans ma carrière",
        },
      ],
    },
    skills: {
      title: "compétences",
      subtitle: "MES MEILLEURES COMPÉTENCES",
      skills_content: [
        {
          name: "Mongodb développeur | DBA",
          para: "avec NodeJs & Java & Php",
          logo: mongodb,
        },
        {
          name: "Node js | Express.js ",
          para: "avec  Rest Api |  GraphQL",
          logo: nodejs,
        },
        {
          name: "React js | Next js",
          para: "avec Redux - Hooks- Material UI - Typescript - Tailwind css",
          logo: reactjs,
        },
        {
          name: "Php | laravel",
          para: "avec MVC & OOP & REST API",
          logo: laravel,
        },
        {
          name: "MySql | PostgreSql",
          para: "plus la modélisation de données relationnelles avec UML & ERD & MERISE ",
          logo: mysql,
        },
        {
          name: "c | c++",
          para: "projets universitaires | structures de données et algorithmes | POO",
          logo: cpp,
        },
        {
          name: "Linux (Basées sur Debian)",
          para: "Connaissance des bases de script bash et d'administration système",
          logo: linux,
        },
        {
          name: "Git | GitHub",
          para: "Connaissance de git and github",
          logo: git,
        },
        {
          name: "Structure des données | Résolution de problèmes | Théorie des graphes",
          para: "en c & c++ & java & javascript",
          logo: datastructure,
        },

        {
          name: "Postman",
          para: "L'automatisation des test d'API",
          logo: postman,
        },
        {
          name: "Java",
          para: "Swing (Interface utilisateur graphique)",
          logo: java,
        },
        {
          name: "conception UML | Modélisation des données (Sql & NoSql)",
          para: "Conception et analyse de logiciels avec des modèles de conception communs",
          logo: uml,
        },
        {
          name: "TypeScript | JavaScript",
          para: "avec React & Next js & Node js",
          logo: typescript,
        },
        {
          name: "Travail en équipe | communication",
          para: "J'aime travailler en équipe et je suis un bon communicateur",
          logo: teamwork,
        },
        {
          name: "Python",
          para: "avec la Théorie des graphes",
          logo: python,
        },
      ],
    },
    services: {
      title: "Les services",
      subtitle: "ce que j'offre",
      service_content: [
        {
          title: "Développement web",
          para: "En tant que développeur Web avec plus de 1 an d'expérience, j'ai travaillé sur une variété de projets, des petits sites Web personnels aux applications Web moyennes. J'ai de l'expérience en développement front end et back end, et je suis à l'aise de travailler avec une variété de technologies.",
          logo: services_logo1,
        },
        {
          title: "Développeur MongoDB | DBA",
          para: "Garder vos données sûres et sécurisées et persistantes est ma priorité et je peux vous aider à le faire avec mon expérience dans ce domaine",
          logo: services_logo2,
        },
        {
          title: "Modélisation et conception du project",
          para: "Il s'agit de la phase la plus importante et de l'étape cruciale de tout développement de projet. Et avec mon expérience dans ce domaine, je peux vous aider à faire de votre projet un succès",
          logo: services_logo3,
        },
      ],
    },
    Projects: {
      title: "Projects",
      subtitle: "Ma création",
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
          title: "Meal delivered",
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
      title: "A propos de moi",
      subtitle: "Bonjour Cher,Ceci est une brève introduction sur moi",
      image1: Hireme_person,
      image2: Hireme_person,
      para: "J'étudie à l'Université uae (Université Abdelmalek Essaadi), à la FSTT (Faculté des Sciences et Techniques de Tanger) en tant qu'un étudiant en Génie Informatique spécialité LSI (logiciel et système intelligent), \n et  Je suis un MERN développeur, j'ai travaillé sur plusieurs projets et contribué à quelques petits projets.\n et je cherche un stage pour l'été prochain",
      btnText: "En savoir plus sur mes compétences",
    },
    Contact: {
      title: "contactez-moi",
      subtitle: "RESTONS EN CONTACT",
      social_media,
    },
    Certifications: {
      title: "Certifications",
      subtitle: "mes Certifications",
      cert_content,
    },
  },
};
