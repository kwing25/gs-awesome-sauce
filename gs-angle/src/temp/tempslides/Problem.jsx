import React from "react";
import "./problem.scss";

export default function TempProblem() {

    return (
        <div className="problem">
            <div className="slide_3">
                <div className="slide_3__grid w-layout-grid">
                    <div id="map" className="slide_3__map" >
                        <div className="mapboxgl-canary" style={{ visibility: "hidden" }} />
                        <div className="mapboxgl-canvas-container">
                            <canvas
                                className="mapboxgl-canvas"
                                tabIndex={0}
                                aria-label="Map"
                                role="region"
                                width={1880}
                                height={2730}
                                style={{ width: "940px", height: "1365px" }}
                            />
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(637px, 451px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="111.292475"
                                        cy="86.537623"
                                        r="24.225272"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="83.158492"
                                        cy="115.117575"
                                        r="17.730836"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="82.775296"
                                        cy="100.20786"
                                        r="27.294947"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="77.692513"
                                        cy="16.461675"
                                        r="9.988458"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="103.589093"
                                        cy="78.465593"
                                        r="10.534255"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="38.006715"
                                        cy="38.525221"
                                        r="8.430396"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="56.808573"
                                        cy="53.244096"
                                        r="26.861242"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="101.762468"
                                        cy="53.74591"
                                        r="27.762665"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="59.640315"
                                        cy="57.659635"
                                        r="25.182257"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="42.051387"
                                        cy="59.513868"
                                        r="26.931484"
                                    />
                                </g>
                            </svg>
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(576px, 1038px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="76.461677"
                                        cy="81.692433"
                                        r="10.69227"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="51.383397"
                                        cy="76.711697"
                                        r="13.762264"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="32.607079"
                                        cy="84.634094"
                                        r="9.731812"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="101.634057"
                                        cy="37.61723"
                                        r="28.167525"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="131.352323"
                                        cy="64.532427"
                                        r="12.882778"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="108.089251"
                                        cy="79.801776"
                                        r="20.910749"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="76.244652"
                                        cy="57.917443"
                                        r="15.870543"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="80.075387"
                                        cy="77.47722"
                                        r="23.582433"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="63.669951"
                                        cy="60.642"
                                        r="14.376098"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="80.060749"
                                        cy="120.655756"
                                        r="19.040499"
                                    />
                                </g>
                            </svg>
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(661px, 791px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="58.137329"
                                        cy="42.690986"
                                        r="30.381973"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="120.10855"
                                        cy="66.282422"
                                        r="17.434838"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="85.866634"
                                        cy="61.576056"
                                        r="26.037494"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="99.987587"
                                        cy="90.959658"
                                        r="12.013965"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="104.575726"
                                        cy="94.71715"
                                        r="16.764292"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="117.0485"
                                        cy="120.036375"
                                        r="18.967666"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="118.739522"
                                        cy="70.434131"
                                        r={14}
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="39.855049"
                                        cy="129.358713"
                                        r="15.249389"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="84.05851"
                                        cy="76.414901"
                                        r="22.43085"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="95.669642"
                                        cy="100.824075"
                                        r="17.619377"
                                    />
                                </g>
                            </svg>
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(398px, 874px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="32.251176"
                                        cy="61.468863"
                                        r="30.008373"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="114.564958"
                                        cy="109.097"
                                        r="11.77425"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="88.380087"
                                        cy="65.883382"
                                        r="18.949079"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="33.185087"
                                        cy="51.948999"
                                        r="15.868238"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="96.415947"
                                        cy="88.118538"
                                        r="9.053449"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="92.64741"
                                        cy="72.367032"
                                        r="15.323705"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="97.862198"
                                        cy="76.06793"
                                        r="22.003882"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="61.582971"
                                        cy="58.669253"
                                        r="27.870577"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="15.077696"
                                        cy="85.014841"
                                        r="12.012222"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="117.818179"
                                        cy="42.186606"
                                        r="28.980861"
                                    />
                                </g>
                            </svg>
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(150px, 854px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="118.803618"
                                        cy={54}
                                        r="20.882171"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="45.772276"
                                        cy="19.04988"
                                        r="11.29515"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="57.143698"
                                        cy="39.596103"
                                        r={13}
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="78.051937"
                                        cy="55.940025"
                                        r="13.014633"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="50.968533"
                                        cy="42.772008"
                                        r="17.100193"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="49.777013"
                                        cy="74.18841"
                                        r="21.738114"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="39.459074"
                                        cy="59.313153"
                                        r="24.868332"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="76.012472"
                                        cy="105.001247"
                                        r="18.499376"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="62.083486"
                                        cy="97.894544"
                                        r="29.903332"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="108.981443"
                                        cy="97.488908"
                                        r={23}
                                    />
                                </g>
                            </svg>
                            <svg
                                version="1.1"
                                className="svg-bubbles mapboxgl-marker mapboxgl-marker-anchor-center"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="150px"
                                height="150px"
                                viewBox="0 0 150 150"
                                aria-label="Map marker"
                                style={{
                                    transform:
                                        "translate(-50%, -50%) translate(383px, 472px) rotateX(0deg) rotateZ(0deg)"
                                }}
                            >
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur
                                            in="SourceGraphic"
                                            result="blur"
                                            stdDeviation={5}
                                        />
                                        <feColorMatrix
                                            in="blur"
                                            mode="matrix"
                                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                                            result="goo"
                                        />
                                    </filter>
                                </defs>
                                <g
                                    className="gLava"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    filter="url(#goo)"
                                >
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="88.344846"
                                        cy="63.07207"
                                        r="23.861028"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="77.032739"
                                        cy="78.462909"
                                        r="11.43017"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="102.894672"
                                        cy="45.504279"
                                        r="17.33048"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="79.595189"
                                        cy="119.660552"
                                        r="27.169724"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="103.993165"
                                        cy="71.402734"
                                        r={25}
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="123.983661"
                                        cy="90.94398"
                                        r="19.983661"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="73.756046"
                                        cy="39.158675"
                                        r="14.747985"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="117.792246"
                                        cy="65.530926"
                                        r="12.115419"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="102.238748"
                                        cy="122.213377"
                                        r="16.995387"
                                    />
                                    <circle
                                        className="blob-1"
                                        fill="#ed2290"
                                        cx="97.162123"
                                        cy="101.611712"
                                        r="27.837877"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="mapboxgl-control-container">
                            <div className="mapboxgl-ctrl-top-left" />
                            <div className="mapboxgl-ctrl-top-right" />
                            <div className="mapboxgl-ctrl-bottom-left">
                                <div className="mapboxgl-ctrl" style={{ display: "block" }}>
                                    <a
                                        className="mapboxgl-ctrl-logo"
                                        rel="noopener nofollow"
                                        href="https://www.mapbox.com/"
                                        aria-label="Mapbox logo"
                                    >map</a>
                                </div>
                            </div>
                            <div className="mapboxgl-ctrl-bottom-right">
                                <div className="mapboxgl-ctrl mapboxgl-ctrl-attrib">
                                    <button
                                        className="mapboxgl-ctrl-attrib-button"
                                        type="button"
                                        aria-label="Toggle attribution"
                                    >
                                        <span
                                            className="mapboxgl-ctrl-icon"
                                            aria-hidden="true"
                                            title="Toggle attribution"
                                        />
                                    </button>
                                    <div className="mapboxgl-ctrl-attrib-inner" role="list">
                                        <a
                                            href="https://www.mapbox.com/about/maps/"
                                            title="Mapbox"
                                            aria-label="Mapbox"
                                            role="listitem"
                                        >
                                            © Mapbox
                                        </a>{" "}
                                        <a
                                            href="https://www.openstreetmap.org/about/"
                                            title="OpenStreetMap"
                                            aria-label="OpenStreetMap"
                                            role="listitem"
                                        >
                                            © OpenStreetMap
                                        </a>{" "}
                                        <a
                                            className="mapbox-improve-map"
                                            href="https://apps.mapbox.com/feedback/?owner=adammarez&id=ckgv43wr22dra19memucup1y8&access_token=pk.eyJ1IjoiYWRhbW1hcmV6IiwiYSI6ImNrOW9mbGU4NjAwMzgzc3JrNjQwbGhibDkifQ.7vEaAFpTHeARk8-Mzvm7Rw"
                                            aria-label="Map feedback"
                                            role="listitem"
                                            rel="noopener nofollow"
                                        >
                                            Improve this map
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide_3__column-2">
                        <div className="margin">
                            <div className="title_div">
                                <h1 id="headline" className="slide-title-white">The Problem</h1>
                            </div>
                            <div className="title_div_sub">
                                <h5 id="subline" className="slide-sub-title-white">People want everything right now</h5>
                            </div>
                            <div className="lines">
                                <div className="line-1"><img src="https://uploads-ssl.webflow.com/5ee398d5d4577f50ba98b03d/624705f74c826394b6b2f65e_searchPixelPerfect96.svg" loading="lazy" width={98} alt="" className="copy-line-image-icon" />
                                    <h5 id="subline" className="lines_white">Today's technology allows you to search for
                                        opportunities in their area.</h5>
                                </div>
                                <div className="line-2"><img src="https://uploads-ssl.webflow.com/5ee398d5d4577f50ba98b03d/6247064d1c22c2447510a170_addPixelPerfect96.svg" loading="lazy" alt="" className="image-15" />
                                    <h5 id="subline" className="lines_white">But it doesn't allow you to find areas of
                                        opportunity.</h5>
                                </div>
                                <div className="line-3">
                                    <div className="lottie-animation-1" data-animation-type="lottie" data-src="documents/Happy-Face-Lottie-Thick-Pink-v1.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="1.2666666666666666" data-duration={0} />
                                    <h5 id="subline" className="lines_white">Large amount of local opportunities expire when you
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