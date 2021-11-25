import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Styles/coinvalidate.css";



const CoinValidateModule = () => {
    const coinNames = ["BTC", "ETH", "DOGE", "LTC", "WHY", "WHYCOIN", "BITCOIN", "ETHEREUM", "LITECOIN"];// Add more at some later time..
    const history = useHistory();
    //const [searchState, setSearch] = useState("Search");
    const [btnClass, btnClassName] = useState("custom-btn");
    const [inputText, setInputText] = useState("");


    function searchCoin() {
        if (coinNames.find(element => element === inputText.toUpperCase()) !== undefined) {
            history.push({
                pathname: '/Validate-Result',
                search: "?scam"+inputText, 
                state: { 
                    coinName: inputText
                },
            }); 
        } else {
            // setSearch("No Match");
            btnClassName("no-match");
        }
        setInputText("");
      }


  return (
    <Form className='d-flex'>
        <Form.Control type="text" placeholder="Verify Coin:" value={inputText} onChange={e => {
                                                                      setInputText(e.target.value);
                                                                      btnClassName("custom-btn");}}//setSearch("Search") 
                                                                      onKeyPress={e => {if (e.key === "Enter") {e.preventDefault();
                                                                                                                searchCoin()}}}/>
        <Button variant="default" className={btnClass} onClick={searchCoin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </Button>
    </Form>
  );
};

export default CoinValidateModule;
