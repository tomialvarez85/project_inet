import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from '../../components/PageHeader';
import ExhibitionCard from './ExhibitionCard';

import './Exhibitions.css';

class axiExhibitions{
  id = 0;
  axiTitle = '';
  axiImage = '';
  axiDescription = '';

  constructor(id, axiTitle, axiImage, axiDescription) {
    this.id = id;
    this.axiTitle = axiTitle;
    this.axiImage = axiImage;
    this.axiDescription = axiDescription;
  }

}

function Exhibitions() {

  const [exhib, setExhib] = useState([]);

  useEffect(() => {
    axios.get('https://inet-museum.herokuapp.com/api/v1/exhibitions/')
    .then(res => {
      console.log(res.data)
      const exhibMapped = res.data.map(x => {
        let exhib = new axiExhibitions(x.id, x.title, x.image, x.description);
        console.log(exhib.axiTitle)
        console.log(exhib.axiImage)
        console.log(exhib.axiDescription);
        return exhib;
      });

      setExhib(exhibMapped);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    
    <Container className='page-container' fluid>
      <PageHeader
        title="Exhibiciones"
      />

      <Row>

        {
          exhib.map(e => (
              <ExhibitionCard 
                key={e.id}
                exhibName={e.axiTitle}
                exhibImage={e.axiImage}
                exhibDescription={e.axiDescription}
              />
          ))
        }

      </Row>

    </Container>

  )
}

export default Exhibitions;