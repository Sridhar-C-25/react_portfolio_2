import { useState, useEffect } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Spline from '@splinetool/react-spline'; // Make sure to import the Spline component

// Import Swiper styles
import 'swiper/css';

// Install Swiper modules
SwiperCore.use([Navigation]);

const Projects = () => {
  const { Projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsWithSpline = [...Projects.project_content];
  const splineProjectIndex = 1;

  projectsWithSpline[splineProjectIndex] = {
    title: "Mini Keyboard",
    image: "src/assets/images/projects/lmao.png",
    splineScene: "https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode",
    description: "This is a keyboard model made in the Spline 3D model workshop that is integrated fully into this react website.",
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 h-full flex flex-col justify-center items-center relative">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            className="swiper-container"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            data-aos="fade-left"
            spaceBetween={20}
          >
            {projectsWithSpline.map((content, i) => (
              <SwiperSlide
                key={i}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit relative">
                  <img src={content.image} alt="..." className="w-full h-[200px] object-cover mb-4" />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button
                      className="font-bold text-gray self-end"
                      onClick={() => openModal(i)}
                    >
                      READ MORE
                    </button>
                  </div>
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
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              width: "80%",
              height: "80%",
              padding: "20px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{projectsWithSpline[selectedProject].title}</h2>
            <p>{/* Add content specific to the selected project */}</p>
            {projectsWithSpline[selectedProject].splineScene && (
              <div style={{ width: "100%", height: "100%" }}>
                <Spline scene={projectsWithSpline[selectedProject].splineScene} className="w-full h-full" />
              </div>
            )}
            <div className="absolute bottom-0 right-0 p-4">
              <p>{projectsWithSpline[selectedProject].description}</p>
            </div>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>X</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
