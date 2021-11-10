import React from "react";
import {Card} from "react-bootstrap";

const InfluencerCardModule = (props) => {


    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.imgsrc} className="photo" fluid/>
            <Card.Body>
                {/* Influencer name goes here */}
                <Card.Title>{props.text}</Card.Title>
                {/* Social Media Influencer uses goes here */}
                <Card.Subtitle>{props.text}</Card.Subtitle>
                <Card.Text>
                    Info goes here
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}

export default InfluencerCardModule;