import {useState, useEffect} from 'react' 
import { makeStyles } from "tss-react/mui";
// import Lottie from "lottie-react";
// import glowstikLogo from "../GlobalResources/Assets/Images/glowstikLogo.svg";
// import glowstikMapIconPulseAnimation from "../GlobalResources/Assets/Lotties/glowstikMapIconPulse.json";
// import { Box, Container } from '@mui/system';


function Wrapper() {
    const { classes } = useStyles({});

    return (
        <>
        {/* summary, problem, solution, competition, revenue, privacy, plansfeatures, team, advantages */}


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

  
export default Wrapper;