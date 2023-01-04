import React from 'react'
// mport React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import myImg from '../../Assets/Profile.png';
// import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
const contact = () => {
  return (
    <Container>
    
          <Row style={{ justifyContent: 'center', paddingTop: '110px' }}>
        <Col md={12} className="home-about-social">
          <h1 className="purple">Contact Me Here</h1>
          {/* <p>
              Feel free to <span className="purple">Contact Me </span>with me
            </p> */}
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Bhavesh-Khandar"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bhavesh-khandar-0a2a62192"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default contact