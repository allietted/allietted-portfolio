import {Container, Row, Col} from  'react-bootstrap';


export default function Trifecta (){

    return (
        <section>
         <div id="trifecta" className='three-things'>
            <Container className='All-card my-4'>
                <Row>
                    <Col>
                     <h2 className='card-title text-center'>Trifecta</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div class='flip-card mt=4'>
                        <div class='flip-card-inner'>
                        <div class="flip-card-front">
                            <img className = 'gf-img' src="/images/handshake.svg" alt="handshake" />

                                <p class="title">Synergistic</p>
                                <p>Hover Over to Learn More!!!</p>
                        </div>
                        <div class='flip-card-back'>
                            <p>I excel in collaborative environments and consistently demonstrate strong teamwork skills and effective communication when working on cross-functional projects. I prioritize open and transparent communication. I actively engage with team members, stakeholders, and clients to ensure a clear understanding of project goals, requirements, and expectations. </p>
                         </div>

                        </div>
                    </div>

                    </Col>
                    <Col>
                     <div class="flip-card mt-4">
                        <div class='flip-card-inner'>
                            <div class='flip-card-front'>
                             <img className='gf-img'src="/images/nerd-face.svg" alt="nerd face" />
                             <p class='title'>Troubleshooter</p>
                             <p>Hover Over to Learn More!!!</p>
                            </div>
                            <div class='flip-card-back'>
                               <p> I have honed my ability to analyze complex issues within software development and efficiently break them down into manageable components. I am adept at identifying the root causes of problems and approaching them from different angles to develop comprehensive solutions. I constantly seek out new ideas, technologies, and methodologies within the software engineering field to stay ahead of the curve.</p>
                            </div>
                        </div>
                     </div>
                    </Col>
                    <Col>
                     <div class="flip-card mt-4">
                        <div class='flip-card-inner'>
                            <div class='flip-card-front'>
                             <img className='gf-img'src="/images/pantPallete.svg" alt="Paint Pallete" />
                             <p class='title'>Detail-Oriented</p>
                             <p>Hover Over to Learn More!!!</p>
                            </div>
                            <div class='flip-card-back'>
                               <p> My commitment to meticulousness goes beyond mere code correctness. I understand that small oversights can accumulate and lead to significant issues down the line. By thoroughly reviewing each aspect of the software development process, I ensure a high level of quality and minimize the likelihood of errors.From identifying the tiniest syntax errors to evaluating the broader system architecture, I consistently strive for precision in my work.</p>
                            </div>
                        </div>
                     </div>
                    </Col>
                </Row>
            </Container>
         </div>
        </section>
    )
}