//Copyright 2022 Glowstik Inc. All rights reserved.
import theme from "./theme";

const globalStyles = {
  body: {
    fontFamily: "AvertaCY-Regular",
    overscrollBehaviorY: "none",
    margin: 0,
  },
  a: { color: theme.palette.brandPink },
  h1: {
    fontFamily: "AvertaCY-Semibold",
    fontSize: 100,
    lineHeight: "1",
    letterSpacing: "-8px",
    color: theme.palette.neutralBlack,
  },
  ".grid": {
    display: "grid",
    gridAutoColumns: "1fr",
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: 16,
    gridColumnGap: 16,
    [theme.breakpoints.down("tablet")]: {
      gridColumnGap: 16,
      gridRowGap: 16,
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    },
    [theme.breakpoints.down("mobile")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  ".headingText": {
    display: "inline-block",
    fontSize: 40,
    lineHeight: "1.2em",
    textAlign: "center",
    letterSpacing: 0,
    [theme.breakpoints.down("tablet")]: { fontSize: 32 },
    [theme.breakpoints.down("mobile")]: { fontSize: 30 },
  },
  ".subContentText": {
    width: "15em",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 16,
    color: theme.palette.brandPink,
  },
};

export default globalStyles;
