import React from "react";
// import { useLottie } from "lottie-react";
import TempSummary from "./tempslides/Summary";
import TempProblem from "./tempslides/Problem";
import TempSolution from "./tempslides/Solution";
import TempCompeition from "./tempslides/Compeition";
import TempRevenue from "./tempslides/Revenue";
import TempPrivacy from "./tempslides/Privacy";

import "./temp-slide-container.scss";
// import "./main.scss";

export default function TempSlideContainer() {
    return (
        <div className="pitch-wrapper ">
            <TempSummary />
            <TempProblem />
            <TempSolution />
            <TempCompeition />
            <TempRevenue />
            <TempPrivacy />
            {/* <PlansFeatures /> */}
            {/* <Team /> */}
            {/* <Advantages /> */}
        </div>
    );
}