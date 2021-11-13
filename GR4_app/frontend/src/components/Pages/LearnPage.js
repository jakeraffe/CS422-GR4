import React from "react";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import LearnVideoCardModule from "../Modules/LearnVideoCardModule";
// import BubbleModule from "../Modules/BubbleModule"
import "./Styles/LearnPage.css";
import "../Modules/Styles/title.css";

const LearnPage = () => {
  var filter_array = {
    Platform: ["Twitter", "Instagram", "Facebook", "Youtube"],
    "Age-Range": ["0-16", "17-25", "26-35"],
  };
  return (
    <div>
      <div
        className="row justify-content-center" /*title, filter and bubble score div*/
      >
        <div className="col"></div>
        <div
          className="col title"
          style={{ marginTop: "2.6em", marginLeft: "-.2em" }}
        >
          <TitleBarModule title="Learn Page" />
        </div>
        <div className="col text-right">
          <button className="rounded-circle btn-bubble-points">
            <div className="text-center">
              <h3> Progress: 25%</h3>
              <h3>Points: 105</h3>
            </div>
          </button>
        </div>
      </div>
      <div
        className="row justify-content-center" /*title, filter and bubble score div*/
      >
        {/* <div className="col"></div> */}
        <div className="col" style={{ marginTop: "-5em" }}>
          <FilterModule array={filter_array} />
        </div>
      </div>
      <div className="grid">
        <LearnVideoCardModule
          source="VYWc9dFqROI"
          title="Crypto for Beginners"
          body="Put simply, cryptocurrencies are like regular currencies except they’re entirely digital. Each individual cryptocurrency coin is fundamentally just a collection of numbers and letters. sThis sounds complicated, but it’s actually not far off from what we see with currencies today. Bills have serial numbers, and bank accounts have account numbers"
        />
        <LearnVideoCardModule
          source="AFhSf0l_aQQ"
          title="Crypto Scams: Part 1"
          body="The Ponzi Scheme started before crypto itself and relies on the premise of paying out old users with the money that is being brought on from the new users. There are a number of different Front businesses that will be used in order to justify a ponzi return."
        />
        <LearnVideoCardModule
          source="SSo_EIwHSd4"
          title="Block Chain Explained"
          body="What is a blockchain and how do they work? I'll explain why blockchains are so special in simple and plain English!"
        />
        <LearnVideoCardModule
          source="8uYNOoG41I0"
          title="Crypto and Cloud Storage"
          body="Explore the current cloud storage landscape, define the problems with the popular services, offer the blockchain solution and crypto projects behind them, and envision a future of file storage on the blockchain."
        />
        <LearnVideoCardModule
          source="7F_RKFQl3pg"
          title="Crypto Scams: Part 2"
          body="savethekids.io was a disaster and after promoting it as ambassadors during the prelaunch... they quickly abandoned the project. Why did FaZe Clan members even promote this?"
        />
      </div>
    </div>
  );
};

export default LearnPage;
