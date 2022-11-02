import React from "react";
import "./privacy.scss";

export default function TempPrivacy() {

    return (
        <div className="privacy">
           <div className="slide_7">
                <div className="slide_7__grid w-layout-grid ">
                    <div className="title_container">
                        <h1 id="headline" className="slide-title">Growing Privacy Laws</h1>
                    </div>
                    <div className="column_2_container">
                        <div className="column_2_chart">
                            <div className="column_2_positino_container">
                                <div className="slide_7_column_2_copy_title_container">
                                    <h5 id="subline" className="slide_7_column_2_copy">Growing Demand for Data Privacy Laws Worldwide</h5>
                                </div>
                                <div id="barChartContainer" className="slide_7_chart_container" />
                                <a href="https://unctad.org/page/data-protection-and-privacy-legislation-worldwide" className="survy_2_link">* United Nations Conference on Trade and Development. (2021). Data Protection and
                                    Privacy Legislation Worldwide: Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="slide_7_column_1_container">
                        <div className="slide_7_column_1_right_align_container">
                            <div className="slide_7_column_1_cioy_container">
                                <h5 id="subline" className="slide_7_column_1_copy">Americans are uncomfortable with location tracking</h5>
                            </div>
                            <div className="slide_7_man_container">
                                <div data-is-ix2-target={1} className="lottie-animation-7" data-animation-type="lottie" data-src="documents/Pitch_noun_Male-v3.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration="1.2666666666666666" data-duration={0} />
                                <div data-w-id="61f9c243-4026-e220-c4b3-ce9fa0c2a949" style={{ opacity: 0 }} className="slide_7_column_1_man_percent">60%</div>
                            </div>
                            <div className="slide_7_lady_container">
                                <div data-is-ix2-target={1} className="lottie-animation-8" data-animation-type="lottie" data-src="documents/noun_Woman-v6.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration="1.2666666666666666" data-duration={0}>
                                </div>
                                <div style={{ opacity: 0 }} className="slide_7_column_1_man_percent">69%</div>
                            </div>
                            <a href="https://www.okta.com/sites/default/files/Okta-Cost-of-Privacy-Report.pdf" className="survy_1_link">* Juniper Research. (2020). Cost of the Privacy 2020: Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}