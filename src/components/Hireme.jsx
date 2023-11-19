import React, { useState } from "react";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="bg-bg_light_primary flex items-center justify-center h-screen">
      <div className="container mx-auto px-5 pt-14">
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
            className={`border-2 border-dark_primary p-6 shadow-sm rounded-xl md:w-[40rem] sm:w-full ${
              modalIsOpen ? "z-[1001]" : ""
            }`}
          >
            <p className="leading-7 text-center">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={openModal}>
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
          <div className="bg-white p-8 rounded-xl">
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
