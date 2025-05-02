import React from "react";
import { Col, Row } from "react-bootstrap";

// Devicons (DI)
import {
  DiPython,
  DiMongodb,
  DiArtificialIntelligence,
  DiGit
} from "react-icons/di";

// Simple Icons (SI)
import {
  SiCplusplus,
  SiMicrosoftExcel,
  SiPowerbi,
  SiTableau
} from "react-icons/si";

// Font Awesome (FA)
import { FaGithub } from "react-icons/fa";

// Phosphor Icons (PI)
import {
  PiMicrosoftWordLogoBold,
  PiFileSql,
  PiTrademarkRegisteredBold
} from "react-icons/pi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiArtificialIntelligence />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiMicrosoftWordLogoBold />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiTrademarkRegisteredBold />
      </Col>
    </Row>
  );
}

export default Techstack;
