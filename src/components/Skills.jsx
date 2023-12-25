import React from 'react';
import { content } from '../Content';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { skills } = content;
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`min-h-fit bg-bg_light_primary ${inView ? 'fade-in' : 'invisible'}`}
      id="skills"
    >
      <div className="md:container px-5 py-14">
        <h2 className="title">{skills.title}</h2>
        <h4 className="subtitle">{skills.subtitle}</h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className={`bg-white sm:cursor-default relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 ${
                inView ? 'fade-in' : 'invisible'
              }`}
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
