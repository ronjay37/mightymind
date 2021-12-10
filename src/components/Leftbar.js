import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";

import LeftbarCards from "./LeftbarCards";

const useStyles = makeStyles((theme) => ({
  LeftBarHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  viewClasses: {
    [theme.breakpoints.down("md")]: {
      marginTop: "10px !important",
    },
  },
  SelectClassSM: {
    display: "none !important",
    [theme.breakpoints.down("md")]: {
      display: "block !important",
    },
  },
  SelectClassMD: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h6"
        noWrap
        color="black"
        component="div"
        // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
        sx={{ mb: 0.3, mt: 5 }}
      >
        Here are your classes
      </Typography>
      <Box
        className={classes.LeftBarHeading}
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "space-between",
          }
        }
      >
        <Typography
          variant="body2"
          color="black"
          component="div"
          className={classes.SelectClassMD}
          // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Select a class to view this week's assigned activities and begin your
          lesson.
        </Typography>
        <Typography
          variant="body2"
          color="black"
          component="div"
          className={classes.SelectClassSM}
          // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Select a class to view this week's<br></br>assigned activities and
          begin your lesson.
        </Typography>
        <Link
          className={classes.viewClasses}
          variant="body2"
          href="#"
          color="inherit"
        >
          {"View all classes"}
        </Link>
      </Box>
      <LeftbarCards />
    </Box>
  );
}

export default Leftbar;
