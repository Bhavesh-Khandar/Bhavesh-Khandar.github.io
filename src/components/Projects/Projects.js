import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bigbasket from "../../Assets/Projects/bigbasket.png";
import tripoto from "../../Assets/Projects/tripoto.png";
import sephora from "../../Assets/Projects/sephora.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">My Projects</h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripoto}
              isBlog={false}
              title="Tripoto-Clone"
              description="Tripoto is travel planning and booking Website. Used tech stack and tools are HTML, CSS, JavaScript’."
              gitLink="https://github.com/Bhavesh-Khandar/needless-point-9035-"
              deployLink="https://chimerical-dango-8759a0.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigbasket}
              isBlog={false}
              title="Bigbasket"
              description="Big Basket is one of the largest online grocery super market in India. Tech stack and tools we have used to clone this website are HTML, CSS, JavaScript, Bootstrap and Swiper JS"
              gitLink="https://github.com/ak478gh/Grocery_Hub"
              deployLink="https://candid-torte-8f94a3.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephora}
              isBlog={false}
              title="Sephora Project"
              description="Sephora is a French multinational retailer of personal care and beauty products. Tech stack and tools we have used to clone this website are HTML, CSS, JavaScript, React"
              gitLink="https://github.com/callmeabhi1997/SephoraProject"
              deployLink="https://suspicious-mccarthy-90cb20.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
