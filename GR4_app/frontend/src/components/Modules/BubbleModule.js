import React from "react";
import {Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Styles/bubble.css";


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
        } else if (props.text === "ABOUT US") {
            history.push("/About-Us");
        } else if (props.text === "SCAM" || props.text === "VALID") {
            window.open("https://help.coinbase.com/en/coinbase/privacy-and-security/avoiding-phishing-and-scams/avoiding-cryptocurrency-scams","_blank");
        }
    }
    
    return(
        <button className="rounded-circle btn-bubble" onClick={redirectClick}>
            <img src={props.imgsrc} alt={props.text} className="img-inner-bubble"/>
            <p className="text-center">{props.text}</p>
        </button>
    )
}

export default BubbleModule;
