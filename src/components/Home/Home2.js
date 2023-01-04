import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import myImg from '../../Assets/Profile.png';
// import Tilt from 'react-parallax-tilt';
import Contact from '../Contact/Contact.js'
import {
  // AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from 'react-icons/ai';
// import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              Hello! My name is Bhavesh Khandar.
            </h1>
            <p className="home-about-body">
              I'm a Full Stack Web Developer with hands-on experience in
              designing, developing, and maintaining projects. Adept at
              learning, unlearning, and relearning. Demonstrate the capability
              of managing clean, elegant, and efficient code. Highly skilled in
              collaboration, decision-making, and Data Structures &
              Algorithms.I'm still enthusiastically grabbing on to multiple
              programming languages, frameworks, and principles that I can add
              to my skillset.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div>
              <img
                src={myImg}
                style={{ borderRadius: '100%' }}
                className="img-fluid"
                alt="avatar"
              />
            </div>
          </Col>
        </Row>
        <Button variant="warning">
          {' '}
          <a  text-decoration= "none" color='white' href="https://drive.google.com/file/d/1JyNmYLgj0CiGY9ECNUdgbBNxTKvt9URj/view?usp=sharing">
            Resume
          </a>
        </Button>{' '}
     
        <Contact />
      </Container>
    </Container>
  );
}
export default Home2;
