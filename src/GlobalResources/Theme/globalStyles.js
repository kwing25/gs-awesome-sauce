//Copyright 2022 Glowstik Inc. All rights reserved.
import theme from "./theme";

const globalStyles = {
  body: {
    fontFamily: "Averta",
    overscrollBehaviorY: "none",
    margin: 0,
  },
  a: { color: theme.palette.brandPink },
  h1: {
  fontFamily: "AvertaSemiBold",
    fontSize: 130,
    lineHeight: "1",
    letterSpacing: "-10px",
    color: theme.palette.neutralBlack,
  },
  h5: {
    fontSize: 40,
    lineHeight: "1",
    letterSpacing: "-1.5px",
    color: theme.palette.neutralTypeMain,
  },
  ".grid": {
    display: "grid",
    gridAutoColumns: "1fr",
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: 16,
    gridColumnGap: 16,
    [theme.breakpoints.down("tablet")]: {
      gridColumnGap: 16,
      gridRowGap: 16,
      gridTemplateColumns: "1fr 1fr 1fr 1fr ",
    },
    [theme.breakpoints.down("mobile")]: {
      gridTemplateColumns: "1fr 1fr",
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
