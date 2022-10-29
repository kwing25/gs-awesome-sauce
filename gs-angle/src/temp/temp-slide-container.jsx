import React from "react";
// import { useLottie } from "lottie-react";
import TempSummary from "./tempslides/Summary";
import TempProblem from "./tempslides/Problem";

import "./temp-slide-container.scss";

export default function TempSlideContainer() {
    return (
        <div className="pitch-wrapper ">
            <TempSummary />
            <TempProblem />
            {/* <Solution /> */}
            {/* <Compeition /> */}
            {/* <Revenue /> */}
            {/* <Privacy /> */}
            {/* <PlansFeatures /> */}
            {/* <Team /> */}
            {/* <Advantages /> */}
        </div>
    );
}