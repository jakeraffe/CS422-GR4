import React from "react";
import TitleBarModule from "../Modules/TitleBarModule";
import FilterModule from "../Modules/FilterModule";
import LearnVideoCardModule from "../Modules/LearnVideoCardModule";
// import BubbleModule from "../Modules/BubbleModule"
import "./Styles/LearnPage.css";
import "../Modules/Styles/title.css";

const LearnPage = () => {
  const filter_1_array = {
    Coin: ["Bitcoin", "Litecoin", "Etherium"],
    "Age-Range": ["0-16", "17-25", "26-35"],
  };

  var filter_array = {
    Coin: ["Bitcoin", "Litecoin", "Etherium"],
    Date: ["Day", "Week", "Two-Week"],
    Subject: ["Coins", "News"],
  };
  return (
    <div>
      <div
        className="row justify-content-center mt-0 mb-0 ml-0 mr-0" /*title, filter and bubble score div*/
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
        className="row justify-content-center mt-0 mb-0 ml-0 mr-0" /*title, filter and bubble score div*/
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
          body="Put simply, cryptocurrencies are like regular currencies except they’re entirely digital. Each individual cryptocurrency coin is fundamentally just a collection of numbers and letters. This sounds complicated, but it’s actually not far off from what we see with currencies today. Bills have serial numbers, and bank accounts have account numbers"
          quizContent="Cryptocurrency is based on: "
          label1="No record"
          label2="Blockchain"
          label3="Bank transactions"
          label4="All of the above"
          correct="answer2"
        />
        <LearnVideoCardModule
          source="AFhSf0l_aQQ"
          title="Crypto Scams: Part 1"
          body="The Ponzi Scheme started before crypto itself and relies on the premise of paying out old users with the money that is being brought on from the new users. There are a number of different Front businesses that will be used in order to justify a Ponzi return."
          quizContent="What is a Ponzi Scheme: "
          label1="Investment fraud"
          label2="Transaction registration technique"
          label3="Crypto trading authorization"
          label4="None of the above"
          correct="answer1"
        />
        <LearnVideoCardModule
          source="SSo_EIwHSd4"
          title="Block Chain Explained"
          body="What is a blockchain and how do they work? I'll explain why blockchains are so special in simple and plain English!"
          quizContent="Who invented Blockchain: "
          label1="S. Haber and W.Scott Stornetta"
          label2="Satoshi Nakamoto"
          label3="Vitalik Buterin"
          label4="Elon Musk"
          correct="answer1"
        />
        <LearnVideoCardModule
          source="8uYNOoG41I0"
          title="Crypto and Cloud Storage"
          body="Explore the current cloud storage landscape, define the problems with the popular services, offer the blockchain solution and crypto projects behind them, and envision a future of file storage on the blockchain."
          quizContent="What is a persistent problem with cloud storage: "
          label1="Security"
          label2="Cost"
          label3="Storage space"
          label4="Privacy"
          correct="answer4"
        />
        <LearnVideoCardModule
          source="7F_RKFQl3pg"
          title="Crypto Scams: Part 2"
          body="savethekids.io was a disaster and after promoting it as ambassadors during the prelaunch... they quickly abandoned the project. Why did FaZe Clan members even promote this?"
          quizContent="Who promoted 'Save the kids token': "
          label1="Government"
          label2="Influencers"
          label3="Hackers"
          label4="Bankers"
          correct="answer2"
        />
      </div>
    </div>
  );
};

export default LearnPage;
