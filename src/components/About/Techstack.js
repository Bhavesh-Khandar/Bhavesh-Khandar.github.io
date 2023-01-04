import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import {
  SiExpress,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  // SiMaterialui,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingTop: '100px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col> */}
    </Row>
  );
}

export default Techstack;
