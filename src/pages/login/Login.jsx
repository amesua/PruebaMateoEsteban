import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useStyles from "./login.styles";
import enterWithEmail from "../../firebase/means/email";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleEnter from "../../firebase/means/enterWithGoogle";
import facebookEnter from "../../firebase/means/enterWithFacebook";

const Login = () => {
  const history = useNavigate();
  const clases = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    enterWithEmail(email, password, () => {
      history("post");
    });
  };
  const googleSubmit = () => {
    googleEnter();
  };
  const facebookSubmit = () => {
    facebookEnter();
  };

  return (
    <div className={clases.root}>
      <Stack spacing={3} direction="column">
        <Stack spacing={3} direction="row">
          <TextField
            id="outlined-required"
            label="User"
            variant="outlined"
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
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Stack>
        <div className={clases.buttonBox}>
          <Button
            className={clases.button}
            variant="contained"
            size="medium"
            onClick={submit}
          >
            LOGIN
          </Button>
          <Button
            className={clases.button}
            variant="contained"
            size="medium"
            onClick={facebookEnter}
          >
            FACEBOOK
          </Button>
          <Button
            className={clases.button}
            variant="contained"
            size="medium"
            onClick={googleSubmit}
          >
            GOOGLE
          </Button>
        </div>
      </Stack>
    </div>
  );
};
export default Login;
