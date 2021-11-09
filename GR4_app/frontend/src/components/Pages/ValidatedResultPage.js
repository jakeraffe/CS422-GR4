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


const ValidatedResultsPage = () => {

    const location = useLocation();
    const coinReceived = location.state.coinName.toUpperCase();
    const statusCoin = detScamOrNot(coinReceived);
    const logo = logoToUse(statusCoin);
    const scamInfo = "Scam Technique: Pump and Dump";
   
    // based on the coin passed from ValidatePage determine if the coin is a scam of not
    function detScamOrNot(c) {
        console.log(c);
        if (c === "WHYCOIN")
            return "SCAM";
        else 
            return "VALID";
    }

    function logoToUse(c) {
        if (c === "SCAM")
            return scamLogo;
        else 
            return notScamLogo;
    }

    return(
        <>
            <Container fluid="md" className="mt-5 mb-5"> 
                <TitleBarModule title={coinReceived}/>
                <Row className="mt-5 mb-5">
                    <Col xs={12} md={6} lg={6}> 
                        <BubbleModule imgsrc={logo} text={statusCoin}/>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Modal.Dialog className="card-info">
                            <Modal.Body>
                            <img src={scamGraph} alt="Price Graph" className="img-graph"/>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={12} md={6} lg={6}>
                        <Modal.Dialog className="card-info">
                            <Modal.Header>
                                <Modal.Title>{scamInfo}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={6} md={6} lg={6}>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.</p>
                                    </Col>
                                    <Col xs={6} md={6} lg={6}>
                                       
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                    <Col xs={12} md={6} lg={6}> 
                        <Modal.Dialog className="card-info">
                            <Modal.Header>
                                <Modal.Title>{coinReceived}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>PRICE: {"$100000"}</p>
                                <p>DEVELOPERS: {"Vitalik Buterin, Péter Szilágyi, Brooklyn Zelenka"}</p>
                                <p>DATE LAUNCHED: {"July 30, 2015"}</p>
                                <p>BLOCKCHAIN: {}</p>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ValidatedResultsPage;