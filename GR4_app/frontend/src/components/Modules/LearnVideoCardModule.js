import React from "react";
import { Button, Modal} from 'react-bootstrap';
import "./Styles/LearnVideoModule.css"
const LearnVideoCardModule = (props) => {
    var source_builder = "//www.youtube.com/embed/" + props.source
    const gotoquiz = () =>{
        return (
            "Go to Quiz -->"
        )
    }

    return(
        <Modal.Dialog className="my-modal">
            <Modal.Header>
            <div class="row justify-content-left">
                <div className="col-10">
                    <Modal.Title>Lecture 1: Crypto Basics</Modal.Title>
                </div>
                <div className="col-2 text-right">
                <button type="button" class="btn btn-primary">{gotoquiz()}</button>
                </div>
            </div>
            </Modal.Header>

            <Modal.Body>
                <div class="row">
                    <div class="col-md-6">
                        <p>Lorem ipsum dolor sit amet, no eos suas ullamcorper, veniam commodo equidem ad pro. Sed etiam omittantur cu. </p>
                    </div>
                    <div class="col-md-6">
                    <iframe id="Video" width="180px" height="90px" src={source_builder} frameborder="0" allowfullscreen></iframe> 
                    </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default LearnVideoCardModule;