import React from "react";
// import { useLottie } from "lottie-react";
import TempSummary from "./tempslides/Summary";
import TempProblem from "./tempslides/Problem";
import TempSolution from "./tempslides/Solution";

import "./temp-slide-container.scss";
import "./main.scss";

export default function TempSlideContainer() {
    return (
        <div className="pitch-wrapper ">
            <TempSummary />
            <TempProblem />
            <TempSolution />
            {/* <Compeition /> */}
            {/* <Revenue /> */}
            {/* <Privacy /> */}
            {/* <PlansFeatures /> */}
            {/* <Team /> */}
            {/* <Advantages /> */}
        </div>
    );
}