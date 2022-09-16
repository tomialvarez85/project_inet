import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from "../PageHeader";

import "./AboutUs.css"

class axiAboutUs{
    axiHistory = '';
  
    constructor(axiHistory){
      this.axiHistory = axiHistory;
    }
  }
  

function AboutUs() {

    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        axios.get('https://inet-museum.herokuapp.com/about/')
            .then(res => {
            const aboutUsMapped = res.data.map(x => {
                let about = new axiAboutUs(x.history);
                console.log(about)
                return about;
            });

            setAboutUs(aboutUsMapped);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return(

        <Container className="page-container" fluid>

            <PageHeader 
                title="Sobre Nosotros"
            />

            <Row>
                <Col lg={8} md={12}>

                    <h2 className="about-section">Historia</h2>
                    {
                        aboutUs.map( (e) => (
                            <p className="about-section">{e.axiHistory}</p>
                        ))
                    }

                </Col>

                <Col>

                    <h2 className="about-section">Ubicación</h2>
                    <iframe title="myMap" className="about-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5281221595255!2d-64.1871580852579!3d-31.427124703915254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28e5b9d7fe5%3A0x284de6f3d7b8a60!2sMuseo%20Superior%20de%20Bellas%20Artes%20%7C%20Palacio%20Ferreyra!5e0!3m2!1ses!2sar!4v1663281067264!5m2!1ses!2sar" loading="lazy"></iframe>

                </Col>
            </Row>

        </Container>

    );
}

export default AboutUs;