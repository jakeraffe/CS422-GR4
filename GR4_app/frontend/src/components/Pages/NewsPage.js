import React from "react";
import "./Pages.css";
import "./Styles/NewsPage.css";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import VideoPlayerModule from "../Modules/VideoPlayerModule";
import { Container, Row, Col, Modal } from "react-bootstrap";

const NewsPage = () => {
  return (
    <Container fluid="md" className="mt-5 mb-5">
      <TitleBarModule title="News" />
      <Row>
        <Col>
          <FilterModule />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerModule />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerModule />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerModule />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerModule />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPage;
