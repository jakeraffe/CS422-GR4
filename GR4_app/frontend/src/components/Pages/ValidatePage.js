import react from "react";
import './Pages.css';
import BubbleModule from '../Modules/BubbleModule'


const ValidatePage = () => {

    const renderForm = () => {
        return(<BubbleModule/>)
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