import { makeStyles } from "tss-react/mui";
import Landing from "./Slides/Landing";
// import Summary from "./Slides/Summary";


function PitchWrapper() {
  const { classes } = useStyles({});

  return (
    <div className={classes.pitchWrapper}>
      {/* summary, problem, solution, competition, revenue, privacy, plansfeatures, team, advantages */}
<Landing />
      {/* <Summary /> */}

    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({
  // pitchWrapper: {
  //   display: "flex",
  //   zIndex: 1,
  //   width: "100vw",
  //   height: "100vh",
  // }

}));


export default PitchWrapper;