import React, {useState}  from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";


const ValidatePage = () => {
    var coin = "";
    const coinNames = ["BTC", "ETH", "SHIBA INU", "TERRA", "DOGE", "LTC", "WHYCOIN"];// Add more at some later time..
    const history = useHistory();
    // const searchBtnRef = useRef(null);
    const [searchState, setSearch] = useState("Search");
    const [searchColor, setSearchColor] = useState("primary");


    function searchCoin() {
        // Logic for coin search will go in here and redirect to scam result page

        if (coinNames.find(element => element === coin.toUpperCase()) !== undefined) {
            history.push({
                pathname: '/Validate-Result',
                search: "?scam"+coin, 
                state: { 
                    coinName: coin // Send coin name to validate result page...
                },
            }); 
        } else {
            setSearch("Invlaid");
            setSearchColor("danger");
        }
        
      }

    function quickVerify(name) {
        coin = name;
        searchCoin();
    }



    const renderForm = () => {
        return(
            <>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-left">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/3652/3652314.png" text="LEARN"/>
                                {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/2540/2540832.png" text="NEWS"/>
                            </div> 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mx-auto" xs={9} md={8} lg={6}>
                            <div className="mx-auto mt-5 mb-5 bg-secondary p-5 rounded-circle">     
                                <div>
                                <h1>VALIDATE</h1>
                                <h2>YOUR COIN:</h2>
                                </div>
                                <Form className='d-flex'>
                                        <Form.Control type="text" placeholder="Verify Coin:" onChange={e => {coin = e.target.value; setSearchColor("primary"); setSearch("Search")}}/>
                                        <Button variant={searchColor} onClick={searchCoin}>{searchState}</Button>
                                </Form>
                                <Row>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/1490/1490900.png" alt="BTC" onClick={()=>quickVerify("BTC")} style={{width: "70px", height: "70px", margin:"5px"}}/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/2586/2586005.png" alt="ETH" onClick={()=>quickVerify("ETH")} style={{width: "70x", height: "70px", margin:"5px"}}/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/4964/4964811.png" alt="DOGE" onClick={()=>quickVerify("DOGE")} style={{width: "70px", height: "70px", margin:"5px"}}/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/4935/4935048.png" alt="LTC" onClick={()=>quickVerify("LTC")} style={{width: "70px", height: "70px", margin:"5px"}}/>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-left">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/2751/2751671.png" text="INFLUENCER ACTIVITY"/>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-right">
                                <BubbleModule imgsrc="https://cdn-icons-png.flaticon.com/512/3132/3132084.png" text="SETTINGS"/>
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
            {renderForm()}
        </div>
    )
}
export default ValidatePage;