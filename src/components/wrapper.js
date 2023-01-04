import { makeStyles } from "tss-react/mui";
import Landing from "./Slides/Landing";
import Problem from "./Slides/Problem";

function PitchWrapper() {
  const { classes } = useStyles({});

  return (
    <div className={classes.pitchWrapper}>
      {/* summary, problem, solution, competition, revenue, privacy, plansfeatures, team, advantages */}
<Landing />
<Problem />

    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({
  pitchWrapper: {

position: "relative",
    width: "100%",
    height: "100%",
    overflow: 'auto',
  }

}));


export default PitchWrapper;