import React from "react";
import {Button} from "react-bootstrap";

const BubbleModule = (props) => {
    // All styles will be put into a css file...
    return(
        <Button className="bg-secondary rounded-circle" style={{width: "300px", height: "300px"}}>
            <img src={props.imgsrc} alt={props.text} style={{width: "180px", height: "180px", margin:"15px"}}/>
            <p class="text-center">{props.text}</p>
        </Button>
    )
}

export default BubbleModule;