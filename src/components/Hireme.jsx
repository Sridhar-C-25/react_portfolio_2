import React, { useState } from "react";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  // State to manage modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
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
            data-aos="fade-left"
            className="border-2 border-dark_primary p-6 shadow-sm rounded-xl md:w-[40rem] sm:w-full"
          >
            <p className="leading-7 text-center">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={openModal}>
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for PDF download */}
      {modalIsOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal} // Close the modal when clicking anywhere outside the content
        >
          <div className="bg-white p-8 rounded-xl">
            <h2 className="text-center">{Hireme.title}</h2>
            <p className="text-center">{Hireme.modalDescription}</p>
            {/* Display the PDF using iframe */}
            <iframe
              src="/src/assets/images/Hireme/resume.pdf" // Replace with the actual path
              title="Resume"
              width="800" // Increase the width for better readability
              height="600" // Increase the height for better readability
              style={{ border: "none" }} // Remove iframe border for cleaner look
            />
            <button className="btn bg-dark_primary text-white" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hireme;
