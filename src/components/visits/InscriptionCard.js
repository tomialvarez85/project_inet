import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./InscriptionCard.css"

function InscriptionCard(props) {
    return(
        <div className="inscription-content">

            <div className="inscription-header">
                <FontAwesomeIcon className="inscription-check" icon={faCheck} />
                <h2>Reserva de entrada exitosa</h2>
                <h3>DNI:{props.dni}</h3>
            </div>

            <h2>{props.visitName}</h2>
            <hr className="bold-hr"></hr>

            <div className="visit-guide">
                <div className="guide-photo">{props.visitPhoto}</div>
                <p className="guide-name">{props.visitGuide}</p>
            </div>

            <p className="visit-item">{props.visitLanguage}</p>
            <p className="visit-item">{props.visitDate}</p>
            <p className="visit-item">{props.visitPlaces}</p>

            <button className="button inscription-btn">Aceptar</button>
        </div>
    );
}

export default InscriptionCard;