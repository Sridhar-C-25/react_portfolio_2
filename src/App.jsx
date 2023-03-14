// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import { createContext, useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Certifications from "./components/Certifications";

const context = createContext();
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
  const changeLangHandler = (country) => {
    const url = new URL(window.location);
    setLang(() => country);
    url.pathname = url.pathname.replace(lang, country);
    window.history.pushState({}, "", url);
  };
  return (
    <context.Provider value={lang}>
      <Navbar changeLangHandler={changeLangHandler} />
      <Hero />
      <Aboutme />
      <Skills />
      <Certifications />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </context.Provider>
  );
};
export { context };
export default App;
