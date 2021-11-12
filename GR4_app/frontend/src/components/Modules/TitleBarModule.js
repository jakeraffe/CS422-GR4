import React from "react";
import "./Styles/title.css";

const TitleBarModule = (props) => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  );
};

export default TitleBarModule;
