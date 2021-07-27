import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

const PokedexModal = (props) => {
    const [modal, setModal] = useState([]);
    const parseExceptionModal = useRef();
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (show) {
        const modal = new Modal(parseExceptionModal.current, {keyboard: false})
        setModal(modal)
        modal.show()
      }
    },[show])

    const modalPopupButton = () => {
      return (
        <button variant="outline-primary" onClick={() => setShow(true)}>
        Pokemon Info
      </button>
      )
    }

    const modalPopup = () => {
      return (
        <div className="py-2">
            <div className="modal" tabIndex="-1" ref={parseExceptionModal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{props.pokemon.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }

    return (
      show ? modalPopup() : modalPopupButton()
    )
}

export default PokedexModal;