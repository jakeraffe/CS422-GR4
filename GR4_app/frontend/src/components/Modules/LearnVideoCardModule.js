import React from "react";
import { Button, Modal} from 'react-bootstrap';
import "./Styles/LearnVideoCardModule.css"
const LearnVideoCardModule = (props) => {
    var source_builder = "//www.youtube.com/embed/" + props.source
    var title = props.title;
    var body = props.body
    const gotoquiz = () =>{
        return (
            "Go to Quiz -->"
        )
    }

    return(
        <Modal.Dialog className="my-modal ">
            <Modal.Header>
            <div class="row justify-content-left">
                <div className="col-10">
                    <Modal.Title>{title}</Modal.Title>
                </div>
                <div className="col-2 text-right">
                <button type="button" class="btn btn-primary">{gotoquiz()}</button>
                </div>
            </div>
            </Modal.Header>

            <Modal.Body>
                <div class="row">
                    <div class="col-md-7">
                        <p>{body}</p>
                    </div>
                    <div class="col-md-5">
                    <iframe id="Video" width="200px" height="140px" src={source_builder} frameborder="0" allowfullscreen></iframe> 
                    </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default LearnVideoCardModule;