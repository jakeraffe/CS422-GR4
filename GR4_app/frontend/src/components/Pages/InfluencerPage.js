import React, {useState} from "react";
import './Pages.css';
import FilterModule from "../Modules/FilterModule";
import InfluencerCardModule from "../Modules/InfluencerCardModule";
import {Container, Row, Col, Button, Card, CardGroup, Modal} from "react-bootstrap";
import "./Styles/InfluencerPage.css";
import elonMuskLogo from "./Images/elonmusk.jpeg";
import kimKardashianLogo from "./Images/kimk.jpeg"
import jakePaulLogo from "./Images/jakepaul.jpeg";
import floydLogo from "./Images/floyd.jpeg"
import fazeLogo from "./Images/faze.png"

const InfluencerPage = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false); 
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false)
    const handleClose3 = () => setShow3(false)
    const handleClose4 = () => setShow4(false)
    const handleClose5 = () => setShow5(false)
    
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true)
    const handleShow3 = () => setShow3(true)
    const handleShow4 = () => setShow4(true)
    const handleShow5 = () => setShow5(true)

    const renderForm = () => {

        return(
            <>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col className="influencerActivityTitle">
                            <div>
                                <h1>Influencer Activity</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="filterRow">
                            <div>
                                <div className="filterModule" style={{marginLeft: "21em"}}>
                                    <FilterModule/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="socialMediaCards">
                            <CardGroup className="cardGroup">
                                <Card className = "card" border="info">
                                    <Card.Img variant="top" className="photo" src={elonMuskLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title className="card-title">Elon Musk</Card.Title>
                                        <Card.Text className="card-body-text">
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow}>More Information</Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header className="influencerMHeader" closeButton>
                                                Influencer
                                            </Modal.Header>
                                            <Modal.Body>
                                                <InfluencerCardModule imgsrc={elonMuskLogo} text="Elon Musk" text2="Twitter" text3="Bitcoin, Etherum" text4="None"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                                <Card className = "card" border="info">
                                    <Card.Img variant="top" className="photo" src={kimKardashianLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title className="card-title">Kim Kadashian</Card.Title>
                                        <Card.Text className="card-body-text">
                                            Social Media: Instagram
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow2}>More Information</Button>
                                        <Modal show={show2} onHide={handleClose2}>
                                            <Modal.Header className="influencerMHeader" closeButton>
                                                Influencer
                                            </Modal.Header>
                                            <Modal.Body>
                                                <InfluencerCardModule imgsrc={kimKardashianLogo} text="Kim Kardashian" text2="Instagram" text3="None" text4="Etherum Max Token"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose2}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card> 
                                <Card className = "card" border="info">
                                    <Card.Img variant="top" className="photo" src={jakePaulLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title className="card-title">Jake Paul</Card.Title>
                                        <Card.Text className="card-body-text">
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow3}>More Information</Button>
                                        <Modal show={show3} onHide={handleClose3}>
                                            <Modal.Header className="influencerMHeader" closeButton>
                                                Influencer
                                            </Modal.Header>
                                            <Modal.Body>
                                                <InfluencerCardModule imgsrc={jakePaulLogo} text="Jake Paul" text2="Twitter" text3="Dogecoin, YummyCoin, SafeMoon" text4="None"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose3}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card>  
                                <Card className = "card" border="info">
                                    <Card.Img variant="top" className="photo" src={floydLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title className="card-title">Floyd Mayweather</Card.Title>
                                        <Card.Text className="card-body-text">
                                            Social Media: Instagram
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow4}>More Information </Button>
                                        <Modal show={show4} onHide={handleClose4}>
                                            <Modal.Header className="influencerMHeader" closeButton>
                                                Influencer
                                            </Modal.Header>
                                            <Modal.Body>
                                                <InfluencerCardModule imgsrc={floydLogo} text="Floyd Mayweather" text2="Instagram" text3="Bitcoin" text4="Etherum Max Token"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose4}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                                <Card className = "card" border="info">
                                    <Card.Img variant="top" className="photo" src={fazeLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title className="card-title">Faze Clan</Card.Title>
                                        <Card.Text className="card-body-text">
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow5}>More Information </Button>
                                        <Modal show={show5} onHide={handleClose5}>
                                            <Modal.Header className="influencerMHeader" closeButton>
                                                Influencer
                                            </Modal.Header>
                                            <Modal.Body>
                                                <InfluencerCardModule imgsrc={fazeLogo} text="Faze Clan" text2="Twitter" text3="Bitcoin, Etherum, Doge" text4="Save the Kids Token"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose5}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card> 
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return(
        <div>
            {renderForm()}
        </div>
    )
}

export default InfluencerPage;