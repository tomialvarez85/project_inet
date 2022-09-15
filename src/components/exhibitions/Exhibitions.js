import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from '../../components/PageHeader';
import ExhibitionCard from './ExhibitionCard';

import './Exhibitions.css';

function Exhibitions() {

  return (
    
    <Container className='page-container' fluid>
      <PageHeader
        title="Exhibiciones"
      />

      <Row>

        <ExhibitionCard 
          exhibName="sisi"
          exhibDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <ExhibitionCard 
          exhibName="sas"
        />

        <ExhibitionCard 
          exhibName="sas"
        />

        <ExhibitionCard 
          exhibName="sas"
        />

        <ExhibitionCard 
          exhibName="sas"
        />

        <ExhibitionCard 
          exhibName="sas"
        />

      </Row>

    </Container>

  )
}

export default Exhibitions;