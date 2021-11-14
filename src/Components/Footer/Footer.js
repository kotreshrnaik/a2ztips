import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../Images/logo4.png";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="pt-2 pb-2 pt-md-2 pb-md-2 bg-primary">
        <Container>
          <Row>
            <Col md={3}>
              <div className="text-center">
                <Image src={FooterLogo} alt="" className="img-fluid" />
              </div>
              <address className="text-center">
                #485, 10th Cross, 8th Main, HAL 3rd Stage, Jeevan Bhima Nagar,
                Bengaluru-560075, Karnataka. <br />
                P: 097315 64894
              </address>
            </Col>
            <Col md={3}>
              <div className="">
                <h2 className="pt-2 pb-2">Quick Links</h2>
                <ul>
                  <li>
                    <a href="<?= base_url(); ?>">Home</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/about">About</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/contact">Contact</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/downloads">Downloads</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/ebooks">eBooks</a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/onlinecourses">
                      Online Courses
                    </a>
                  </li>
                  <li>
                    <a href="<?= base_url(); ?>/socialmedia">Social Media</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pt-2">Online Courses</h2>
              <ul>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Spelling And BasicEnglish
                  Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>English Grammar Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Spoken English Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Translation Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Cursive Handwriting Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Objective English Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Jobs Skills Training Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Essay Writing Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Build Your Vocabulary Course
                </li>
                <li>
                  <a href="<?= base_url(); ?>/"></a>Precis Writing Course
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pb-2 text-center text-md-start">
                Social Media
              </h2>
              <div className="align-self-center col-md-4">
                <div className="text-center p-2 fs-5">
                  <a href="https://www.facebook.com/english.tips.73157">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/tips_a2z">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/c/a2zenglishtips/">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/a2zenglishtips">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/a2z-english-tips/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
