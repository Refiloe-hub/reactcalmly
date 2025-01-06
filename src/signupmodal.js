import React, { useState } from 'react';
import './Modal.css'; // You can style it as needed

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h3>Sign Up</h3>
        <button className="signup-option">Sign up with Email</button>
        <button className="signup-option">Sign up with Google</button>
        <button className="signup-option">Sign up with Facebook</button>
      </div>
    </div>
  );
};

export default Modal;