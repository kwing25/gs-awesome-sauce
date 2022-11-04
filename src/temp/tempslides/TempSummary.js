import { makeStyles } from "tss-react/mui";

function TempSummary() {
  const classes = useStyles();
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
      <div className={classes.content}>
        <div>
          <h1>Send a signal</h1>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({ name: { TempSummary } })((theme) => ({
  slide_1: {
    display: "grid",
    position: "sticky",
    height: "100vh",
  },
  header: {
    padding: "20px 0px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export default TempSummary;
