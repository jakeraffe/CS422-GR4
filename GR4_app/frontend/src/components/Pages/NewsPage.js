import React from "react";
import "./Pages.css";
import "./Styles/NewsPage.css";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import VideoPlayerModule from "../Modules/VideoPlayerModule";
import { Container, Row, Col, Modal } from "react-bootstrap";
import VideoPlayerNewsVRModule from "../Modules/VideoPlayerNewsVR";

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
          <VideoPlayerNewsVRModule
            title={"Crypto market size"}
            description={
              "The global cryptocurrency market size was USD 826.6 million in 2020. The market is projected to grow from USD 910.3 million in 2021 to USD 1,902.5 million in 2028."
            }
            cite={
              "https://www.fortunebusinessinsights.com/industry-reports/cryptocurrency-market-100149"
            }
            vidurl={
              "https://www.youtube.com/watch?v=CM4RDlLVESY&ab_channel=AltcoinBuzz"
            }
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerNewsVRModule
            title={"BitCoin just hit another new all-time high"}
            description={
              "Bitcoin hit another new all-time high above $68,000 Wednesday, two days after its last all-time high when it went over $68,000 for the first time on Monday."
            }
            cite={
              "https://time.com/nextadvisor/investing/cryptocurrency/bitcoin-price-increases/"
            }
            vidurl={
              "https://www.youtube.com/watch?v=ev7iProynaU&ab_channel=CNBCTelevision"
            }
          />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerNewsVRModule
            title={"Ethereum is back"}
            description={
              "Bitcoin has rocketed to an all-time high of nearly $70,000. But investors are even more excited about ethereum, which is now the world's second most valuable cryptocurency. Ethereum, or ether for short, is also trading at record levels."
            }
            cite={
              "https://www.cnn.com/2021/11/10/investing/ethereum-bitcoin-cryptocurrencies/index.html"
            }
            vidurl={
              "https://www.youtube.com/watch?v=MRgytgZEb7M&ab_channel=CNBCTelevision"
            }
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <VideoPlayerNewsVRModule
            title={"Is this a Bitcoin bubble?"}
            description={
              "As Bitcoin hits an all-time record, investors are trying to sort through the outright derision on one side and cultlike belief on the other and get a rational answer to the market’s leading puzzle, “Is Bitcoin in a bubble?”"
            }
            cite={
              "https://fortune.com/2021/10/21/is-this-a-bitcoin-bubble-the-debate-is-roiling-some-of-wall-streets-most-seasoned-investors/"
            }
            vidurl={
              "https://www.youtube.com/watch?v=1IH9BHV6ywM&ab_channel=BloombergTechnology"
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPage;
