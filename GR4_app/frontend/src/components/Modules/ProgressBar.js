import React from "react";
import "./Styles/ProgressBar.css"

const ProgressBar = () => {
    return (
      <>
        <svg className="progress_circle_svg" width="125" height="125">
            <circle
                className="progress_circle_outer"
                stroke="#6e75a8"
                cx="250"
                cy="250"
                r="50"
                strokeWidth="15"
            />
            <circle
                className="progress_circle_inner"
                stroke="#eee"
                cx="200"
                cy="200"
                r="42.5"
                strokeWidth="15"
            />
            <text className="progress_circle_svg_text" x="75"  y="75">
                50%
            </text>
        </svg>
      </>
    );
  }

  export default ProgressBar;