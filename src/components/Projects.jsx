import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import lmaoImage from './src/assets/images/lmao.png';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Track component visibility
  const sectionRef = useRef(null);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const projectsCount = 3;

  return (
    <section
      ref={sectionRef}
      className={`bg-bg_light_primary`}
      id="projects"
      data-aos={isVisible ? 'fade-up' : ''}
    >
      <div className="md:container px-5 pt-14 h-full flex flex-col justify-center items-center relative">
        <div>
          <h2 className="title" data-aos="fade-down">
            Handmade
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            Projects
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Navigation]}
            className="rounded-3xl pb-16 max-w-[60vw] w-full drop-shadow-primary self-start relative"
          >
            {[...Array(projectsCount)].map((_, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit relative"
              >
                <img
                  src={lmaoImage}
                  alt="..."
                  className="w-full h-[200px] object-cover mb-4"
                  data-aos="fade-up"
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins" data-aos="fade-up">
                    Mini Keyboard
                  </h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => openModal(i)}
                    data-aos="fade-up"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 text-[#3c3c3c] font-bold"></div>
          <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 text-[#3c3c3c] font-bold"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
