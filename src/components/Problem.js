import { makeStyles } from "tss-react/mui";
// import Lottie from "lottie-react";


function Problem() {
  const { classes } = useStyles({});

  return (
    <>
      <div className={classes.slide}>
        <div className={classes.contentSplit}>
          <div className={classes.columnLeft}>
            <h1 className={classes.headingText}>
              Glowstik
              <br />
              Messaging
            </h1>
            <h5 className={classes.subContentText}>
              Ask for anything or <br /> offer anything <br /> to the people
              around you. <br />
              See who matches <br /> Stay private <br /> or share more <br /> to
              meet-up.
            </h5>

          </div>
          <div className={classes.columnRight}>

            <div className={classes.videoContainer}>
              <iframe
                src="https://player.vimeo.com/video/527675712?h=c98a1e73c4"
                title="video embed"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ height: "100%", width: "100%" }}
              ></iframe>
            </div>
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

  contentSplit: {
    display: "grid",
    position: "relative",
    overflow: "hidden",
    justifyItems: "center",
    alignItems: "center",
  },
  columnLeft: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "50vw",
    height: "100vh",
    backgroundColor: "#ed2290",
  },
  headingText: {
    width: "75%",
    textAlign: "left",
    color: "#ffffff",
    marginTop: "140px",
    marginBottom: "20px",
    lineHeight: ".8",
    overflow: "visible",
  },
  subContentText: {
    width: "75%",
    textAlign: "left",
    color: "#ffffff",
    fontSize: "30px",
    lineHeight: "1.2",
    letterSpacing: "-.5px",
    marginTop: "25px",
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
  videoContainer: {
    position: "relative",
    width: "100%",
  },
}));

export default Problem;
