import react from "react";
import BubbleModule from './Modules/BubbleModule'
const ValidatePage = () => {

    const renderForm = () => {
        return(<BubbleModule/>)
    }

    return(
        <div>
            <h2>Welcome to the Home Page</h2>
            {renderForm()}
        </div>
    )
}

export default ValidatePage;