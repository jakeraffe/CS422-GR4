import React from "react";
import './Pages.css';
import FilterModule from "../Modules/FilterModule";
import InfluencerCardModule from "../Modules/InfluencerCardModule";
import {Container, Row, Col, Button, Card, CardGroup, Image} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Styles/InfluencerPage.css";
import elonMuskLogo from "./Images/elonmusk.jpeg";
import kimKardashianLogo from "./Images/kimk.jpeg"
import jakePaulLogo from "./Images/jakepaul.jpeg";
import floydLogo from "./Images/floyd.jpeg"
import fazeLogo from "./Images/faze.png"

const InfluencerPage = () => {

    var influencer = '';
    const influencerNames = ["Elon Musk, Kim Kadashian, Jake Paul, Floyd Mayweather", "Faze Clan"];

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
                        <Col className="filterSM">
                            <div>
                                <div className="float-left">
                                    <h1>filter by:</h1>
                                </div>
                                <div>
                                    <FilterModule/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="socialMediaCards">
                            <CardGroup>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" className="photo" src={elonMuskLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title>Elon Musk</Card.Title>
                                        <Card.Text>
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={InfluencerCardModule}>More Information</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" className="photo" src={kimKardashianLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title>Kim Kadashian</Card.Title>
                                        <Card.Text>
                                            Social Media: Instagram
                                        </Card.Text>
                                        <Button variant="primary" onClick={InfluencerCardModule}>More Information</Button>
                                    </Card.Body>
                                </Card> 
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" className="photo" src={jakePaulLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title>Jake Paul</Card.Title>
                                        <Card.Text>
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={InfluencerCardModule}>More Information</Button>
                                    </Card.Body>
                                </Card>  
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" className="photo" src={floydLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title>Floyd Mayweather</Card.Title>
                                        <Card.Text>
                                            Social Media: Instagram
                                        </Card.Text>
                                        <Button variant="primary" onClick={InfluencerCardModule}>More Information </Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" className="photo" src={fazeLogo} fluid/>
                                    <Card.Body>
                                        <Card.Title>Faze Clan</Card.Title>
                                        <Card.Text>
                                            Social Media: Twitter
                                        </Card.Text>
                                        <Button variant="primary" onClick={InfluencerCardModule}>More Information </Button>
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