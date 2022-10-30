import React from "react";
import "./problem.scss";

export default function TempProblem() {

    return (
        <div className="problem">
            <div className="slide_3">
                <div className="slide_3__grid w-layout-grid">
                    <div className="column_2">
                        <div className="margin">
                            <div className="title_div">
                                <h1 id="headline" className="slide-title">The Problem</h1>
                            </div>
                            <div className="title_div_sub">
                                <h5 id="subline" className="slide-sub-title">People want everything right now</h5>
                            </div>
                            <div className="lines">
                                <div className="line_1"><img src="https://uploads-ssl.webflow.com/5ee398d5d4577f50ba98b03d/624705f74c826394b6b2f65e_searchPixelPerfect96.svg" loading="lazy" width={98} alt="" className="copy-line-image-icon" />
                                    <h5 id="subline" className="line-sub-title">Today's technology allows you to search for
                                        opportunities in their area.</h5>
                                </div>
                                <div className="line_2"><img src="https://uploads-ssl.webflow.com/5ee398d5d4577f50ba98b03d/6247064d1c22c2447510a170_addPixelPerfect96.svg" loading="lazy" alt="" className="image-plus" />
                                    <h5 id="subline" className="line-sub-title">But it doesn't allow you to find areas of
                                        opportunity.</h5>
                                </div>
                                <div className="line_3">
                                    <div className="lottie-animation-1" data-animation-type="lottie" data-src="documents/Happy-Face-Lottie-Thick-Pink-v1.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="1.2666666666666666" data-duration={0} />
                                    <h5 id="subline" className="line-sub-title">Large amount of local opportunities expire when you
                                        can not quickly connect.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}