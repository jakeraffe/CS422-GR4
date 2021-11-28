import React, { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import "./Styles/LearnVideoCardModule.css";

const LearnVideoCardModule = (props) => {
  var source_builder = "//www.youtube.com/embed/" + props.source;
  var title = props.title;
  var body = props.body;
  var quizContent = props.quizContent;
  var label1 = props.label1;
  var label2 = props.label2;
  var label3 = props.label3;
  var label4 = props.label4;
  var correct = props.correct;

  const [show, setShow] = useState(false);
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleX, setVisibleX] = useState(false);

  const checkCorrectness = () => {
    if (
      (correct === "answer1" && answer1 === true) ||
      (correct === "answer2" && answer2 === true) ||
      (correct === "answer3" && answer3 === true) ||
      (correct === "answer4" && answer4 === true)
    ) {
      setVisible(true);
      setVisibleX(false);
    } else {
      setVisible(false);
      setVisibleX(true);
    }
  };

  const handleClose = () => {
    setShow(false);
    setVisible(false);
    setVisibleX(false);
  };
  const handleShow = () => {
    setShow(true);
    setVisible(false);
    setVisibleX(false);
  };

  return (
    <>
      <Modal.Dialog className="my-modal ">
        <Modal.Header>
          <div class="row justify-content-left ">
            <div className="col-10">
              <Modal.Title>{title}</Modal.Title>
            </div>
            <div className="col-2 ">
              <Button className="quizBtn" onClick={handleShow}>
                Go to quiz &nbsp; &#9654;
              </Button>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div class="row">
            <div class="col-md-7 text-left">
              <p className="modalText">{body}</p>
            </div>
            <div class="col-md-5">
              <iframe
                id="Video"
                width="200px"
                height="140px"
                src={source_builder}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>

      <Modal className="quizModal" size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="quizModal-header">
            Quiz for {title} &nbsp;
            {!visible ? null : (
              <div class="d-inline align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#00cc00"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>{" "}
              </div>
            )}
            {!visibleX ? null : (
              <div class="d-inline align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>{" "}
              </div>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="quizModal-body">
          {quizContent}
          <Form className="quizForm">
            <Row className="text-left">
              <Col>
                <Form.Check
                  // inline
                  label={label1}
                  name="group1"
                  type="radio"
                  id={`inline-"radio"v-1`}
                  onChange={(e) => {
                    setAnswer1(true);
                    setAnswer2(false);
                    setAnswer3(false);
                    setAnswer4(false);
                  }}
                />
              </Col>
              <Col>
                {" "}
                <Form.Check
                  // inline
                  label={label2}
                  name="group1"
                  type="radio"
                  id={`inline-"radio"v-2`}
                  onChange={(e) => {
                    setAnswer1(false);
                    setAnswer2(true);
                    setAnswer3(false);
                    setAnswer4(false);
                  }}
                />
              </Col>
            </Row>
            <Row className="text-left">
              <Col>
                <Form.Check
                  // inline
                  label={label3}
                  name="group1"
                  type="radio"
                  id={`inline-"radio"v-3`}
                  onChange={(e) => {
                    setAnswer1(false);
                    setAnswer2(false);
                    setAnswer3(true);
                    setAnswer4(false);
                  }}
                />
              </Col>
              <Col>
                <Form.Check
                  // inline
                  label={label4}
                  name="group1"
                  type="radio"
                  id={`inline-"radio"v-4`}
                  onChange={(e) => {
                    setAnswer1(false);
                    setAnswer2(false);
                    setAnswer3(false);
                    setAnswer4(true);
                  }}
                />
              </Col>
            </Row>
          </Form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="quizBtn" onClick={checkCorrectness}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LearnVideoCardModule;
