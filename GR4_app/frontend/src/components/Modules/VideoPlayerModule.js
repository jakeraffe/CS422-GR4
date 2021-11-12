import React from "react";
import { Button, Modal} from 'react-bootstrap';
const VideoPlayerModule = () => {
    

    return(
        <Modal.Dialog>
            <Modal.Header closeButton >
                <Modal.Title >Lecture 1: Crypto Basics</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div class="row">
                    <div class="col-md-6">
                        <p>Lorem ipsum dolor sit amet, no eos suas ullamcorper, veniam commodo equidem ad pro. Sed etiam omittantur cu. </p>
                    </div>
                    <div class="col-md-6">
                    <iframe id="Video" width="180px" height="90px" src="//www.youtube.com/embed/OSXH1xbiIVM" frameborder="0" allowfullscreen></iframe> 
                    </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default VideoPlayerModule;