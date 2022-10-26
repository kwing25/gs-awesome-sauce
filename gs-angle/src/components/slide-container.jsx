import React from "react";
// import { useLottie } from "lottie-react";
import Summary from "./slides/Summary";
import Problem from "./slides/Problem";
import Solution from "./slides/Solution";
import Compeition from "./slides/Compeition";
import Revenue from "./slides/Revenue";
import Privacy from "./slides/Privacy";
import PlansFeatures from "./slides/PlansFeatures";
import Team from "./slides/Team";
import Advantages from "./slides/Advantages";

export default function SlideContainer() {
    return (
        <div className="pitchwrapper ">
            <Summary />
            <Problem />
            <Solution />
            <Compeition />
            <Revenue />
            <Privacy />
            <PlansFeatures />
            <Team />
            <Advantages />
        </div>
    );
}