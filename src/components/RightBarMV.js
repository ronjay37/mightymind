import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@mui/material/Link";
import { Help } from "@mui/icons-material";
import Divider from "@material-ui/core/Divider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import img from "../images/working.png";

function Rightbar() {
  const useStyles = makeStyles((theme) => ({
    ButtonTextTransform: {
      textTransform: "none !important",
      minWidth: "200px !important",
    },
    RightBarStyle: {
      display: "none !important",
      [theme.breakpoints.down("md")]: {
        display: "block !important",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box
      style={{
        marginTop: 50,
      }}
      className={classes.RightBarStyle}
    >
      <Card sx={{ minWidth: 100, backgroundColor: "#D2DFFF" }}>
        <Box sx={{ textAlign: "center" }}>
          <img src={img} alt="" height="200" />
        </Box>
        <CardContent sx={{ mb: 1, paddingTop: 0, textAlign: "center" }}>
          <Typography
            variant="h6"
            noWrap
            color="black"
            component="div"
            // sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
            sx={{ mb: 1.3, mt: 1 }}
          >
            Here are your classes
          </Typography>
          <Typography variant="body2" noWrap color="black" component="div">
            Improved class focus, unit plans,<br></br>live lessons, additional
            tracking<br></br>features and much more.
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            textAlign: "center",
            maxWidth: "100%",
            paddingRight: "5px",
            paddingLeft: "5px",
            paddingTop: 0,
          }}
        >
          <Button className={classes.ButtonTextTransform} variant="contained">
            See how it works
          </Button>
        </CardContent>
        <CardContent sx={{ textAlign: "center", pt: 0 }}>
          <Link variant="body2" href="#" color="#3972F5">
            {"Getting started guide"}
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 100, mt: 3 }}>
        <CardContent
          style={{
            display: "flex",
          }}
          sx={{ mb: 1 }}
        >
          <Box sx={{ mt: 0.4, mr: 1 }}>
            <Help sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              noWrap
              color="black"
              component="div"
              // sx={{ mb: 1.3, mt: 5 }}
            >
              Help & Support
            </Typography>
          </Box>
        </CardContent>
        <CardContent sx={{ paddingTop: 0 }}>
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardContent
          sx={{ display: "flex", paddingTop: 0, paddingBottom: 0.3 }}
        >
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Visit help centre
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{ display: "flex", paddingTop: 0, paddingBottom: 0.3 }}
        >
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Send us your feedback
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{ display: "flex", paddingTop: 0, paddingBottom: 0.3 }}
        >
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Make a request or suggestion
            </Typography>
          </Box>
        </CardContent>
        <CardContent sx={{ display: "flex", paddingTop: 0, paddingBottom: 1 }}>
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Report an issue
            </Typography>
          </Box>
        </CardContent>
        <CardContent sx={{ paddingTop: 0 }}>
          <Divider
            style={{
              height: "1.3px",
            }}
          />
        </CardContent>
        <CardContent sx={{ display: "flex", paddingTop: 0, paddingBottom: 1 }}>
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Teacher Support Group
            </Typography>
          </Box>
        </CardContent>
        <CardContent sx={{ display: "flex", paddingTop: 0, paddingBottom: 0 }}>
          <Box sx={{ mr: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#A2ADC6" }} />
          </Box>
          <Box>
            <Typography variant="body2" noWrap color="black" component="div">
              Schedule a consultation
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Rightbar;
