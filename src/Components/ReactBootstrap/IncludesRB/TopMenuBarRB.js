import React from "react";
import Logo from "../../Images/logo2.png";
import {
  Container,
  Row,
  Col,
  NavDropdown,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";

const TopMenuBarRB = () => {
  return (
    <div>
      <div id="top-header" className="bg-primary">
        <Container>
          <Row>
            <Col md={3} className="align-self-center">
              <div className="text-center text-md-start p-1">
                <a href="mailto:a2zenglishtips@gmail.com">
                  <i className="fas fa-envelope-open-text"></i>{" "}
                  a2zenglishtips@gmail.com
                </a>
              </div>
            </Col>
            <Col md={2} className="align-self-center">
              <div className="text-center p-1">
                <a href="tel:09731564894">
                  <i className="fas fa-phone-volume"></i> +91 97315 64894
                </a>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="d-flex list-unstyled mb-0 justify-content-center">
                <div>
                  <NavDropdown title="Social Media" id="social-media">
                    <NavDropdown.Item href="https://www.youtube.com/c/a2zenglishtips/">
                      YouTube
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.facebook.com/english.tips.73157">
                      Facebook Page
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.instagram.com/a2zenglishtips">
                      Instagram
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Telegram
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div>
                  <NavDropdown
                    title="Competitive English"
                    id="competitive-english"
                  >
                    <NavDropdown.Item href="https://www.youtube.com/c/a2zenglishtips/">
                      UPSC Compulsory English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.facebook.com/english.tips.73157">
                      KAS Compulsory English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.instagram.com/a2zenglishtips">
                      English for SSC, RRB & IBPS (NRA-CET)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for CDS, NDA
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for SCRA, CAT, MAT & MBA Entrance Exams
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for Insurance Exams (LIC, GIC...)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for state Police (Delhi, Bihar, Telangana ...
                      etc.)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for TET & CET
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      English for Army, Navy & Airforce Exams
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div>
                  <NavDropdown title="Downloads" id="downloads">
                    <NavDropdown.Item href="https://www.youtube.com/c/a2zenglishtips/">
                      Previous Year Question Papers
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.facebook.com/english.tips.73157">
                      English Grammar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.instagram.com/a2zenglishtips">
                      Spoken English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Parts Of Speech
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Vocabulary
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Translation
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Objective English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Interview Q&A
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">
                      Essays
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </Col>
            <Col md={3} className="align-self-center">
              <div className="d-flex justify-content-center justify-content-md-end">
                <div>
                  <Nav.Link href="#features">Contact</Nav.Link>
                </div>
                <div>
                  <Nav.Link href="#pricing">Login</Nav.Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sticky-top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          id="navbar"
        >
          <Container>
            <Navbar.Brand href="/">
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Online Courses" id="online-courses">
                  <NavDropdown.Item href="/online-courses/spelling-and-basic-english-course">
                    Spelling and Basic English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/online-courses/english-grammar-course">
                    English Grammar Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Spoken English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Translation Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Cursive Handwriting Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Objective English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Jobs Skills Training Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Essay Writing Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Build Your Vocabulary Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Precis Writing Course
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Test Series" id="test-series">
                  <NavDropdown.Item href="#action/3.1">
                    Spelling and Basic English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    English Grammar Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Spoken English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Translation Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Cursive Handwriting Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Objective English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Jobs Skills Training Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Essay Writing Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Build Your Vocabulary Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Precis Writing Course
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Academic English" id="academic-english">
                  <NavDropdown.Item href="#action/3.1">
                    Class-12-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Class-11-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-10-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Class-09-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-08-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-07-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-06-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-05-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-04-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-03-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-02-English NCERT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Class-01-English NCERT Solutions
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Services</Nav.Link>
                <NavDropdown title="Blogs" id="blogs">
                  <NavDropdown.Item href="#action/3.1">
                    English Grammar
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Spoken English
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Parts Of Speech
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Vocabulary
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Translation
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Objective English
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Interview
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Essay</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">eBooks</Nav.Link>
                <NavDropdown title="More" id="more">
                  <NavDropdown.Item href="#action/3.1">
                    English Charts
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Students' Doubts
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Gallery
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default TopMenuBarRB;
