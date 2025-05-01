import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiCpp,
  DiSQL,
  DiMongodb,
  DiGitGithub,
  DiArtificialIntelligence,
  DiDataScience,
  DiDataAnalytics,

} from "react-icons/di";
import {
  SiMachineLearning,
  SiMicrosoftExcel,

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
        <DiCpp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSQL />
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
        <DiDataScience/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDataAnalytics />
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
