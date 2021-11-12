import React from "react";
import './Pages.css';
import "./Styles/ValidPageResult.css";
import BubbleModule from '../Modules/BubbleModule'
import { useLocation } from 'react-router-dom'
import {Container, Row, Col, Modal} from "react-bootstrap";
import TitleBarModule from '../Modules/TitleBarModule'
import notScamLogo from "./Images/check.png";
import scamLogo from "./Images/cancel.png";
import scamGraph from "./Images/scam-graph.png";
import legitGraph from "./Images/legit-graph.jpg";
import VideoPlayerNewsVRModule from "../Modules/VideoPlayerNewsVR";


const ValidatedResultsPage = () => {
        // Hardcoded info about the coins. Can easly be obtained from an api such as: https://www.livecoinwatch.com/tools/api
        const coinsInfo = [
            {
              name: "ETHEREUM",
              abbreviation: "ETH",
              isScam: false,
              priceGraph: legitGraph,
              price: "$4806.25",
              developers: "Vitalik Buterin, Alex Leverington, Jeffrey Wylcke, Virgil Griffith",
              dateLaunched: "July 30, 2015",
              inflation: "low",
              website: "https://ethereum.org/en/",
              techinque: {video: "https://www.youtube.com/watch?v=TDGq4aeevgY",
                         title: "WHAT IS ETHEREUM?",
                         description: "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online...",
                         descriptionCite: "https://ethereum.org/en/"}
            },
            {
                name: "BITCOIN",
                abbreviation: "BTC",
                isScam: false,
                priceGraph: legitGraph,
                price: "$67923.57",
                developers: "Satoshi Nakamoto, Wladimir J. van der Laan, Jonas Schnelli...",
                dateLaunched: "January 3, 2009",
                inflation: "fixed",
                website: "https://bitcoin.org/en/",
                techinque: {video: "https://www.youtube.com/watch?v=Gc2en3nHxA4",
                            title: "WHAT IS BITCOIN?",
                            description: "Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority...",
                            descriptionCite: "https://en.bitcoin.it/wiki/Main_Page"}
              },
              {
                name: "LITECOIN",
                abbreviation: "LTC",
                isScam: false,
                priceGraph: legitGraph,
                price: "$258.14",
                developers: "Charlie Lee, Fan Yang, Johnson Lau, Loshan T...",
                dateLaunched: "October 13, 2011",
                inflation: "capped supply",
                website: "https://litecoin.com/en/",
                techinque: {video: "https://www.youtube.com/watch?v=8_grrGPkj4c",
                            title: "WHAT IS LITECOIN?",
                            description: "Litecoin (LTC) is decentralised money, free from censorship and open to all. Send low cost private, secure, borderless payments to anyone, anytime, anywhere.",
                            descriptionCite: "https://litecoin.com/en/"}
              },
              {
                name: "DOGECOIN",
                abbreviation: "DOGE",
                isScam: false,
                priceGraph: legitGraph,
                price: "$0.279460",
                developers: "Max K., Patrick Lodder, Ross Nicoll",
                dateLaunched: "December 6, 2013",
                inflation: "effectively-limited",
                website: "https://dogecoin.com/",
                techinque: {video: "https://youtu.be/_KVZmS_UO5I",
                         title: "DOGECOIN IS 100% LEGIT",
                         description: "Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide.",
                         descriptionCite: "https://dogecoin.com/"}
              },
              {
                name: "WHYCOIN",
                abbreviation: "WHY",
                isScam: true,
                priceGraph: scamGraph,
                price: "$0.0000123",
                developers: "unknown",
                dateLaunched: "September 9, 2021",
                inflation: "unkown",
                website: "/",
                techinque: {video: "https://www.youtube.com/watch?v=YJVtgv6Zmq4",
                         title: "Scam Technique: Pump and Dump",
                         description: "Whycoin is using a scam techinque known as Pump and Dump. Pump-and-dump is a manipulative scheme that attempts to boost the price of a stock or security through fake recommendations....",
                         descriptionCite: "https://www.investopedia.com/terms/p/pumpanddump.asp"}
              },
    
          ];
    const location = useLocation();
    const coinReceived = location.state.coinName.toUpperCase();
    const coinObj = coinsInfo.find(c => c.name === coinReceived || c.abbreviation === coinReceived);
    const logo = coinObj.isScam ? scamLogo : notScamLogo;
    const statusCoin =  coinObj.isScam ? "SCAM" : "VALID";
   
 

    return(
        <>
            <Container fluid="md" className="mt-5 mb-5"> 
                <TitleBarModule title={coinReceived}/>
                <Row className="mt-5 mb-5">
                    <Col xs={12} md={12} lg={6}> 
                        <BubbleModule imgsrc={logo} text={statusCoin}/>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Modal.Dialog className="card-info">
                            <Modal.Body>
                            <img src={coinObj.priceGraph} alt="Price Graph" className="img-graph mx-auto"/>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={12} md={12} lg={6}>
                        <VideoPlayerNewsVRModule title={coinObj.techinque.title} description={coinObj.techinque.description}
                         cite={coinObj.techinque.descriptionCite} vidurl={coinObj.techinque.video}/>
                    </Col>
                    <Col xs={12} md={12} lg={6}> 
                        <Modal.Dialog className="card-info">
                            <Modal.Header>
                                <Modal.Title><h4>ABOUT {coinReceived}</h4></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>PRICE: <span>{coinObj.price}</span></p>
                                <p>DEVELOPERS: <span>{coinObj.developers}</span></p>
                                <p>DATE LAUNCHED: <span>{coinObj.dateLaunched}</span></p>
                                <p>INFLATION: <span>{coinObj.inflation}</span></p>
                                <a href={coinObj.website} target="blank">WEBSITE: <span>🖱️</span></a>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ValidatedResultsPage;