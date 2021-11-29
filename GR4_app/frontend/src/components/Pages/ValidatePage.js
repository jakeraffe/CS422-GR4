import React, { useState } from "react";
import "./Pages.css";
import BubbleModule from "../Modules/BubbleModule";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Styles/ValidatePage.css";
import learnLogo from "./Images/learn.png";
import aboutLogo from "./Images/about.png";
import influencerLogo from "./Images/influencer.png";
import newsLogo from "./Images/newspaper.png";
import btcLogo from "./Images/bitcoin.png";
import ltcLogo from "./Images/litecoin.png";
import ethLogo from "./Images/ethereum.png";
import dogeLogo from "./Images/dogecoin.png";
import CoinValidateModule from "../Modules/CoinValidateModule";

// Images belong to https://www.freepik.com

const ValidatePage = () => {
  var coin = "";
  const history = useHistory();

  function searchCoin() {
    history.push({
      pathname: "/Validate-Result",
      search: "?scam" + coin,
      state: {
        coinName: coin,
      },
    });
  }

  function quickVerify(name) {
    coin = name;
    searchCoin();
  }

  const renderForm = () => {
    return (
      <>
        <div className="mt-2 mb-1 ml-0 mr-0">
          <Row className="mt-0 mb-0 ml-0 mr-0">
            <Col xs={12} md={6} lg={6}>
              <div className="mx-auto">
                <BubbleModule imgsrc={learnLogo} text="LEARN" />
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="mx-auto">
                <BubbleModule imgsrc={newsLogo} text="NEWS" />
              </div>
            </Col>
          </Row>
          <Row className="wsb">
            <Col className="mx-auto" xs={12} md={12} lg={6}>
              <div className="mx-auto p-5 rounded-circle search-bubble">
                <div className="validate-coin-label">
                  <h1>VALIDATE</h1>
                  <h2>YOUR COIN:</h2>
                </div>
                <CoinValidateModule />
                <Row>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      src={btcLogo}
                      alt="BTC"
                      onClick={() => quickVerify("BTC")}
                      className="quick-search-coins"
                    />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      src={ethLogo}
                      alt="ETH"
                      onClick={() => quickVerify("ETH")}
                      className="quick-search-coins"
                    />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      src={dogeLogo}
                      alt="DOGE"
                      onClick={() => quickVerify("DOGE")}
                      className="quick-search-coins"
                    />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      src={ltcLogo}
                      alt="LTC"
                      onClick={() => quickVerify("LTC")}
                      className="quick-search-coins"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="ws mx-auto">
                <BubbleModule
                  imgsrc={influencerLogo}
                  text="INFLUENCER ACTIVITY"
                />
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="ws mx-auto">
                <BubbleModule imgsrc={aboutLogo} text="ABOUT US" />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  };

  return <div>{renderForm()}</div>;
};
export default ValidatePage;
