import React from "react";
import "./revenue.scss";

export default function Revenue() {

    return (
        <div className="revenue">
            <div className="slide_6">
                <div className="slide_6__container">
                    <div className="slide_6__grid w-layout-grid">
                        <div className="header">
                            <h1 id="headline" className="slide-title">Revenue Model</h1>
                        </div>
                        <div className="column_1_icon">
                            <div className="image-container">
                                <h5 id="subline" className="line-sub-title"><strong>Currency Feature</strong><br /></h5><img src="images/noun-iphone-14093-FFFFFF.svg" loading="lazy" alt="" className="image-16" />
                                <h5 id="subline" className="line-sub-title"><strong>$1.9 </strong>Trillion Market<br /></h5>
                            </div>
                        </div>
                        <div className="column_2_icon">
                            <div className="image-container">
                                <h5 id="subline" className="line-sub-title">Peer to Peer Payment<br /></h5><img src="images/noun-payment-1168142-FFFFFF.svg" loading="lazy" alt="" className="image-17" />
                                <h5 id="subline" className="line-sub-title"><strong>$90.88</strong> billion Market<br /></h5>
                            </div>
                        </div>
                        <div className="column_3_icon">
                            <div className="image-container">
                                <h5 id="subline" className="line-sub-title">Micro Fees<br /></h5>
                                <div data-is-ix2-target={1} className="lottie-animation-14" data-animation-type="lottie" data-src="documents/noun-love-1855000-FFFFFF-v2.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={1} data-duration={0}>
                                </div>
                                <h5 id="subline" className="line-sub-title">Low User Friction<br /></h5>
                            </div>
                        </div>
                        <div className="grid-footer" />
                    </div>
                    <div className="footer">
                        <a href="https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/our%20insights/the%202021%20mckinsey%20global%20payments%20report/2021-mckinsey-global-payments-report.pdf" className="stat-link"><strong>Global Payments Market Share</strong></a>
                        <a href="https://www.globenewswire.com/en/news-release/2022/04/11/2419635/0/en/Global-Payment-Processing-Market-Size-2022-Projected-With-Impressive-Valuation-US-248-97-Billion-By-2028-With-CAGR-Of-14-47.html#:~:text=The%20global%20Payment%20Processing%20market,14.47%25%20during%202022%2D2028." className="stat-link"><strong>Global Payment Processing Market Size 2022
                        </strong></a>
                    </div>
                </div>
            </div>
        </div>
    )

}