import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiMicrosoftExcel,
  SiTableau,
} from "react-icons/si";
import {
  PiMicrosoftWordLogoBold,
  PiFileSql,
  PiTrademarkRegisteredBold,
} from "react-icons/pi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCplusplus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftExcel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
      <Col xs={4} md={2} className="tech-icons"><PiFileSql /></Col>
      <Col xs={4} md={2} className="tech-icons"><PiMicrosoftWordLogoBold /></Col>
      <Col xs={4} md={2} className="tech-icons"><PiTrademarkRegisteredBold /></Col>
    </Row>
  );
}

export default Techstack;
