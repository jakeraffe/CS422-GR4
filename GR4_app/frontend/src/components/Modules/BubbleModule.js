import React from "react";
import {Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";


const BubbleModule = (props) => {
    const history = useHistory();

    // Onclick redirect to other pages
    function redirectClick() {
        if (props.text === "LEARN") {
            history.push("/Learn");
        } else if (props.text === "NEWS") {
            history.push("/News");
        } else if (props.text === "INFLUENCER ACTIVITY") {
            history.push("/Influencer-Activity");
        } else if (props.text === "SETTINGS") {
            // Not implemented yet!
        }
    }
    
    // All styles will be put into a css file...
    return(
        <Button className="bg-secondary rounded-circle" style={{width: "300px", height: "300px"}} onClick={redirectClick}>
            <img src={props.imgsrc} alt={props.text} style={{width: "180px", height: "180px", margin:"15px"}}/>
            <p className="text-center">{props.text}</p>
        </Button>
    )
}

export default BubbleModule;

