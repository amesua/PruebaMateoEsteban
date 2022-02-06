import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D7DBDD",
    flexDirection: "column",
  },
  button: {
    width: "20%",
    marginTop: "15px",
    alignItems: "center",
    paddingLeft: "30%",
  },
  buttonBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  colorTextField: {
    backgroundColor: "#FDFEFE ",
  },
});

export default useStyles;
