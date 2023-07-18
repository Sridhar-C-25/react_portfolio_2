import React from 'react';
import { content } from '../Content';
import WoodworkingLogo from './assets/images/Services/woodworking-logo.svg';
import AIEvolutionLogo from './assets/images/Services/ai-evolution-logo.svg';
import ExerciseLogo from './assets/images/Services/exercise-logo.svg';

const Services = () => {
  const { services } = content;

  function getLogo(logoName) {
    switch (logoName) {
      case 'WoodworkingLogo':
        return WoodworkingLogo;
      case 'AIEvolutionLogo':
        return AIEvolutionLogo;
      case 'ExerciseLogo':
        return ExerciseLogo;
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
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
            >
              <object data={getLogo(content.logo)} type="image/svg+xml" className="mx-auto">
                {/* Fallback content in case the SVG doesn't load */}
                <img src={getLogo(content.logo)} alt="..." className="mx-auto" />
              </object>
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
