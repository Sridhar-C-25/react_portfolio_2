import React, { useEffect, useRef } from 'react';
import { content } from '../Content';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const { skills } = content;
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (skillsRef.current) {
      AOS.refresh();
    }
  }, [skills]);

  return (
    <section
      ref={skillsRef}
      className="min-h-fit bg-bg_light_primary"
      id="skills"
      data-aos="fade-up"
    >
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-default relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
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
