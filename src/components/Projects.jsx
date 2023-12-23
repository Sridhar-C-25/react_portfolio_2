/*
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [Spline, setSpline] = useState(null);

  useEffect(() => {
    // Dynamically import the Spline component during the build process
    import('@splinetool/react-spline').then((module) => setSpline(() => module.default));
  }, []);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsCount = 3; // Change this to the number of slides you want

  return (
    <section className="bg-bg_light_primary" id="projects">
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
                  src="src/assets/images/projects/lmao.png"
                  alt="..."
                  className="w-full h-[200px] object-cover mb-4"
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Mini Keyboard</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => openModal(i)}
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

      {selectedProject !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              width: '80%',
              height: '80%',
              padding: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Mini Keyboard</h2>
            <p>
              This is a keyboard model made in the Spline 3D model workshop that is integrated fully
              into this react website.
            </p>
            <div style={{ width: '100%', height: '100%' }}>
              {Spline && (
                <Spline
                  scene="https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode"
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="absolute bottom-0 right-0 p-4">
              <p>
                This is a keyboard model made in the Spline 3D model workshop that is integrated
                fully into this react website.
              </p>
            </div>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>X</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
*/

// src/components/Projects.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

// Use a relative import for Spline
import Spline from './path/to/your/src/@splinetool/react-spline';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsCount = 3; // Change this to the number of slides you want

  return (
    <section className="bg-bg_light_primary" id="projects">
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
                  src="src/assets/images/projects/lmao.png"
                  alt="..."
                  className="w-full h-[200px] object-cover mb-4"
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Mini Keyboard</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => openModal(i)}
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

      {selectedProject !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              width: '80%',
              height: '80%',
              padding: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Mini Keyboard</h2>
            <p>
              This is a keyboard model made in the Spline 3D model workshop that is integrated fully
              into this react website.
            </p>
            <div style={{ width: '100%', height: '100%' }}>
              <Spline
                scene="https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 p-4">
              <p>
                This is a keyboard model made in the Spline 3D model workshop that is integrated
                fully into this react website.
              </p>
            </div>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>X</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
