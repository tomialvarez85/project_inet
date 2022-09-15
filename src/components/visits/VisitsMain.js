import React from 'react';

import Container from 'react-bootstrap/Container';

import PageHeader from "../PageHeader";
import VisitCard from './VisitCard';

function VisitsMain() {
  return (

    <Container className='page-container' fluid>

      <PageHeader 
        title="Visitas Guiadas"
      />

      <VisitCard />
      <VisitCard />

    </Container>

  );
}

export default VisitsMain;