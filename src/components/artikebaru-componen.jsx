import {Row, Col, Container, Card, Image, CardImg, Button} from 'react-bootstrap'
import '../style/blog.css';
import im from '../img/2.png'
import ai from '../img-blog/ai.png'
import { CiRead } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";




function ComArt () {
return(
    <>
    <div className="update-artikel">
        <Container>
            <Row xs={1} md={2} lg={2}>
                <Col>       
                  <div className="blockquote-footer">
                 hai user 🖐️
                  <h1>Selamat datang di blog  <span>Ebry</span></h1>
                  <p>Febryan blog adalah blog personal yang di buat oleh Febryanus Tambing.
                    tujuan dari blog tersebut hanyalah sekedar share informasi about teknologi
                  </p>
                  </div>
                </Col>
                <Col>
                <div className="gambar-group">
                    <Image src={im} className="w-100 " rounded>
                    </Image>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="Area-card">
        <div className="wrapper">
        <Container fluid='md'>
            <Row xs={1} md={2} lg={5}>

                <Col>
                <Card >
                    <Card.Body>
                    <CardImg src={ai}></CardImg>
                        <Card.Title>Artifical Inteligen</Card.Title>
                        <Card.Text>Thisis About Ai</Card.Text>
                        <Button variant="dark"> 
                     <span><IoReaderOutline /> </span>

                            Baca Selengkap nya</Button>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <CardImg></CardImg>
                        <Card.Title>Artifical Inteligen</Card.Title>
                        <Card.Text>Thisis About Ai</Card.Text>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <CardImg></CardImg>
                        <Card.Title>Artifical Inteligen</Card.Title>
                        <Card.Text>Thisis About Ai</Card.Text>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <CardImg></CardImg>
                        <Card.Title>Artifical Inteligen</Card.Title>
                        <Card.Text>Thisis About Ai</Card.Text>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                        <CardImg></CardImg>
                        <Card.Title>Artifical Inteligen</Card.Title>
                        <Card.Text>Thisis About Ai</Card.Text>
                    </Card.Body>
                </Card>
                       
                </Col>

            </Row>
        </Container>
        </div>
    </div>
    </>
    
)
}
export default ComArt;