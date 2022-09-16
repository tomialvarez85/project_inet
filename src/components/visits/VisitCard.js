import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Modal from "../modal/Modal";
import { useModal } from "../modal/useModal";
import InscriptionCard from "./InscriptionCard"

import "./VisitCard.css"

function VisitCard(props) {

    const [isOpenModal, openModal, closeModal] = useModal(false);

    return(
        <Container className="visit-card" fluid>
            <Row className="unpadding">
                <Col lg={5} md={12} sm={12}>
                    <div className="visit-img-container">
                        <img className="visit-img" alt="" src={props.visitImage}></img>
                    </div>
                </Col>

                <Col>
                    <div className="visit-description">
                        <h2>{props.visitName}</h2>
                        <hr className="bold-hr"></hr>

                        <div className="visit-guide">
                            <div className="guide-photo">{props.visitPhoto}</div>
                            <p className="guide-name">{props.visitGuide} como encargado</p>
                        </div>

                        <p className="visit-item">Idiomas de la Visita: {props.visitLanguage}</p>
                        <p className="visit-item">Fecha y Hora: {props.visitDate}</p>
                        <p className="visit-item">Espacios disponibles: {props.visitSlots}</p>

                        <div className="visit-btns">
                            <button className="button btn-ins" onClick={openModal}>Inscribirme</button>
                        </div>
                    </div>

                    <Modal isOpen={isOpenModal} closeModal={closeModal}>
                        <InscriptionCard 
                            visitName={props.visitName}
                            visitGuide={props.visitGuide}
                            visitLanguage={props.visitLanguage}
                            visitDate={props.visitDate}
                            visitPlaces={props.visitPlaces}
                        />
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default VisitCard;

/*
<InscriptionCard 
                            visitName={props.visitName}
                            visitGuide={props.visitGuide}
                            visitLanguage={props.visitLanguage}
                            visitDate={props.visitDate}
                            visitPlaces={props.visitPlaces}
                        />
*/