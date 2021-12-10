import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Add from "@mui/icons-material/Add";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Book from "../images/BookImage.png";

function UpperMenu() {
  const useStyles = makeStyles((theme) => ({
    ButtonTextTransform: {
      textTransform: "none !important",
      color: "white !important",
      borderColor: "white !important",
    },
    ButtonActivity: {
      textTransform: "none !important",
    },
    ButtonExpand: {
      minWidth: "30px !important",
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    UpperMenuStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // paddingLeft: "25px",
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
      },
      UpperButtonMD: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center !important",
        marginTop: "100px !important",
        [theme.breakpoints.down("md")]: {
          alignSelf: "unset !important",
          flexDirection: "column",
        },
      },
      // UpperMenuMain: {
      //   height: "300px !important",
      //   background: "#0F2551 !important",
      // },
    },
  }));

  const classes = useStyles();
  return (
    //230px
    <React.Fragment>
      <Toolbar
        variant="dense"
        className={classes.UpperMenuMain}
        style={{
          height: "230px",
          background: "#0F2551",
          zIndex: "1",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            src={Book}
            alt=""
            height="150"
            style={{
              position: "absolute",
              left: "1%",
              top: "35%",
              opacity: "0.8",
              zIndex: "2",
            }}
          />
        </Box>

        <Container maxWidth="lg">
          <Box
            className={classes.UpperMenuStyle}
            style={
              {
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
              }
            }
          >
            <Box sx={{ zIndex: "3", alignSelf: "center" }}>
              <Typography
                variant="h5"
                noWrap
                color="white"
                component="div"
                // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
                sx={{ mb: 2, mt: 8 }}
              >
                Welcome back, Jasmine
              </Typography>
              <Typography
                variant="caption"
                noWrap
                color="#8492a6"
                component="div"
                // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
              >
                WEEK 4 ACTIVITY SUMMARY
              </Typography>
              <Box sx={{ mt: 1, display: "flex" }}>
                <Typography
                  style={{
                    height: "7px",
                    width: "7px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                  }}
                  sx={{ mt: 0.7, mr: 0.7 }}
                ></Typography>
                <Typography
                  variant="caption"
                  noWrap
                  color="white"
                  component="div"
                  // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
                  sx={{ mr: 1.5 }}
                >
                  Due this week: 330
                </Typography>
                <Typography
                  style={{
                    height: "7px",
                    width: "7px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                  sx={{ mt: 0.7, mr: 0.7 }}
                ></Typography>
                <Typography
                  variant="caption"
                  noWrap
                  color="white"
                  component="div"
                  sx={{ mr: 1.5 }}
                >
                  Completed: 240
                </Typography>
                <Typography
                  style={{
                    height: "7px",
                    width: "7px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                  sx={{ mt: 0.7, mr: 0.7 }}
                ></Typography>
                <Typography
                  variant="caption"
                  noWrap
                  color="white"
                  component="div"
                  sx={{ mr: 1.5 }}
                >
                  Overdue: 33
                </Typography>
              </Box>
            </Box>
            <Box
              className={classes.UpperButtonMD}
              sx={{
                pt: 20,
                pb: 11,
                zIndex: "3",
                textAlign: "center",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Button
                className={classes.ButtonTextTransform}
                variant="outlined"
                color="primary"
                sx={{ mr: 1.5 }}
              >
                My Calendar
              </Button>
              <Button
                className={classes.ButtonTextTransform}
                variant="outlined"
                color="primary"
                sx={{ mr: 1.5 }}
              >
                Weekly Report
              </Button>
              <Button
                className={classes.ButtonActivity}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                sx={{ mr: 0.4 }}
              >
                Assign Activity
              </Button>
              <Button
                className={classes.ButtonExpand}
                variant="contained"
                color="primary"
              >
                <ExpandMore />
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
      <Toolbar
        variant="dense"
        style={{
          height: "155px",
          background: "#0F2551",
          zIndex: "1",
          // alignSelf: "center",
          // justifyContent: "center",
        }}
        sx={{
          display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
        }}
      >
        <Container maxWidth="lg">
          <Box
            className={classes.UpperButtonMD}
            sx={{
              mt: 1,
              mb: 1,
              zIndex: "3",
              textAlign: "center",
              flexDirection: "column",
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            }}
          >
            <Button
              className={classes.ButtonTextTransform}
              variant="outlined"
              color="primary"
              sx={{ mb: 1.5 }}
            >
              My Calendar
            </Button>
            <Button
              className={classes.ButtonTextTransform}
              variant="outlined"
              color="primary"
              sx={{ mb: 1.5 }}
            >
              Weekly Report
            </Button>
            <Button
              className={classes.ButtonActivity}
              variant="contained"
              color="primary"
              sx={{ mb: 0.4 }}
            >
              Assign Activity
            </Button>
            <Button
              className={classes.ButtonExpand}
              variant="contained"
              color="primary"
            >
              <ExpandMore />
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </React.Fragment>
  );
}

export default UpperMenu;
