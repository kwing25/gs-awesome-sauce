import React from "react";
import "./solution.scss";

export default function TempSolution() {

    return (
        <div className="solution">
            <div className="slide_4">
                <div className="slide_4__grid w-layout-grid">
                    <div className="column_2">
                        <div className="margin">
                            <div className="title_div">
                                <h1 id="headline" className="slide-title">Our Solution</h1>
                            </div>

                            <div className="title_div_sub">
                                <h5 id="subline" className="slide-sub-title">Let's show areas of opportunity to better
                                    connect</h5>
                            </div>
                            <div className="lines">
                                <div className="line_1">
                                    <div id="lavaDiv" className="div-block-9" />
                                    <h5 id="subline" className="line-sub-title">Our patented technology cloaks your data so you can
                                        safely share public.</h5>
                                </div>
                                <div className="line_2">
                                    {/* <img src="images/noun-map-4724932-FFFFFF.svg" loading="lazy" width={98} height={98} alt="" className="image-14" /> */}
                                    <h5 id="subline" className="line-sub-title">To keep it simple, we offer everything in 3 clicks
                                        in a fun interactive map.</h5>
                                </div>
                                <div className="line_3">
                                    <div className="lottie-animation-1" data-animation-type="lottie" data-src="documents/Happy-Face-Lottie-Thick-White-v2.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="1.2833333333333334" data-duration={0} />
                                    <h5 id="subline" className="line-sub-title">You can quickly seize opportunities anywhere in the
                                        world.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}