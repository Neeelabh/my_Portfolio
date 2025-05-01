import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Neelabh Deshbhratar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently learning Agentic AI. 
            <br />
            I have completed BTech in Information Technology from Savitribai Phule Pune University.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Persistence is Key!"{" "}
          </p>
          <footer className="blockquote-footer">Neelabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
