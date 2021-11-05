import React, {useState}  from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";


const ValidatePage = () => {
    const [coin, setCoin] = useState("");
    const history = useHistory();

    function searchCoin() {
        // Logic for coin search will go in here and redirect to scam page
        history.push("/News");
      }

    const renderForm = () => {
        return(
            <>
                <Container style={{marginTop: "1rem"}}>
                    <Row>
                        <Col > 
                            <div className="float-left">
                                <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/2586/premium/2586703.png?token=exp=1635984346~hmac=2819253c3af4aafa6fd319c4ff08e28f" text="LEARN"/> 
                            </div>
                        </Col>
                        <Col>
                            <div className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/3666/premium/3666863.png?token=exp=1635984215~hmac=8d1a4405050793cee09c7c99e188c978" text="NEWS"/>
                            </div> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mx-auto" style={{width: "50%"}}>
                                <div>
                                <h1>VALIDATE</h1>
                                <h2>YOUR COIN:</h2>
                                </div>
                                <div>
                                    <Form className='d-flex'>
                                        <Form.Control type="text" placeholder="Verify Coin:" onChange={e => setCoin(e.target.value)}/>
                                        <Button variant="primary" onClick={searchCoin}>Search</Button>
                                    </Form>  
                                    <img src="https://cdn-icons-png.flaticon.com/512/1490/1490900.png" alt="BTC" onClick={()=> {setCoin("BTC");searchCoin()}} style={{width: "100px", height: "100px", margin:"10px"}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2586/2586005.png" alt="ETH" onClick={()=> {setCoin("ETH");searchCoin()}} style={{width: "100px", height: "100px", margin:"10px"}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4964/4964811.png" alt="DOGE" onClick={()=> {setCoin("DOGE");searchCoin()}} style={{width: "100px", height: "100px", margin:"10px"}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4935/4935048.png" alt="LTC" onClick={() => {setCoin("LTC");searchCoin()}} style={{width: "100px", height: "100px", margin:"10px"}}/>
                                </div>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            <div className="float-left">
                                <BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/1968/premium/1968777.png?token=exp=1635984406~hmac=3037320507734e4a03cddec2714b2f13" text="INFLUENCER ACTIVITY"/>
                            </div>
                        </Col>
                        <Col> 
                            <div className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/6041/6041310.png" text="SETTINGS"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    // All styles will be put into a css file...
    // Also an images folder will be created...
    return(
        <div>
            <h2>Welcome to the Home Page</h2>
            <div className="button">
                {renderForm()}
            </div>
        </div>
    )
}
export default ValidatePage;