import React from 'react'

import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';

import Mapa1 from "../../images/mapa1.png"
import Mapa2 from "../../images/mapa2.png"
import './Maps.css';

function Maps() {
  return (

    <Container className='page-container' fluid>
      <PageHeader 
        title="Mapas"
      />

      <div className='maps'>
        <h2>Recorrido del Museo</h2>
        <img className='map-image' src={Mapa1} alt="mapa1"></img>
        <img className='map-image' src={Mapa2} alt="mapa1"></img>
      </div>

    </Container>

  )
}

export default Maps;