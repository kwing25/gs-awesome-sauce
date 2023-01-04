import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import iconWhitePulseOnlyAnimation from "../../GlobalResources/Assets/Lotties/iconWhitePulseOnly.json";
import nowFastIconWhite from "../../GlobalResources/Assets/Images/nowFastIconWhite.svg";
import keyIconWhite from "../../GlobalResources/Assets/Images/keyIconWhite.svg";
import handMissIconWhite from "../../GlobalResources/Assets/Images/handMissIconWhite.svg";

function Problem() {
  const { classes } = useStyles({});

  return (
    <>
      <div className={classes.problemSlide}>

        <div className={classes.columnLeft}>
          <div className={classes.columnLeftInner}>
            <div className={classes.problemHeading}>
              <h1 className={classes.headingText}>
                Problem
              </h1>
              <h5 className={classes.subContentText}>
                Opputunities expire all around us
              </h5>
            </div>
            <div className={classes.problemPointsContainer}>
              <div className={classes.problemPointWrapper}>
                <div className={classes.problemPoint}>
                  <img src={nowFastIconWhite} alt="now fast icon" />
                </div>
                <div className="bullet-copy-wrapper">
                  <h3 className="problem-solution-statement">Our wants and desires change hyper fast<br /></h3>
                </div>
              </div>

              <div className={classes.problemPointWrapper}>
                <div className={classes.problemPoint}>
                  <Lottie
                    className={classes.iconWhitePulseOnlyAnimation}
                    animationData={iconWhitePulseOnlyAnimation} />
                  <img src={keyIconWhite} alt="key icon" />
                </div>
                <div className="bullet-copy-wrapper">
                  <h3 className="problem-solution-statement">Connecting in the moment is key to coming together</h3>
                </div>
              </div>

              <div className={classes.problemPointWrapper}>
                <div className={classes.problemPoint}>

                  <ing src={handMissIconWhite} alt="hand miss icon" />
                </div>
                <div className="bullet-copy-wrapper">
                  <h3 className="problem-solution-statement">If we don't connect in the moment, it fades away</h3>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={classes.columnRight}>
          <sub>map graphic</sub>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles()((_, props) => ({
  problemSlide: {
    display: "block",
    position: "sticky",
    zIndex: 1,
    width: "100vw",
    height: "100vh",
  },
  columnLeft: {
    position: "absolute",
    zIndex: 1,
    width: "auto",
    height: "100%",
    backgroundColor: "#ed2290",
    padding: "26px",
  },
  columnLeftInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "auto",
    marginTop: "60px",
  },
  problemHeading: {
    padding: "10px",
  },
  headingText: {
    color: "#fff",
    fontSize: "128px",
    lineHeight: "128px",
    letterSpacing: "-0.08em",
    marginTop: "0px",
    marginBottom: "0px",
  },
  subContentText: {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: "-0.06em",
    marginTop: "0px",
    marginBottom: "0px",
  },
  problemPointsContainer: {
    width: "100%",
  },
  problemPointWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  problemPoint: {
    width: "75px",
  },
  columnRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50vw",
    height: "100vh",
    gridColumnStart: "2",
    gridColumnEnd: "2",
  },

}));

export default Problem;
