import { makeStyles } from "tss-react/mui";
import glowstik from "../GlobalResources/Assets/Images/glowstikMapIconPink.svg";
import glowstikLogo from "../GlobalResources/Assets/Images/glowstikLogo.svg";

function Summary() {
  const { classes } = useStyles({});

  return (
    <div className={classes.slide_1}>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img
            src={glowstikLogo}
            alt="logo"
            style={{ height: "100%", width: "112px" }}
          />
        </div>
      </header>

      <div className={classes.column1}>
        <h1 className={classes.headingText}>Send a signal</h1>
        <h5 className="subContentText">for anything you want</h5>
      </div>
      <div className={classes.column2}>
        <img src={glowstik} alt="pulse" />
      </div>
    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({
  slide_1: {
    display: "grid",
    position: "sticky",
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
  headingText: {
   
    display: "block",


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
