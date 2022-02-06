import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
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
    marginTop: "15px",
    flexDirection: "column",
  },

  directionContent: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  space: {
    height: "15px",
  },
});

export default useStyles;
