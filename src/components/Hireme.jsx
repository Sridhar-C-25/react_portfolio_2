import React, { useState } from "react";
import Modal from "react-modal";
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
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
            p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={openModal}>
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for PDF download */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>{Hireme.title}</h2>
          <p>{Hireme.modalDescription}</p>
          {/* Add the download button for the PDF */}
          <a href="/src/assets/images/Hireme/resume.pdf" download>
            Download PDF
          </a>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </section>
  );
};

export default Hireme;
