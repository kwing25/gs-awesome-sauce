import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import glowstikLogo from "../../GlobalResources/Assets/Images/glowstikLogo.svg";
import glowstikMapIconPulseAnimation from "../../GlobalResources/Assets/Lotties/glowstikMapIconPulse.json";

function Summary() {
  const { classes } = useStyles({});

  return (
    <>
      <div className={classes.slide}>
        <header className={classes.header}>
          <div className={classes.logoContainer}>
            <img

              src={glowstikLogo}
              alt="logo"
              style={{ height: "100%", width: "112px" }}
            />
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.columnLeft}>
            <h1 className={classes.headingText}>Send a signal</h1>
            <h5 className={classes.subContentText}>for anything you want</h5>
          </div>
          <div className={classes.columnRight}>
            <Lottie animationData={glowstikMapIconPulseAnimation} />
          </div>
        </div>
      </div>

    </>
  );
}

const useStyles = makeStyles()((_, props) => ({
  slide: {
    display: "block",
    position: "sticky",
    zIndex: 1,
    width: "100vw",
    height: "100vh",
  },
  header: {
    position: "absolute",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 40px 0",
  },
  content: {
    display: "grid",
    position: "relative",
    overflow: "hidden",
    justifyItems: "center",
    alignItems: "center",
  },
  columnLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50vw",
    height: "100vh",
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
  headingText: {
    display: "block",
    textAlign: "right",
    marginTop: "0px",
    marginBottom: "0px",
  },
  subContentText: {
    display: "block",
    textAlign: "right",
    marginTop: "5px",
    marginBottom: "0px",
  },
}));

export default Summary;
