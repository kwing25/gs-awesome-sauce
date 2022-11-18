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
    color: theme.palette.neutralBlack,
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
};

export default globalStyles;
