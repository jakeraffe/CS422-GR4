import React, {useState}  from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Styles/ValidatePage.css";
import learnLogo from "./Images/learn.png";
import aboutLogo from "./Images/about.png";
import influencerLogo from "./Images/influencer.png";
import newsLogo from "./Images/newspaper.png";
import btcLogo from "./Images/bitcoin.png";
import ltcLogo from "./Images/litecoin.png";
import ethLogo from "./Images/ethereum.png";
import dogeLogo from "./Images/dogecoin.png";

// Images belong to https://www.freepik.com

const ValidatePage = () => {
    var coin = "";
    const coinNames = ["BTC", "ETH", "DOGE", "LTC", "WHYCOIN", "BITCOIN", "ETHEREUM", "LITECOIN"];// Add more at some later time..
    const history = useHistory();
    const [searchState, setSearch] = useState("Search");
    const [searchColor, setSearchColor] = useState("primary");


    function searchCoin() {
        // Logic for coin search will go in here and redirect to scam result page

        if (coinNames.find(element => element === coin.toUpperCase()) !== undefined) {
            history.push({
                pathname: '/Validate-Result',
                search: "?scam"+coin, 
                state: { 
                    coinName: coin
                },
            }); 
        } else {
            setSearch("No Match");
            setSearchColor("danger");
        }
        
      }

    function quickVerify(name) {
        coin = name;
        searchCoin();
    }

    function enterSearchCoin(e) {
        if (coinNames.find(element => element === coin.toUpperCase()) === undefined)
            e.preventDefault();
        searchCoin();
    }


    const renderForm = () => {
        return(
            <>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-left">
                                <BubbleModule imgsrc={learnLogo} text="LEARN"/>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="float-right">
                                <BubbleModule imgsrc={newsLogo} text="NEWS"/>
                            </div> 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mx-auto" xs={9} md={8} lg={6}>
                            <div className="mx-auto mt-5 mb-5 p-5 rounded-circle search-bubble">     
                                <div>
                                <h1>VALIDATE</h1>
                                <h2>YOUR COIN:</h2>
                                </div>
                                <Form className='d-flex'>
                                        <Form.Control type="text" placeholder="Verify Coin:" onChange={e => {coin = e.target.value; 
                                                    setSearchColor("primary"); setSearch("Search")}} onKeyPress={e => {if (e.key === "Enter") enterSearchCoin(e)}}/>
                                        <Button type="submit" variant={searchColor} onClick={searchCoin}>{searchState}</Button>
                                </Form>
                                <Row>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src={btcLogo} alt="BTC" onClick={()=>quickVerify("BTC")} className="quick-search-coins"/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src={ethLogo} alt="ETH" onClick={()=>quickVerify("ETH")} className="quick-search-coins"/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src={dogeLogo} alt="DOGE" onClick={()=>quickVerify("DOGE")} className="quick-search-coins"/>
                                    </Col>
                                    <Col xs={6} md={3} lg={3}>
                                        <img src={ltcLogo} alt="LTC" onClick={()=>quickVerify("LTC")} className="quick-search-coins"/>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-left">
                                <BubbleModule imgsrc={influencerLogo} text="INFLUENCER ACTIVITY"/>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}> 
                            <div className="float-right">
                                <BubbleModule imgsrc={aboutLogo} text="ABOUT US"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return(
        <div>
            {renderForm()}
        </div>
    )
}
export default ValidatePage;