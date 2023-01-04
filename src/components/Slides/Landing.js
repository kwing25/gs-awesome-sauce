import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import glowstikLogo from "../../GlobalResources/Assets/Images/glowstikLogo.svg";
import glowstikMapIconPulseAnimation from "../../GlobalResources/Assets/Lotties/glowstikMapIconPulse.json";

function Landing() {
  const { classes } = useStyles({});

  return (
    <>
      <div className={classes.landing}>
        <div className={classes.wrapper}>
          <div className={classes.wrapperInner}>
            <img
              className={classes.gsLogo}
              src={glowstikLogo}
              alt="logo"
              style={{ height: "100%", width: "400px" }}
            />
            <p className={classes.tagline}>cast messaging</p>
          </div>
        </div>
        <div className={classes.lottieWrapper}>
          <div className={classes.lottieWrapperInner}>
            <Lottie
              className={classes.mapIconLottie}
              animationData={glowstikMapIconPulseAnimation} />
          </div>
        </div>
      </div>
    </>
  )
}

const useStyles = makeStyles()((_, props) => ({
  landing: {
    display: "flex",
    width: "100vw",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

}));

export default Landing