import React, { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Spline from '@splinetool/react-spline'; // Make sure to import the Spline component

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const { Projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsWithSpline = [...Projects.project_content];
  const splineProjectIndex = 1;

  projectsWithSpline[splineProjectIndex] = {
    title: "Figma Project",
    image: "src/assets/images/projects/figma_project_image.jpg",
    figmaEmbed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcnMv34pGj142TW6cyj8TZe%2FWireframe%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DtcaCJIbgd0FgHqV6-1" allowfullscreen></iframe>',
    description: "Description for the Figma project.",
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
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Navigation]}
            className="rounded-3xl pb-16 max-w-[60vw] w-full drop-shadow-primary self-start relative"
          >
            {projectsWithSpline.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit relative"
              >
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
                {i === splineProjectIndex && (
                  <div dangerouslySetInnerHTML={{ __html: content.figmaEmbed }} />
                )}
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
            {selectedProject === splineProjectIndex && (
              <div dangerouslySetInnerHTML={{ __html: projectsWithSpline[selectedProject].figmaEmbed }} />
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
