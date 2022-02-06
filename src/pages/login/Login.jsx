import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useStyles from "./login.styles";
import enterWithEmail from "../../firebase/means/email";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleEnter from "../../firebase/means/enterWithGoogle";

const Login = () => {
  const history = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    enterWithEmail(email, password, () => {
      history("post");
    });
  };
  const googleSubmit = () => {
    googleEnter(() => {
      history("post");
    });
  };

  return (
    <div className={classes.root}>
      <Stack spacing={3} direction="row">
        <TextField
          id="outlined-required"
          label="User"
          variant="outlined"
          className={classes.colorTextField}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={classes.colorTextField}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Stack>
      <div style={{ height: "15px" }} />
      <Button
        className={classes.button}
        variant="contained"
        size="medium"
        onClick={submit}
      >
        LOGIN
      </Button>
      <div style={{ height: "15px" }} />
      <Button
        className={classes.button}
        variant="contained"
        size="medium"
        onClick={googleSubmit}
      >
        GOOGLE
      </Button>
    </div>
  );
};
export default Login;
