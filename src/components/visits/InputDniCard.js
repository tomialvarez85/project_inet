import React from "react";

import Modal from "../modal/Modal";
import { useModal } from "../modal/useModal";
import InscriptionCard from "./InscriptionCard";

import "./InputDniCard.css"

function InputDniCard() {

    const [isOpenModal, openModal, closeModal] = useModal(false);

    return(

        <div className="dni-content">
            <h2 className="dni-header">Ingrese su DNI</h2>
            <input className="dni-input" type="number"></input>

            <div className="dni-buttons-group">
                <button className="dni-button">1</button>
                <button className="dni-button">2</button>
                <button className="dni-button">3</button>
                <button className="dni-button">4</button>
                <button className="dni-button">5</button>
                <button className="dni-button">6</button>
                <button className="dni-button">7</button>
                <button className="dni-button">8</button>
                <button className="dni-button">9</button>
                <button className="dni-button btn-0">0</button>
            </div>

            <button className="button dni-accept" type="submit" onClick={openModal}>Aceptar</button>
        </div>

    );
}

export default InputDniCard;