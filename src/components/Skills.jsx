import React, { useEffect, useRef, useState } from 'react';
import { content } from '../Content';

const Skills = () => {
  const { skills } = content;
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
    });

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={skillsSectionRef}
      className={`min-h-fit bg-bg_light_primary ${
        isVisible ? 'fade-in' : 'invisible'
      }`}
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
                isVisible ? 'fade-in' : 'invisible'
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
