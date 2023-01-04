import { makeStyles } from "tss-react/mui";
// import Lottie from "lottie-react";
// import glowstikMapIconPulseAnimation from "../../GlobalResources/Assets/Lotties/glowstikMapIconPulse.json";

function Landing() {
  const { classes } = useStyles({});

  return (
    <>
      <div className={classes.landing}>

        <div className={classes.wrapper}>
          <div className={classes.wrapperInner}>
            <h1 className={classes.passionStatement}>Where</h1>
            <h1 className={classes.passionStatementSub}> is my tribe?</h1>
          </div>
        </div>

        <div className={classes.pitchVideoWrapper}>
          <div className={classes.pitchVideo}>
            <iframe src="https://player.vimeo.com/video/527675712?app_id=122963&h=c98a1e73c4&referrer=https%3A%2F%2Fwww.glowstik.com%2F" title="glowstik pitch" />

          </div>

        </div>
      </div>
    </>
  )
}

const useStyles = makeStyles()((_, props) => ({
  landing: {
    display: 'flex',
    overflow: 'hidden',
    zIndex: 1,
    height: "100vh",
    position: "sticky",
    top: "0px",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
    padding: "45px 0 26px 26px",
    right: "-10vw",
  },

  wrapperInner: {
    position: "relative",
  },

  passionStatement: {
    fontSize: "15vw",
    lineHeight: "14vw",
    letterSpacing: "-0.09em",
    marginTop: "-1vw",
  },

  passionStatementSub: {
    fontSize: "15vw",
    lineHeight: "14vw",
    letterSpacing: "-0.09em",
    marginTop: "-13vw",
  },

  pitchVideoWrapper: {
    display: "flex",
    width: "50%",
    height: "100%",
  },

  pitchVideo: {
    border: "none",
    width: "100%",
    height: "100vh",
  },


}));

export default Landing