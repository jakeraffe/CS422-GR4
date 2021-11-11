import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import "./Styles/influencercard.css";

const InfluencerCardModule = (props) => {


    return(
        <Card style={{width: '28rem'}} className="influencer-card">
            <Card.Img variant="top" src={props.imgsrc} className="photo" fluid/>
            <Card.Body>
                {/* Influencer name goes here */}
                <Card.Title className="card-title">{props.text}</Card.Title>
                {/* Social Media Influencer uses goes here */}
                <Card.Subtitle className="card-subtitle">Social Media: {props.text2}</Card.Subtitle>
                <Card.Text>
                    <Row>
                        <Col>
                            <Row className="safe-coins-header">
                                Safe Coins Promoted
                            </Row>
                            <Row>
                                {props.text3}
                            </Row>
                        </Col>
                        <Col>
                            <Row className="scam-coins-header">
                                Scam Coins Promoted
                            </Row>
                            <Row>
                                {props.text4}
                            </Row>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card> 
    )

}

export default InfluencerCardModule;