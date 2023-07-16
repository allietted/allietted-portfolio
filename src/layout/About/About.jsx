import {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

export default function About(){
  const[imageIndex, setImageIndex] =useState(0);

  const imageArray =[
    'prefile-1.jpg',
    'ilan-cartoon.jpg'
  ];

  if (imageIndex >= imageArray.length)
  setImageIndex(0);

  return (
    <div className='About-container'>
        <Container id='about' className='p-5'>
            <Row>
                <Col>
                 <h2 className='text-center'>I'm one of one <span>U-N-I-Q-U-E</span></h2>
                </Col>
            </Row>
        </Container>
    </div>
  )

}