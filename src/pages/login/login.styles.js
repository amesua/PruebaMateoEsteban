import { makeStyles } from "@mui/styles";
import { borderLeft } from "@mui/system";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8FBEFF",
  },
  button: {
    width: "50%",
    marginTop: "15px",
  },
  buttonBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default useStyles;
