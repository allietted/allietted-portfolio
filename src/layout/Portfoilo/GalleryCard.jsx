import {Container, Row, Col, Card} from 'react-bootstrap';

export default function GalleryCard({portfolio:{id, title, content, website, cover}}) {

    return(
        <Col key={id} className='button-effect'>
            <Card>
                <figure className='figure-image'>
                    <a href={website} target='_blank' rel='noreferrer'><Card.Img
                    src={cover} alt={title} className='rounded-0 img-fluid'/></a>
                </figure>
            </Card>
        </Col>
    )
}