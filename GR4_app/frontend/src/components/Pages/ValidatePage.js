import react from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'
import {Container, Row, Col, Button} from "react-bootstrap";


const ValidatePage = () => {

    const renderForm = () => {
        return(
            <>
                <Container style={{marginTop: "5rem"}}>
                    <Row>
                        <Col > 
                            <span className="float-left">
                                <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/2586/premium/2586703.png?token=exp=1635984346~hmac=2819253c3af4aafa6fd319c4ff08e28f" text="LEARN"/> 
                            </span>
                        </Col>
                        <Col>
                            <span className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/3666/premium/3666863.png?token=exp=1635984215~hmac=8d1a4405050793cee09c7c99e188c978" text="NEWS"/>
                            </span> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1>VALIDATE</h1>
                                <h2>YOUR COIN:</h2>
                            </div>
                            <input type="text" id="header-search" placeholder="Verify Coin:" name="s"/>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            <span className="float-left">
                            <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/1968/premium/1968777.png?token=exp=1635984406~hmac=3037320507734e4a03cddec2714b2f13" text="INFLUENCER ACTIVITY"/>
                            </span>
                        </Col>
                        <Col> 
                            <span className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/6041/6041310.png" text="SETTINGS"/>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return(
        <div>
            <h2>Welcome to the Home Page</h2>
            <div class="button">
                {renderForm()}
            </div>
        </div>
    )
}
export default ValidatePage;