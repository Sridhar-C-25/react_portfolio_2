/*


import React, { useState, useEffect } from "react";
import { content } from "../Content";

const ReactSpline = import("@splinetool/react-spline");



const Hero = () => {
  const { hero } = content;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const isScrolled = window.scrollY > threshold;
      setShowContent(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .flex-col-reverse-mobile {
              flex-direction: column-reverse !important;
            }

            .text-center-mobile {
              text-align: center !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <Spline scene="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode" className="absolute top-0 left-0 w-full h-full" />
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]">{hero.title}</h2>
        </div>

        <div className="pb-16 px-6 pt-12 z-10 text-center-mobile" data-aos="fade-down">
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80
                  ${i === 1 && " flex-row-reverse text-right flex-col-reverse-mobile"}
                `}
              >
                <p><h3>{content.count}</h3> {content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

*/



import React, { useState, useEffect, useRef } from "react";
import { content } from "../Content";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Hero = () => {
  const { hero } = content;
  const [showContent, setShowContent] = useState(false);
  const splineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const isScrolled = window.scrollY > threshold;
      setShowContent(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .flex-col-reverse-mobile {
              flex-direction: column-reverse !important;
            }

            .text-center-mobile {
              text-align: center !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <Spline
          scene="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full"
          ref={splineRef}
        />
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]">{hero.title}</h2>
        </div>

        <div className="pb-16 px-6 pt-12 z-10 text-center-mobile" data-aos="fade-down">
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80
                  ${i === 1 && " flex-row-reverse text-right flex-col-reverse-mobile"}
                `}
              >
                <p>
                  <h3>{content.count}</h3> {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
