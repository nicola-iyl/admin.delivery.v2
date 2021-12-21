import React from "react";

const Modal = ({children, title, modal, onClose}) => {
  return (
    <div className="modal d-block">
      <div className={'modal-dialog '+ modal}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            { children }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

