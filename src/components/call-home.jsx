import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Image, Row, Col, Navbar, Container, Nav, Form, Button, NavDropdown, CardText, CardImg, CardFooter    } from 'react-bootstrap';
import '../style/p-home.css';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillFilePpt } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CgUserlane } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import gambar from'../img/1.jpg';
import React, { useState, useEffect } from 'react';
import XHm from '../pages/home';


const TypingAnimation = () => {
  const [text, setText] = useState('');
  const words = ['Febryanus', 'Tambing'];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        if (letterIndex < words[wordIndex].length) {
          setText(prevText => prevText + words[wordIndex][letterIndex]);
          setLetterIndex(prevIndex => prevIndex + 1);
        } else {
          if (wordIndex < words.length - 1) {
            setText(prevText => prevText + ' '); // Add space after word
          }
          setWordIndex(prevIndex => prevIndex + 1);
          setLetterIndex(0);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [wordIndex, letterIndex]);

    return (
        <>
        
        {/* area navbar */}
        <div className="navbar-home">
        <Navbar expand="lg" className="bg-gradient text-info ">
      <Container fluid>
        <Navbar.Brand href="#" className='font-monospace text-white'>Febryan.id <RiVerifiedBadgeFill />
</Navbar.Brand>
        <Navbar.Toggle style={{color: 'white'}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Project</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Whitepaper</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Kelas 1U</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Kelas 2Q</Nav.Link>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <span className='f-sz'>
          <FaUser />

          </span>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        {/* end */}

        <div className="home-1">
          <Container fluid='md'className='d-flex'>
            <Row xs={1} md={1} lg={2}>
              <Col>
              <p className='blockquote-footer'>welcome to website</p>

                <h1 className='font-monospace text-sm-start'> I Am {text}<MdVerified /> </h1>
                
                <p  className='font-monospace'>I am a Junior Web Debeloper with a passion on Crypto Currency and Programming. I am currently studying Computer Science at Cokroaminoto Palopo University in Palopo, South Sulawesi, Indonesia. Outside the University, I spend time with my community on the telegram channel `Cryptocurrency Analysis`. </p>
             
                <Button className='w-50 h-auto font-monospace  p-2' variant='dark'>Visit</Button>
              </Col>
           
              <Col>

                <Image id='gambar-utama' className='p-1 mt-3' src="https://thecinemaholic.com/wp-content/uploads/2018/09/kofuku.jpg" rounded fluid='md'/>
              </Col>
            </Row>
          </Container>
          </div>

        {/* Skil */}

      
          <div className="skill-area">
            <Container>
              <Row xs={2} lg={2}>
                <Col>
                  <h1>Myskill
                 
                  </h1>
                 
                </Col>
             
                <Col>
                 
                   <p>Html</p>
                   <p>Css</p>
                   <p>React Js</p>
                   <p>Java Script</p>
                   <p>Html</p>

                </Col>
              </Row>
            </Container>
          </div>

  {/* End Skill */}

         {/* Card Area */}

          <div className="only-card">

            <Container>
              <Row>
                <Col>
                <h1 className='text-center p-5'>List project</h1>
                </Col>
              </Row>

        
            <Row xs={1} md={2} lg={3} className='g-4' id='p-x'>
            <Col lg='2'>
               <Card>
               <Card.Img variant="top" src={gambar}/>
                  <Card.Body>
                    <Card.Title>Aplikasi Todolist - berbasis web</Card.Title>
                    <Card.Text>Project 1 saya yang dimana saya membuat Aplikasi </Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
              <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.wi8gjQu2ZGUR3hiJmUJuwwAAAA?rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Jevryzn</Card.Title>
                    <Card.Text>Saya seorang marketing dari website tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
            
               </Card>
              </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>Saya seorang marketing tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
               </Card>
               </Col>
               <Col lg='2'>
              <Card>
               <Card.Img id='gambar-utama' variant="top" src="https://pbs.twimg.com/profile_images/906802444935454720/gmjjpWy6_400x400.jpg"/>
                  <Card.Body>
                    <Card.Title>Febryan</Card.Title>
                    <Card.Text>Saya seorang penulis tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
            
               </Card>
              </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kQdZzv14JddtV-emaI9WSgHaHa?w=768&h=768&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Cosplay</Card.Title>
                    <Card.Text>Lorem</Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
               </Card>
               </Col>
               <Col lg='2'>
              <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.jkVr8KC5V1RXWguKPu4AOQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Gemfrix</Card.Title>
                    <Card.Text>Saya seorang seo utama di tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark'>Visit</Button>
                    </Card.Body>
            
               </Card>
              </Col>
              
            </Row>
            </Container>

            {/* End Card Area */}

            {/* Footer */}
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


             {/* Sosialmedia */}
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

          {/* End Sosial Media */}
          </div>

        </>
    )
};

export default TypingAnimation;
