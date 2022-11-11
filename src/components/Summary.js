import { makeStyles } from "tss-react/mui";

function Summary() {
  const { classes } = useStyles({});

  return (
    <div className={classes.slide_1}>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img
            src="https://uploads-ssl.webflow.com/5ee398d5d4577f50ba98b03d/5eea2ef1bb1a6df5cb3bb709_glowstik_logo_final_bubble_pico.svg"
            alt=""
            className="gs-logo"
            style={{ height: "100%", width: "112px" }}
          />
        </div>
      </header>
      <div className="grid">
        <div className={classes.column1}>
          <h1 className="heading">Send a signal</h1>
          <h5 className="subContentText">for anything you want</h5>
        </div>
        <div className={classes.column2}></div>
      </div>
    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({
  slide_1: {
    display: "grid",
    position: "sticky",
  },
  // header: {
  //   position: "absolute",
  //   width: "100%",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   padding: "20px 40px 0",
  // },
  content: {
    display: "grid",
    position: "relative",
    overflow: "hidden",
    justifyItems: "center",
    alignItems: "center",
    gridAutoColumns: "1fr",
    gridAutoRows: "1fr",
    gridTemplateRows: "auto",
    gridTemplateColumns: "auto",
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "1",
  },
  column1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50vw",
    height: "100vh",
    // gridColumnStart: "2",
    // gridColumnEnd: "3",
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    height: "100vh",
    // gridColumnStart: "2",
    // gridColumnEnd: "3",
  },
}));

export default Summary;
