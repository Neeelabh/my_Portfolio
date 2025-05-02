import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiMongodb,
  DiGitGithub,
  DiArtificialIntelligence,
  

} from "react-icons/di";
import {
  SiMachineLearning,
  SiMicrosoftExcel,
  SiCplusplus,
  SiTableau,
  SiPowerbi,
  SiMySQL,

} from "react-icons/si";
import { 
  PiMicrosoftWordLogoBold,
  PiFileSql,
  PiTrademarkRegisteredBold,
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
        <SiMySQL />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMachineLearning />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi/>
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
