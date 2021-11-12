import React from "react";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import LearnVideoCardModule from "../Modules/LearnVideoCardModule"
// import BubbleModule from "../Modules/BubbleModule"
import './Styles/LearnPage.css'
import '../Modules/Styles/title.css'

const LearnPage = () => {
    var src_one = "hNDgcjVGHIw"
    var filter_array = {"Platform":["Twitter", "Instagram", "Facebook", "Youtube"], "Age-Range": ["0-16", "17-25", "26-35"]}
    return(
        <div>
            <div className="row justify-content-center"/*title, filter and bubble score div*/>
                <div className="col"></div>
                <div className="col title" style={{marginTop: "2.6em", marginLeft: "-.2em"}}>
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
                <div className="col-6" style={{marginTop: "-6em", marginLeft: "4.8em"}} >
                    <FilterModule array={filter_array}/>
                </div>
            </div>
            <div>
                <LearnVideoCardModule source={src_one}/>
            </div>
        </div>
    )
}

export default LearnPage;