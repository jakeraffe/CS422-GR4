import React from "react";
import {Modal, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import "./Styles/vidplayer.css"

const VideoPlayerNewsVRModule = (props) => {
    

    return(
        <Modal.Dialog className="m-info">
        <Modal.Header>
            <Modal.Title><h4>{props.title}</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={8} md={6} lg={6}>
                    <p><q>{props.description}</q></p>
                    <a href={props.cite} target="blank"><span>-source</span></a>
                </Col>
                <Col xs={8} md={6} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url={props.vidurl}
                        width='100%'
                        height='100%'
                        />
                    </div>
                </Col>
            </Row>
        </Modal.Body>
    </Modal.Dialog>
    )
}

export default VideoPlayerNewsVRModule;