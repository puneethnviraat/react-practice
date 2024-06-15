import React from 'react';

const Modal = ({ isOpen }) => {
  return (
    <div className="modal-display">
      <div className="model-content">
        <div className="modal-header">
          <h2>This is modal header</h2>
          <button
            onClick={() => {
              isOpen();
            }}
          >
            <span className="modal-close-icon">&times;</span>
          </button>
        </div>
        <div className="modal-body">This is body</div>
        <div className="new-modal-footer">This is footer</div>
      </div>
    </div>
  );
};

export default Modal;
