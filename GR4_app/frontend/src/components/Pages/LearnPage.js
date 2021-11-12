import React from "react";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
// import BubbleModule from "../Modules/BubbleModule"
import './Styles/LearnPage.css'
import '../Modules/Styles/title.css'

const LearnPage = () => {
    var filter_array = {"Platform":["Twitter", "Instagram", "Facebook", "Youtube"], "Age-Range": ["0-16", "17-25", "26-35"]}
    return(
        <div>
            <div className="row justify-content-center"/*title, filter and bubble score div*/>
                <div className="col"></div>
                <div className="col title" style={{marginTop: "3.0em"}}>
                    <TitleBarModule title="Learn" />
                </div>
                <div className="col text-right">
                    <button className="rounded-circle btn-bubble">
                        <div className="text-center">
                            <h3> Progress: 25%</h3>
                            <h3>Points: 105</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="row justify-content-center"/*title, filter and bubble score div*/>
                <div className="col-6" style={{marginTop: "-5em", marginLeft: "3em"}} >
                    <FilterModule array={filter_array}/>
                </div>
            </div>
        </div>
    )
}

export default LearnPage;