import { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
  // Replace the index below with the index of the project you want to replace with the Spline project
  const splineProjectIndex = 1;

  projectsWithSpline[splineProjectIndex] = {
    title: "Spline Mini Keyboard", // Modify as needed
    image: "path/to/your/image.jpg", // Add a small image for the project
    splineScene: "https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode",
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
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
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {projectsWithSpline.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
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
              padding: "40px", // Increased padding
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{projectsWithSpline[selectedProject].title}</h2>
            <p>{/* Add content specific to the selected project */}</p>
            {projectsWithSpline[selectedProject].splineScene && (
              <div>
                <Spline scene="https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode" className="absolute top-0 left-0 w-full h-full" />
              </div>
            )}
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
