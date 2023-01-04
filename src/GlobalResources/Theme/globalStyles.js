//Copyright 2022 Glowstik Inc. All rights reserved.
import theme from "./theme";

const globalStyles = {
  body: {
    fontFamily: "Averta",
    overscrollBehaviorY: "none",

  },
  a: { color: theme.palette.brandPink },
  h1: {
    fontFamily: "AvertaSemiBold",
    fontSize: 130,
    lineHeight: "1",
    letterSpacing: "-10px",
    color: theme.palette.brandPink,
    [theme.breakpoints.down("tablet")]: { fontSize: 100 },
    [theme.breakpoints.down("mobile")]: { fontSize: 75 },
  },
  h5: {
    fontSize: 40,
    lineHeight: "1",
    letterSpacing: "-1.5px",
    color: theme.palette.neutralTypeMain,
    [theme.breakpoints.down("tablet")]: { fontSize: 32 },
    [theme.breakpoints.down("mobile")]: { fontSize: 27 },
  },
  p: {
    fontSize: 20,
    color: theme.palette.neutralTypeMain,
    [theme.breakpoints.down("tablet")]: { fontSize: 18 },
    [theme.breakpoints.down("mobile")]: { fontSize: 16 },
  },
  img: {
    display: "inline-block",
    maxWidth: "100%",
    border: "none",
    height: "auto",

  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  ".flex": {
    display: "flex",
  },

  ".grid": {
    display: "grid",
  },
};

export default globalStyles;
