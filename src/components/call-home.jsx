import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Image, Row, Col, Navbar, Container, Nav, Form, Button, NavDropdown, CardText, CardImg, CardFooter, Spinner, Modal } from 'react-bootstrap'; // Added Modal from react-bootstrap
import '../style/p-home.css';
import { FaFacebookF, FaGithub, FaUser } from "react-icons/fa";
import { RiInstagramFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { AiFillFilePpt, AiFillSafetyCertificate } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { CgUserlane } from "react-icons/cg";
import gambar from'../img/1.jpg';
import React, { useState, useEffect } from 'react';
import XHm from '../pages/home';
import { useNavigate  } from 'react-router-dom'; // Import useNavigate for navigation
import { HelmetProvider, Helmet } from 'react-helmet-async'

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const words = ['Febryanus', 'Tambing'];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [loading, setLoading] = useState(false); // Added state for loading
  const [buttonLoading, setButtonLoading] = useState(null); // State to track which button is loading
  const navigate = useNavigate (); // Initialize useNavigate
  const [showWelcomeModal, setShowWelcomeModal] = useState(false); // State for controlling the welcome modal visibility

  useEffect(() => {
    setShowWelcomeModal(true); // Show welcome modal when the component mounts
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

    return () => {
      clearInterval(interval);
      setShowWelcomeModal(false); // Hide welcome modal when the component unmounts
    };
  }, [wordIndex, letterIndex]);

  // Function to handle button click for specific page navigation
  const handleButtonClick  = (page, buttonId) => {
    setButtonLoading(buttonId); // Set loading state for the clicked button
    setTimeout(() => {
      setButtonLoading(null); // Reset loading state after navigation
      navigate(page); // Navigate to the specified page
    }, 2000); // Set timeout for 2 seconds for demonstration
  };
    
  
    return (
      
        <>
      <HelmetProvider>
        <Helmet>
          <title>Home - Febryan.id</title>
          <link rel="icon" href="/" />
          <meta name="description" content="Explore the journey of Febryanus Tambing, a Junior Web Developer passionate about Crypto Currency and Programming." />
          <meta name="keywords" content="Febryanus Tambing, Web Developer, Crypto Currency, Programming, Computer Science, Palopo" />
        </Helmet>
        </HelmetProvider>
      
        {/* Welcome Modal */}
        <div className="bg-dark">
        <Modal show={showWelcomeModal} className='dark' onHide={() => setShowWelcomeModal(false)}>
          <Modal.Header closeButton style={{color: 'white'}}>
            <Modal.Title style={{color: 'gray'}}>Welcome!</Modal.Title>
          </Modal.Header>
          
          <Modal.Body style={{color: 'gray'}}>Welcome to the website! We hope you enjoy your visit.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowWelcomeModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
        {/* End of Welcome Modal */}
        
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
            <Nav.Link href='/blog' className='text-white'>Blog</Nav.Link>
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
                
                <p  className='font-monospace'>I am a Junior Web Developer with a passion for Crypto Currency and Programming. I am currently studying Computer Science at Cokroaminoto Palopo University in Palopo, South Sulawesi, Indonesia. Outside the University, I spend time with my community on the telegram channel `Cryptocurrency Analysis`. </p>
             
                <Button className='w-50 h-auto font-monospace  p-2' variant='dark' onClick={() => handleButtonClick('/next-page', 'visit')}>
                  {buttonLoading === 'visit' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                </Button>
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
                  <h1>My Skills
                 
                  </h1>
                 
                </Col>
             
                <Col>
                 
                   <p>HTML</p>
                   <p>CSS</p>
                   <p>React JS</p>
                   <p>JavaScript</p>

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
                <h1 className='text-center p-5'>List of Projects</h1>
                </Col>
              </Row>

        
            <Row xs={1} md={2} lg={3} className='g-4' id='p-x'>
            <Col lg='2'>
               <Card>
               <Card.Img variant="top" src={gambar}/>
                  <Card.Body>
                    <Card.Title>Web-based Todolist App</Card.Title>
                    <Card.Text>My first project where I created a Todolist Application</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-1', 'project1')}>
                      {buttonLoading === 'project1' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
              <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.wi8gjQu2ZGUR3hiJmUJuwwAAAA?rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Jevryzn</Card.Title>
                    <Card.Text>I am a marketer for the website tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-2', 'project2')}>
                      {buttonLoading === 'project2' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
            
               </Card>
              </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>I am a marketer for tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-3', 'project3')}>
                    {buttonLoading === 'project3' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>I am a marketer for tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-3', 'project4')}>
                    {buttonLoading === 'project4' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>I am a marketer for tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-3', 'project5')}>
                    {buttonLoading === 'project5' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>I am a marketer for tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-3', 'project6')}>
                    {buttonLoading === 'project6' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
                    </Card.Body>
               </Card>
               </Col>
              <Col lg='2'>
               <Card>
               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.oF1rfA1m_JwlAD1XHQNNHwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"/>
                  <Card.Body>
                    <Card.Title>Klycnine</Card.Title>
                    <Card.Text>I am a marketer for tokonomicsanime</Card.Text>
                    <Button className='w-50' variant='dark' onClick={() => handleButtonClick('/project-3', 'project3')}>
                    {buttonLoading === 'project7' ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Visit'}
                    </Button>
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


             {/* Social Media */}
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
                 <p className='font-monospace'>Article</p>
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
      <p className="text-center mt-4 mb-4 font-monospace">Follow Us on Social Media</p>
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

          {/* End Social Media */}
          </div>

        </>
    )
    
    };

export default TypingAnimation;


