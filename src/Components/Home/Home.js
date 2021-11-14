import React from "react";
import MainSlider from "../ReactBootstrap/IncludesRB/MainSlider";
import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <section id="welcome" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center">Welcome to A2Z ENGLISH TIPS</h2>
              <Row className="justify-content-center">
                <Col md={4}>
                  <h4 className="side-line text-center">
                    <span className="line">
                      <i className="fas fa-book-reader"></i>
                    </span>
                  </h4>
                </Col>
              </Row>

              <p>
                Learn English Online with the free learning English videos and
                materials from A2Z ENGLISH TIPS. This channel will help you to
                learn English and improve your Pronunciation, Grammar, Spoken
                English, Communication Skills, Interview Skills, Life Skills,
                Motivations and vocabulary knowledge.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
