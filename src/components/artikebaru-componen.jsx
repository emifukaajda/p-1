import {Row, Col, Container, Nav, Card, Image, CardImg, Button} from 'react-bootstrap'
import '../style/blog.css';
import im from '../img-blog/header.png'
import ai from '../img-blog/ai.png'
import { CiRead } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5"
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import mygambar from '../img-blog/2.png'
import sec from '../img-blog/security.png'
import blockchain from '../img-blog/bcain.png'
import { BiLogoSpotify } from "react-icons/bi";






function ComArt () {
return(

    <>
    {/* Area Nav */}
    
    <div className="navbar-group bg-gradient ">
        <Container fluid='md'>
            <Row xs={0.1} md={2} lg={2}>
                <Col>
                 <h1 className='font-monospace form-control-md'>Febryan.id</h1>
         
                </Col>
                <Col>
                <div className="left">
                <BiLogoSpotify />

                </div>
              </Col>
            </Row>
        </Container>
    </div>
    {/* End Nav */}
    <div className="update-artikel">
        <Container>
            <Row xs={1} md={2} lg={2} className='form-control-sm'>
                <Col>       
                  <div className="blockquote-footer">
                 hai user 🖐️
                  <h1 className='font-monospace'>Selamat datang di blog  <span>Ebry</span></h1>
                  <p className='font-monospace'>Febryan blog adalah blog personal yang di buat oleh Febryanus Tambing.
                    tujuan dari blog tersebut saya pribadi sharinng about teknologi blockchain, kecerdasan buatan, dan keamanan siber. 
                  </p>
                  <br />
                  <p className='font-monospace'>
                  Di sini, kami menawarkan artikel-artikel informatif yang membahas perkembangan terkini dan tren terbaru dalam bidang teknologi yang sedang mengubah dunia.
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
            <Row xs={2} md={2} lg={5} className='g-4'>

            <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={ai}></CardImg>
                    <Card.Title className='fabout-title'>Artifical Inteligen</Card.Title>
                        <Card.Text className='deskripsi'>Membahas tentang Artifical Inteligen</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={blockchain}></CardImg>
                        <Card.Title className='about-title'>Teknologi Blockchain</Card.Title>
                        <Card.Text className='deskripsi'>membahas tentang Teknologi Blokchain</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={sec}></CardImg>
                    <Card.Title className='about-title'>Cyber Security</Card.Title>
                        <Card.Text className='deskripsi'>Membahas tentang dunia cyber security</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={ai}></CardImg>
                    <Card.Title className='about-title'>Artifical Inteligen</Card.Title>
                        <Card.Text className='deskripsi'>Thisis About Ai</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                            
                    </Card.Body>
                </Card>
                <br />
                </Col>
                <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={ai}></CardImg>
                    <Card.Title className='about-title'>Artifical Inteligen</Card.Title>
                        <Card.Text className='deskripsi'>Thisis About Ai</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                    </Card.Body>
                </Card>
                
                <br />
                </Col>
                <Col xs='6'>    
                <Card >
                    <Card.Body>
                    <CardImg src={ai}></CardImg>
                    <Card.Title className='about-title'>Artifical Inteligen</Card.Title>
                        <Card.Text className='deskripsi'>Disini saya bahas Artifical Inteligen</Card.Text>
                        <div className="btn-all-card">
                        <Button variant="dark" className='font-monospace'> 
                     <span><IoReaderOutline /> </span>

                            Baca</Button>
                            </div>
                    </Card.Body>
                </Card>
                
                <br />
                </Col>

            </Row>
        </Container>
        </div>
    </div>

    {/* Artikel One */}

    <div className="artikelpertama-group">
        <div className="wrapp-artikel">
        <Container className='font-monospace'>
            <Row xs={1} md={2} lg={2}>
                <Col>
              <h1>Apa itu Ai <span> <FaRobot /></span>?</h1>
              <CardImg src={mygambar} className='gambarid '>

              </CardImg>

                </Col>
                <Col>
              <div className="artikel-bungkus font-monospace" >
                <p>
                
                AI adalah singkatan dari kecerdasan buatan (artificial intelligence) yang merujuk pada kemampuan mesin untuk meniru kecerdasan manusia. Ini mencakup berbagai teknik yang memungkinkan mesin untuk menyerap informasi, belajar dari informasi tersebut, dan menggunakan pengetahuan yang diperoleh untuk membuat keputusan atau tindakan yang cerdas. 
                
                
                <br />
                <br />
                <h1>Jadi Ai ADALAH</h1>
                <br />
                <p>
                AI digunakan dalam berbagai aplikasi, seperti pengenalan suara, analisis data, permainan komputer, kendaraan otonom, dan banyak lagi. Dengan perkembangan teknologi, AI semakin banyak digunakan dalam kehidupan sehari-hari dan industri.

                </p>
                <div className="btn-artikel1">
                <Button variant='dark' className='mt-5'>
                <span><SiReaddotcv /></span> Baca selengkapnya</Button>
              </div>
                </p>
                </div>
                </Col>
 
            </Row>
            </Container>
          </div>
          </div>
        

    {/* End Artikel */}

       {/* Footer */}
    
      <br />
      
       <div className="footer-area-footer">
                <Container fluid='md'>
                <Row>
                  <Col>
                  <footer className='blockquote-footer'>@Febryan</footer>
                  </Col>
    
                   
                </Row>
                </Container>
              </div>

            {/* End Footer */}


            <div className="sosmed-area">
            <Container>
              <Row xs={1} lg={1}>
                <Col>
                <Nav className="justify-content-start" activeKey="/home">
               <Nav.Item>
                    <Nav.Link className='text' href="/home">
                    < p className='font-monospace' >
                      
                      Home</p>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                 <Nav.Link eventKey="link-1">
                 <p className='font-monospace'>Artikel</p>
                 </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
          <p className='font-monospace'>Contact</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" >
          <p className='font-monospace'>Phase</p>
          </Nav.Link>
        </Nav.Item>

      </Nav>
      <p className="text-center mt-4 mb-4 font-monospace">Follow Sosmed</p>
      <div className="font-color">
      <Nav className="justify-content-end"  activeKey="/home">
      <Nav.Item>
          <Nav.Link href="/home"><p>
            
          <FcGoogle />


            </p></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/home"><p>
            
          <FaGithub />

            </p></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" >
            <p className=''>
          < FaFacebookF />
          </p>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="-2" className='' >
          <p>
          <RiInstagramFill  />
          </p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
                </Col>
              </Row>
            </Container>
          </div>

    </>
    
)

}
export default ComArt;