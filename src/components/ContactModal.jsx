import React from "react";
import "./ContactModal.css"; // Import the CSS file
import ContactMe from "./ContactMe";

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content ">
        <button className="modal-close-button" onClick={onClose}>
          <i class="fa-solid text-black border p-1 fa-x"></i>
        </button>
        <ContactMe onClose={onClose}/>
      </div>
    </div>
  );
};

export default ContactModal;
