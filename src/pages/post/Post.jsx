import { Button } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { credentials } from "../../firebase/credentials";
import useStyles from "../login/login.styles";
import logOut from "../../firebase/means/logOut";
import { getService } from "../../api/get";

const Post = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  console.log(data);
  const clases = useStyles();
  console.log(user);
  const mainCredentials = getAuth(credentials);

  useEffect(() => {
    onAuthStateChanged(mainCredentials, (user) => {
      setUser(user.uid);
    });
  }, []);
  const onClick = () => {
    getService("/api/posts", {}).then((response) => {
      setData(response.data.data);
    });
  };

  return (
    <div className={clases.root}>
      <div className={clases.button}>
        <Button
          className={clases.button}
          variant="contained"
          size="medium"
          onClick={onClick}
        >
          POST
        </Button>
        <Button
          className={clases.button}
          variant="contained"
          size="medium"
          onClick={() => {
            logOut();
          }}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};
export default Post;
