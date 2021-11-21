import React from "react";
import "./Pages.css";
import "./Styles/AboutUs.css";
import TitleBarModule from "../Modules/TitleBarModule";
import { Container, Row, Col } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container fluid="md" className="mt-5 mb-5">
      <TitleBarModule title="What we do" />
      <Row>
        <table id="myTable">
          <tr>
            <td>
              {/* <h2 id="myHeader2">GROUP-14</h2> */}
              <button className="rounded-circle btn-bubble-points">
                <div className="text-center">
                  <h2 id="myHeader2"> GROUP-14</h2>
                </div>
              </button>
            </td>
            <td>
              <p className="par">
                We built this application to provide better knowledge on
                cryptocurrency to those who are interested in starting trading
                cryptocurrency and to those who are already familiar with it.
              </p>
              <p className="par">
                We also want to make a big effort in navigating our users away
                from scams.
              </p>
              <p className="par">
                Our main goal is to make sure users don’t get scammed through
                cryptocurrency and we hope to accomplish this by providing
                various resources, so our users have a good understanding of
                cryptocurrency.
              </p>
            </td>
          </tr>
        </table>
      </Row>
      <Row>
        <Col>
          <h3 id="myHeader3">Contact Us</h3>
        </Col>
      </Row>
      <Row className="text-left">
        <Col>
          <h6>Pedro Aviles Aguirre </h6>
        </Col>
        <Col>
          <a href="mailto:pavile3@uic.edu">pavile3@uic.edu</a>
        </Col>
      </Row>
      <Row className="text-left">
        <Col>
          <h6>Veronica Grosso </h6>
        </Col>
        <Col>
          <a href="mailto:vgross3@uic.edu">vgross3@uic.edu</a>
        </Col>
      </Row>
      <Row className="text-left">
        <Col>
          <h6>Kidist Gebremedhin </h6>
        </Col>
        <Col>
          <a href="mailto:Kgebre3@uic.edu">Kgebre3@uic.edu</a>
        </Col>
      </Row>
      <Row className="text-left">
        <Col>
          <h6>Jacob Raffe </h6>
        </Col>
        <Col>
          <a href="mailto:jraffe2@uic.edu">jraffe2@uic.edu</a>
        </Col>
      </Row>
      <Row className="text-left">
        <Col>
          <h6>Arturo Vazquez </h6>
        </Col>
        <Col>
          <a href="mailto:avazqu48@uic.edu">avazqu48@uic.edu</a>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
