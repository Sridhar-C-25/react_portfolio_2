import React, { useState, useEffect } from "react";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="bg-white flex items-center justify-center h-[70vh] relative" data-aos="fade-up">
      <div className={`container mx-auto px-5 pt-14 opacity-0 translate-y-10 ${showContent ? "opacity-100 translate-y-0" : ""}`} data-aos="fade-up">
        <h2 className="title text-center" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-center" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            className={`border-2 border-dark_primary p-6 shadow-sm rounded-xl md:w-[35rem] sm:w-full ${
              modalIsOpen ? "z-[1001] hidden" : ""
            }`}
          >
            <p className="leading-7 text-center" data-aos="fade-down">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={openModal} data-aos="fade-up">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-[1000]"
          onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-xl" data-aos="fade-up">
            <h2 className="text-center">{Hireme.title}</h2>
            <p className="text-center">{Hireme.modalDescription}</p>
            <iframe
              src="/src/assets/images/Hireme/resume.pdf"
              title="Resume"
              width="800"
              height="600"
              style={{ border: "none" }}
            />
            <button className="btn bg-dark_primary text-white mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hireme;
