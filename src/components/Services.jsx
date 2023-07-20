import React from 'react';
import { content } from "../content";

const Services = () => {
  const { services } = content;

  function getLogo(logoName) {
    switch (logoName) {
      case "WoodworkingLogo":
        return <img src={require("../assets/images/Services/woodworking-logo.svg").default} alt="Woodworking Logo" />;
      case "AIEvolutionLogo":
        return <img src={require("../assets/images/Services/ai-evolution-logo.svg").default} alt="AI Evolution Logo" />;
      case "ExerciseLogo":
        return <img src={require("../assets/images/Services/exercise-logo.svg").default} alt="Exercise Logo" />;
      default:
        return null;
    }
  }

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 pointer-events-none"
            >
              {getLogo(content.logo)}
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
