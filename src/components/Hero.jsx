
/*import { useEffect } from "react";
import { content } from "../Content";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div>
        <Spline scene="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode" />
      </div>
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
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

export default Hero;*/

import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@0.9.496/build/spline-viewer.js";
    script.async = true;
    script.onload = () => {
      const splineViewer = document.createElement("spline-viewer");
      splineViewer.setAttribute("url", "https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode");
      document.getElementById("hero-container").appendChild(splineViewer);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const splineViewer = document.querySelector("spline-viewer");
      if (splineViewer) {
        document.getElementById("hero-container").removeChild(splineViewer);
      }
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Spline container */}
      <div
        id="hero-container"
        className="min-h-screen absolute top-0 left-0 w-full h-full z-0 bg-gray-800"
      ></div>

      {/* Content container */}
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center pt-20">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
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
