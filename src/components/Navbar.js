import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Help } from "@mui/icons-material";
// import { deepOrange, purple } from "@material-ui/core/colors";

function Navbar() {
  const useStyles = makeStyles((theme) => ({
    NavBackround: {
      backgroundColor: "#0F2551",
    },

    TypographyOpacity: {
      opacity: "0.3",
    },
    TypographyOpacityDivider: {
      opacity: "0.3",
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    HelpCentreOpacity: {
      opacity: "0.5",
      // display: "none !important",
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },

    ButtonOpacity: {
      opacity: "0.7",
    },
  }));

  const classes = useStyles();

  const pages = ["Home", "Classes", "Planner", "School Data", "Library"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // maxWidth="lg"
        position="fixed"
        style={{
          backgroundColor: "#0F2551",
          paddingRight: 24,
          paddingLeft: 24,
        }}
      >
        {/* <Container maxWidth="lg" className={classes.NavBackround}> */}
        <Toolbar>
          <FlutterDashIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 1, mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MIGHTY MINDS
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 2, mr: 2, display: { xs: "none", md: "flex" } }}
            className={classes.TypographyOpacity}
          >
            |
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              style={{
                borderBottom: "solid 3px blue",
              }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.ButtonOpacity}
            >
              Classes
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.ButtonOpacity}
            >
              Planner
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.ButtonOpacity}
            >
              School Data
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.ButtonOpacity}
            >
              Library
            </Button>
          </Box>
          <Help
            sx={{ mr: 1, display: { xs: "none", md: "flex" } }}
            className={classes.HelpCentreOpacity}
          />
          <Box>
            <Typography
              variant="Subtitle1"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "flex" } }}
              className={classes.HelpCentreOpacity}
            >
              Help Centre
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ ml: 5, mr: 5 }}
              // display: { xs: "none", md: "flex"
              className={classes.TypographyOpacityDivider}
            >
              |
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <div>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="white"
                    component="div"
                    sx={{
                      mt: 0,
                      mr: 2,
                      display: {
                        xs: "none",
                        md: "flex",
                        justifyContent: "flex-end",
                      },
                    }}
                  >
                    Jasmin Finn
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    noWrap
                    component="div"
                    sx={{ mt: 0, mr: 2, display: { xs: "none", md: "flex" } }}
                    className={classes.TypographyOpacity}
                  >
                    Teacher Account
                  </Typography>
                </div>
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: "#8660F1",
                    width: "3",
                    height: "3",
                    borderRadius: "5px",
                  }}
                >
                  JF
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
}

export default Navbar;
