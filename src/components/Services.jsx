import React from 'react';
import { content } from "/src/Content";
import WoodworkingLogo from "/src/assets/images/Services/woodworking-logo.svg";
import AIEvolutionLogo from "/src/assets/images/Services/ai-evolution-logo.svg";
import ExerciseLogo from "/src/assets/images/Services/exercise-logo.svg";

const Services = () => {
  const { services } = content;

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
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-none hover:!cursor-default"
            >
              {content.logo === "WoodworkingLogo" && <img src={WoodworkingLogo} alt="Woodworking" />}
              {content.logo === "AIEvolutionLogo" && <img src={AIEvolutionLogo} alt="AI Evolution" />}
              {content.logo === "ExerciseLogo" && <img src={ExerciseLogo} alt="Exercise" />}
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
