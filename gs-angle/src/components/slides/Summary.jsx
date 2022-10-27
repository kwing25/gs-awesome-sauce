import React from "react";

export default function Summary() {

    return (
        <div className="summary">

            <div className="slide_1">
                <div className="w-layout-grid slide_1__grid">
                    <div className="slide_1__column-1">
                        <div data-is-ix2-target={1} className="lottie-animation-4" data-animation-type="lottie" data-src="documents/Glowstik-Map-Full-Pulse-Shortened-v2.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={2} data-duration={0} />
                    </div>
                    <div className="side_1_column-2">
                        <div className="slide_1__column-2-margin">
                            <h1 id="headline" className="heading">Send a signal</h1>
                            <h5 id="subline" className="subhead">for anything you want</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide-placeholder" />

            <div className="slide_2">
                <div className="w-layout-grid slide_2__grid">
                    <div className="slide_2__video-container">
                        <div className="demo_sub_container">
                            <div style={{ paddingTop: '197.87234042553192%' }} className="video w-video w-embed"><iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F527675712%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F527675712&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1092312482_640.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo" scrolling="no" title="Vimeo embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                        </div>
                    </div>
                    <div className="slide_2__headbar">
                        <div className="slide_2__column-2-margin">
                            <div className="title_div-copy">
                                <h1 id="headline" className="slide_title_copy_white-copy">Glowstik<br />Messaging<br /></h1>
                            </div>
                            <div className="slide_line_1-3_copy">
                                <div className="slide_2_copy_line-1">
                                    <h5 id="subline" className="slide_2_copy_lines_white-copy">Ask for anything or<br />offer anything<br />to the
                                        people around you.<br />See who matches<br />Stay private<br />or share more<br />to meet-up.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}