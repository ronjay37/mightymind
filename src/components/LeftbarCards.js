import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import StarRateIcon from "@mui/icons-material/StarRate";
import Divider from "@material-ui/core/Divider";
import Add from "@mui/icons-material/Add";

function LeftbarCards() {
  const useStyles = makeStyles((theme) => ({
    greenCard: {
      borderTop: "solid 3px #5DC110",
      //   boxShadow: "inset 0 -3em 3em rgba(124,252,0,0.1) !important",
      boxShadow: "inset 0 3.5em 0 0.1em rgba(124,252,0,0.1)  !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
        width: "80% !important",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "25px !important",
        width: "30% !important",
      },
    },
    blueCard: {
      borderTop: "solid 3px #3972F5",
      boxShadow: "inset 0 3.5em 0 0.1em rgba(57,114,245,0.1)  !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
      },
    },
    orangeCard: {
      borderTop: "solid 3px #F7A614",
      boxShadow: "inset 0 3.5em 0 0.1em rgba(247,166,20,0.1)  !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
      },
    },
    pinkCard: {
      borderTop: "solid 3px #FCD4E5",
      boxShadow: "inset 0 3.5em 0 0.1em rgba(252,212,229,0.1)  !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
      },
    },
    purpleCard: {
      borderTop: "solid 3px #6740D2",
      boxShadow: "inset 0 3.5em 0 0.1em rgba(103,64,210,0.1)  !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
      },
    },
    dottedCard: {
      border: "3px dashed #DCDFE6",
      backgroundColor: "#F8F9FC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0.5",
      [theme.breakpoints.down("md")]: {
        marginBottom: "25px !important",
        height: "265px",
      },
    },
    TypographyOpacity: {
      opacity: "0.3",
    },
    ButtonCounter: {
      backgroundColor: "#ECEEF2 !important",
      cursor: "default !important",
      color: "#000 !important",
      boxShadow: "none !important",
    },
    ButtonTextTransform: {
      textTransform: "none !important",
      color: "#B5BBC8 !important",
    },
    LeftBarCardsStyle: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignContent: "space-between",
      height: "480px",
      marginTop: "30px",
      marginBottom: "30px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        // alignContent: "space-evenly",
        height: "auto",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box
      className={classes.LeftBarCardsStyle}
      style={
        {
          // display: "flex",
          // flexDirection: "row",
          // flexWrap: "wrap",
          // justifyContent: "space-between",
          // alignContent: "space-between",
          // height: "auto",
          // marginTop: "30px",
          // marginBottom: "30px",
        }
      }
    >
      <Card className={classes.greenCard} sx={{ minWidth: 280 }}>
        <CardContent
          style={{
            display: "flex",
            paddingBottom: "0",
          }}
        >
          <OfflineBoltIcon sx={{ mr: 1, color: "#5DC110" }} />
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="text.secondary"
            gutterBottom
          >
            12ENGA
          </Typography>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            paddingTop: 0,
          }}
        >
          <StarRateIcon sx={{ mr: 1, color: "#3972F5", fontSize: 19 }} />
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ mr: 1, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Year 12
          </Typography>
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ pt: 0, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            English
          </Typography>
        </CardContent>
        <CardContent
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Activities due this week
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Assign Activities
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Class Calendar
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.ButtonCounter}
              size="small"
              variant="contained"
            >
              3
            </Button>
          </Box>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardActions
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Button
            startIcon={<Add />}
            className={classes.ButtonTextTransform}
            size="small"
          >
            Add Student
          </Button>
        </CardActions>
      </Card>
      {/* Card 1 */}
      <Card className={classes.blueCard} sx={{ minWidth: 280 }}>
        <CardContent
          style={{
            display: "flex",
            paddingBottom: "0",
          }}
        >
          <OfflineBoltIcon sx={{ mr: 1, color: "#3972F5" }} />
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="text.secondary"
            gutterBottom
          >
            12ENGB
          </Typography>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            paddingTop: 0,
          }}
        >
          <StarRateIcon sx={{ mr: 1, color: "#3972F5", fontSize: 19 }} />
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ mr: 1, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Year 12
          </Typography>
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ pt: 0, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            English
          </Typography>
        </CardContent>
        <CardContent
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Activities due this week
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Assign Activities
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Class Calendar
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.ButtonCounter}
              size="small"
              variant="contained"
            >
              0
            </Button>
          </Box>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardActions
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Button
            startIcon={<Add />}
            className={classes.ButtonTextTransform}
            size="small"
          >
            Add Student
          </Button>
        </CardActions>
      </Card>
      {/* Card 3 */}
      <Card className={classes.orangeCard} sx={{ minWidth: 280 }}>
        <CardContent
          style={{
            display: "flex",
            paddingBottom: "0",
          }}
        >
          <OfflineBoltIcon sx={{ mr: 1, color: "#F7A614" }} />
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="text.secondary"
            gutterBottom
          >
            08MATHS
          </Typography>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            paddingTop: 0,
          }}
        >
          <StarRateIcon sx={{ mr: 1, color: "#3972F5", fontSize: 19 }} />
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ mr: 1, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Year 8
          </Typography>
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ pt: 0, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Maths
          </Typography>
        </CardContent>
        <CardContent
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Activities due this week
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Assign Activities
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Class Calendar
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.ButtonCounter}
              size="small"
              variant="contained"
            >
              3
            </Button>
          </Box>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardActions
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Button
            startIcon={<Add />}
            className={classes.ButtonTextTransform}
            size="small"
          >
            Add Student
          </Button>
        </CardActions>
      </Card>
      {/* Card 4 */}
      <Card className={classes.pinkCard} sx={{ minWidth: 280 }}>
        <CardContent
          style={{
            display: "flex",
            paddingBottom: "0",
          }}
        >
          <OfflineBoltIcon sx={{ mr: 1, color: "#FCD4E5" }} />
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="text.secondary"
            gutterBottom
          >
            09SCI
          </Typography>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            paddingTop: 0,
          }}
        >
          <StarRateIcon sx={{ mr: 1, color: "#3972F5", fontSize: 19 }} />
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ mr: 1, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Year 9
          </Typography>
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ pt: 0, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Science
          </Typography>
        </CardContent>
        <CardContent
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Activities due this week
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Assign Activities
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Class Calendar
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.ButtonCounter}
              size="small"
              variant="contained"
            >
              6
            </Button>
          </Box>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardActions
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Button
            startIcon={<Add />}
            className={classes.ButtonTextTransform}
            size="small"
          >
            Add Student
          </Button>
        </CardActions>
      </Card>
      {/* Card 5 */}
      <Card className={classes.purpleCard} sx={{ minWidth: 280 }}>
        <CardContent
          style={{
            display: "flex",
            paddingBottom: "0",
          }}
        >
          <OfflineBoltIcon sx={{ mr: 1, color: "#6740D2" }} />
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="text.secondary"
            gutterBottom
          >
            09HASS
          </Typography>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            paddingTop: 0,
          }}
        >
          <StarRateIcon sx={{ mr: 1, color: "#3972F5", fontSize: 19 }} />
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ mr: 1, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Year 9
          </Typography>
          <Typography
            className={classes.TypographyOpacity}
            sx={{ mr: 1, fontSize: 13, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography
            sx={{ pt: 0, fontSize: 14, fontWeight: 500 }}
            color="text.secondary"
          >
            Humanities and Socia...
          </Typography>
        </CardContent>
        <CardContent
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Activities due this week
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Assign Activities
            </Typography>
            <Typography
              sx={{ pb: 1, fontSize: 13, fontWeight: 400 }}
              color="text.secondary"
            >
              Class Calendar
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.ButtonCounter}
              size="small"
              variant="contained"
            >
              1
            </Button>
          </Box>
        </CardContent>
        <CardContent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardActions
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Button
            startIcon={<Add />}
            className={classes.ButtonTextTransform}
            size="small"
          >
            Add Student
          </Button>
        </CardActions>
      </Card>
      {/* Card 6 */}
      <Card className={classes.dottedCard} sx={{ minWidth: 280 }}>
        <Add sx={{ fontSize: 50, color: "#C1C6D0" }} />
      </Card>
    </Box>
  );
}

export default LeftbarCards;
