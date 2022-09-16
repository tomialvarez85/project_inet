import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import PageHeader from "../PageHeader";
import VisitCard from './VisitCard';

class axiVisits{
  id = 0;
  axiSlots = 0;
  axiTopic = '';
  axiLanguages = '';
  axiDate = '';
  axiGuideFn = '';
  axiGuideLn = '';
  axiVisitImage = '';

  constructor(id, axiSlots, axiTopic, axiDate, axiGuideFn, axiGuideLn, axiVisitImage){
    this.id = id;
    this.axiSlots = axiSlots;
    this.axiTopic = axiTopic;
    this.axiDate = axiDate;
    this.axiGuideFn = axiGuideFn;
    this.axiGuideLn = axiGuideLn;
    this.axiVisitImage = axiVisitImage
  }
}

function VisitsMain() {

  const [visits, setVisits] = useState([]);

  useEffect(() => {
    axios.get('https://inet-museum.herokuapp.com/api/v1/guidedvisits/')
    .then(res => {
      console.log(res.data)
      const visitsMapped = res.data.map(x => {
        let visit = new axiVisits(x.id, x.slots, x.topic, x.date_time, x.guide.first_name, x.guide.last_name, x.image);
        x.guide.employee_lenguage.forEach(lang => {
          visit.axiLanguages += lang.lenguage_name + ". ";
        });
        return visit;
      });

      setVisits(visitsMapped);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (

    <Container className='page-container' fluid>

      <PageHeader 
        title="Visitas Guiadas"
      />

      {
        visits.map(e => (
            <VisitCard
              key={e.id}
              visitName={e.axiTopic}
              visitGuide={e.axiGuideFn +" "+ e.axiGuideLn}
              visitLanguage={e.axiLanguages}
              visitDate={e.axiDate}
              visitSlots={e.axiSlots}
              visitImage={e.axiVisitImage}
            />
        ))
      }
        

    </Container>

  );
}

export default VisitsMain;
