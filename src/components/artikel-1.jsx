import { Nav, CardImg, Col, Row, Container } from "react-bootstrap";
import artikel from '../img-blog/security.png'
import '../style/artikel1.css'

function Artikel () {
    return (
    <>
     <div className="artikel-1-update-group">
        <Container>
            <Row xs={1} md={2} lg={2}>
               <Col xs={12} md={6}>
              <h1>Ai adalah</h1>
               </Col>
               <Col md={6} className="d-none d-md-block">
                <div className="float-md-end ">
                     <h1>List update artikel terbaru</h1>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                <div className="artikel-1-security">
                <h1> <CardImg className='w-100 w-md-25' src={artikel}></CardImg> apa itu cyber security</h1>
                </div>
                </div>
              </Col>
            </Row>
        </Container>
     </div>
    </>
    )
};

export default Artikel;