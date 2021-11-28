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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            Quiz for {title}
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
                />
              </Col>
              <Col>
                <Form.Check
                  // inline
                  label={label4}
                  name="group1"
                  type="radio"
                  id={`inline-"radio"v-4`}
                />
              </Col>
            </Row>
          </Form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="quizBtn" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LearnVideoCardModule;
