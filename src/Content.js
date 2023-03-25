// import images
import Hero_person from "./assets/images/Hero/person.png";

// import figma from "./assets/images/Skills/figma.png";
// import sketch from "./assets/images/Skills/sketch.png";
// import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
// import nodejs from "./assets/images/Skills/node.png";
// import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
// import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/img1.png";
import project2 from "../src/assets/images/Projects/img2.png";
import project3 from "../src/assets/images/Projects/img3.png";
import person_project from "../src/assets/images/Projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
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
    title: "FullStack Developer",
    firstName: "Bagus",
    LastName: "Kurniawan",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "10+",
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
    data: [
      {
        category: "Code",
        content: [
          {
            name: "PHP",
            para: 2010,
            logo: "https://www.php.net/images/logos/new-php-logo.svg",
          },
          {
            name: "Javscript",
            para: 2010,
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433",
          },
          {
            name: "Laravel",
            para: 2015,
            logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          },
          {
            name: "React js",
            para: 2018,
            logo: reactjs,
          },
          {
            name: "Express js",
            para: 2020,
            logo: "https://i0.wp.com/compositecode.blog/wp-content/uploads/2018/07/1200px-node-js_logo.png?resize=863%2C528&ssl=1",
          },
        ],
      },
      {
        category: "Database",
        content: [
          {
            name: "MySQL",
            para: 2010,
            logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
          },
          {
            name: "PostgreSQL",
            para: 2012,
            logo: "https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png",
          },
          {
            name: "SQL Server",
            para: 2016,
            logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
          },
          {
            name: "MongoDB",
            para: 2020,
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
          },
          {
            name: "Firebase",
            para: 2020,
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
          },
        ],
      },
      {
        category: "Others",
        content: [
          {
            name: "Docker",
            para: 2021,
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
          },
          {
            name: "Version Control",
            para: 2018,
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
          },
          {
            name: "Microservices",
            para: 2018,
            logo: "http://jpmorgenthal.com/wp-content/uploads/2021/01/Microservices.png",
          },
          {
            name: "Mikrotik",
            para: 2014,
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/MikroTik_logo.svg",
          },
          {
            name: "Server",
            para: 2013,
            logo: "https://previews.123rf.com/images/bestvectorstock/bestvectorstock1808/bestvectorstock180813879/107224375-server-vector-icon-isolated-on-transparent-background-server-logo-concept.jpg",
          },
          {
            name: "Technician Harware/Software",
            para: 2008,
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wiki-tech-logo.svg",
          },
        ],
      },
      {
        category: "Operating System",
        content: [
          {
            name: "Mac OS",
            para: 2016,
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
          },
          {
            name: "Linux",
            para: 2009,
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Linux_Logo.jpg",
          },
          {
            name: "Windows",
            para: 2004,
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
          },
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Work Experience",
    subtitle: "",
    service_content: [
      {
        title: "Backend Developer",
        year: "2022 - 2023",
        para: "Digdaya Olah Teknologi",
        logo: services_logo1,
      },
      {
        title: "FullStack WEB/Android Developer - System Analysis - Leader",
        year: "2020 - 2023",
        para: "Antardata Cakrawala Teknologi",
        logo: services_logo1,
      },
      {
        title: "FullStack Developer - System Analysis - Leader",
        year: "2020 - 2022",
        para: "Epsilon Multisinergi",
        logo: services_logo1,
      },
      {
        title:
          "FullStack WEB/Android Developer - System Analysis - Infrastructure - Leader",
        year: "2018 - 2022",
        para: "Xplora Gamma Jaya",
        logo: services_logo1,
      },
      {
        title: "FullStack WEB/Android Developer",
        year: "2016 - 2018",
        para: "Aslamindo Eltama Raya",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Latest Projects",
    subtitle: "",
    image: person_project,
    project_content: [
      {
        title: "Triputra Energi Megatara",
        image: project1,
      },
      {
        title: "RSD Soebandi",
        image: project2,
      },
      {
        title: "Administrasi Hukum Umum",
        image: project3,
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "",
    social_media: [
      {
        text: "bagusyulikurniawan@gmail.com",
        icon: GrMail,
        link: "mailto:bagusyulikurniawan@gmail.com",
      },
      {
        text: "+6285746400500",
        icon: MdCall,
        link: "https://wa.me/6285746400500",
      },
      {
        text: "github",
        icon: GoMarkGithub,
        link: "https://github.com/starmoozie",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
