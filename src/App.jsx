// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Certifications from "./components/Certifications";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  const supportedLangs = ["en", "fr"];
  const path = window.location.pathname.split("/")[1];
  const [lang, setLang] = useState(supportedLangs.includes(path) ? path : "en");
  return (
    <div className="">
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Aboutme lang={lang} />
      <Skills lang={lang} />
      <Certifications lang={lang} />
      <Service lang={lang} />
      <Projects lang={lang} />
      {/* <Testimonials lang={lang} /> */}
      <Contact lang={lang} />
    </div>
  );
};

export default App;
