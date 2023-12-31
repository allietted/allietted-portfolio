import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {

    return(

        <Container fluid id="portfolio"className='all-carousel p-4' >
        <Row>
          <Col ><h2 className="text-center">Projects</h2></Col>
        </Row>
   <Carousel touch fade controls={false}>
     <Carousel.Item>
     <a href="">
       <Image fluid
         className="mx-auto d-block"
         src=""
         alt="First slide"
         style={{ width: '70%' }} 
       />
       </a>
       <Carousel.Caption> 
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <Image fluid
         className="mx-auto d-block"
         src=""
         alt="Second slide"
         style={{ width: '70%' }} 
       />

       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src=""
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   </Container>
    
    
    );

}