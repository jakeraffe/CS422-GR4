import React from "react";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import './Styles/LearnPage.css'
import '../Modules/Styles/title.css'

const LearnPage = () => {
    var title = TitleBarModule("Learn Page");
    console.log(title.props.title)
    return(
        <div>
            <div className="row"/*title, filter and bubble score div*/>
                <div className="col-md-4" /*This is a spacing placeholder*/></div>
                <div className="col-md-4 title" style={{marginTop: "3.7em"}}>
                    <h1>Learn Page</h1>
                    <FilterModule/>
                </div>
                <div className=" learn_page_semi-circle">
                    <div className="bubble_prog">
                        <h3> Progress: 25%</h3>
                    </div>
                    <div className="bubble_pts">
                        <h3>Points: 105</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnPage;