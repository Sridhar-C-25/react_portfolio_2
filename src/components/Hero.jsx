import React, { useState, useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const isScrolled = window.scrollY > threshold;
      // Always set showContent to true if scrolled down
      setShowContent((prev) => (isScrolled ? true : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          className={`absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 z-10 ${
            showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } bg-primaryLinear`}
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]" style={{ fontSize: '3rem' }}>{hero.title}</h2>
        </div>

        <div className={`pb-16 px-6 pt-12 z-10 text-center-mobile ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                className={`flex items-center w-80
                  ${i === 1 && " flex-row-reverse text-right flex-col-reverse-mobile"}
                `}
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
