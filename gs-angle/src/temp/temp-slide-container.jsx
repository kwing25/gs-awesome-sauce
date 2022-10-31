import React from "react";
// import { useLottie } from "lottie-react";
import TempSummary from "./tempslides/Summary";
import TempProblem from "./tempslides/Problem";
import TempSolution from "./tempslides/Solution";
import TempCompeition from "./tempslides/Compeition";

import "./temp-slide-container.scss";
// import "./main.scss";

export default function TempSlideContainer() {
    return (
        <div className="pitch-wrapper ">
            <TempSummary />
            <TempProblem />
            <TempSolution />
            <TempCompeition />
            {/* <Revenue /> */}
            {/* <Privacy /> */}
            {/* <PlansFeatures /> */}
            {/* <Team /> */}
            {/* <Advantages /> */}
        </div>
    );
}