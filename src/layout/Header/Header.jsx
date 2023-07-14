import {useState, useContext} from 'react';
import {AppContext} from '../../App.js';
import { HashLink } from 'react-router-hash-link';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Pannellum } from "pannellum-react"
import bg360 from '../../data/bg360.json';

export default function Page() {
    const[easter360Id, setEaster360ID] = useState(0);

    const bgUri = './background/' + bg360[easter360Id].image;

    const handle360Id = () => {
        if (easter360Id === bg360.length -1) {
            setEaster360ID(0);
        } else {

            setEaster360ID(easter360Id + 1);

        }
     };
     
     return (
        <main>
            <div className='media-container'>
              <div className='media-wrapper'>
                <Pannellum
                width='100%'
                height='100%'
                image={require(`${bgUri}`)}
                yaw={180}
                hfov={110}
                autoLoad
                autoRotate={true}
                compass={false}
                showZoomCtrl={false}
                showFullscreenCtrl={false}
                mouseZoom={false}/>
              </div>

              <Container fluid id='home'>
                <Row className='gradient-box d-flex
                justify-content-center
                justify-content-lg-start
                align-items-center'>

                <Col xs={11} 
                md={{span:8, offset:0}}
                lg={{span:5, offset:5}}
                className='media-content-column'>
                 <div className='media-content'>
                    <h1 className='text-center text-lg-start'>
                        <span className='header-trio'>Alliette Dortelus</span>
                    </h1>
                    <p className='header-intro'>A little bio goes here</p>
                    <div className='text-center text-md-center text-lg-start'>
                        <Button
                         as={HashLink}
                         onClick={handle360Id}
                         size='lg'
                         variant='primary'
                         className="equal-size d-block d-lg-inline m-auto button-style button-effect">
                            See More
                         </Button>
                    </div>
                 </div>
                </Col>

                </Row>

              </Container>
            </div>
        </main>
     )
}