import React from "react";
import './Pages.css';
import { useLocation } from 'react-router-dom'

const ValidatedResultsPage = () => {

    const location = useLocation();

    return(
        <div>
            <h2>Welcome to the Validated Results Page</h2>
            <p>{location.state.coinName}</p>
        </div>
    )
}

export default ValidatedResultsPage;