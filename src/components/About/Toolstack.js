import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAWS,
  SiMySQLWorkbench,
  SiJupyterNotebook,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyterNotebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAWS />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMySQLWorkbench />
      </Col>
    </Row>
  );
}

export default Toolstack;
