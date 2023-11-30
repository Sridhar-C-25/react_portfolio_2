import { useEffect, useState } from "react";
import { content } from "../Content";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { hero } = content;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <Spline scene="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode" className="absolute top-0 left-0 w-full h-full" />

        {/* Your text content */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]">{hero.title}</h2>
        </div>

        <div className={`pb-16 px-6 pt-5 z-10 ${isSmallScreen ? 'text-center' : ''}`} data-aos="fade-down">
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                  ${i === 1 && " flex-row-reverse text-right"}
                  ${isSmallScreen && i === 1 && "flex-col-reverse"}
                `}
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
