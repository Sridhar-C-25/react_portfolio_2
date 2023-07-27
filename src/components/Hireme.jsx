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
      {/* ... existing content ... */}
      <button className="btn bg-dark_primary text-white" onClick={openModal}>
        {Hireme.btnText}
      </button>

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
