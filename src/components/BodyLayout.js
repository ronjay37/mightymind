import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import RightbarMV from "./RightBarMV";
import { makeStyles } from "@material-ui/core";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  BodyLayout: {
    display: "grid !important",
    gridTemplateColumns: "875px 250px !important",
    backgroundColor: "#F8F9FC !important",
    gridColumnGap: "35px !important",
  },
}));

function BodyLayout() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#F8F9FC",
      }}
    >
      <Container maxWidth="lg">
        <Container
          maxWidth="lg"
          className={classes.BodyLayout}
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "875px 250px",
          //   backgroundColor: "#F8F9FC",
          //   gridColumnGap: "35px",
          // }}
        >
          <Leftbar />
          <Rightbar />
        </Container>
        <RightbarMV />
      </Container>
    </div>
  );
}

export default BodyLayout;
