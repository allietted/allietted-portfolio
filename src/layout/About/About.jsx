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

            <Row className='justify-contect-center'>
              <Col xs={8} md={6} lg={4} xl={3}>
                <Image src={`process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
                alt=''
                className='button-effect border-style mb-4'
                fluid
                style={{'cursor':'zoom-in'}}
                onClick={()=> setImageIndex(imageIndex+1)}/>
              </Col>

              <Col lg={8} className='text-white'>
                <p>Write a bio</p>
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <a href='https://www.linkedin.com/in/allietted/'
                target='_blank'
                rel='noreferrer'
                className='button-effect'>
                </a>
              </Col>
            </Row>
        </Container>
    </div>
  );

}