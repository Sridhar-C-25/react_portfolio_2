
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills"
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Blog />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">MUSTAFA IPEKCI</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
