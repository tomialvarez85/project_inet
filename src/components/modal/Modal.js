import React from "react";

import "./Modal.css"

function Modal({ children, isOpen, closeModal }) {

    const handleClick = e => e.stopPropagation();

    return(

        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-content" onClick={handleClick}>
                <button className="modal-close" onClick={closeModal}>x</button>
                {children}
            </div>
        </div>

    );
}

export default Modal;