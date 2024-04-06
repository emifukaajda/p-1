import { Nav, Col, Row, Container } from "react-bootstrap";

function Artikel () {
    return (
    <>
       <div className="nav-bar">
            <Container>
                <Row xs={2} md={2} lg={2}>
                    <Col>
                     <h1>Tokonomics</h1>
                    </Col>
                    <Col lg={1}>
                     <h1>Tokonomics</h1>
                    </Col>
                </Row>
            </Container>

       </div>

        <div className="artikel-group">
            <div className="bungkus-grup">
            <Container>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                      <h1>
                      List Artikel
                        </h1>

                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    </>
    )
};

export default Artikel;