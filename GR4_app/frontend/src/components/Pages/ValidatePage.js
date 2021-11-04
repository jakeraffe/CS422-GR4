import React from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'


const ValidatePage = () => {

    const renderForm = () => {
        return(<BubbleModule imgsrc="https://cdn-icons.flaticon.com/png/512/2586/premium/2586703.png?token=exp=1635984346~hmac=2819253c3af4aafa6fd319c4ff08e28f" text="Learn"/>)
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