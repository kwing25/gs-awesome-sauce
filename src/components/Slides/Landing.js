import { makeStyles } from "tss-react/mui";

function Landing() {
    const { classes } = useStyles({});

    return (
        <>
              <div className={classes.landing}>
landing page
              </div>
        </>
    )
}

const useStyles = makeStyles()((_, props) => ({
    landing: {
      display: "block",
      position: "sticky",
      zIndex: 1,
      width: "100vw",
      height: "100vh",
    },

  }));

export default Landing