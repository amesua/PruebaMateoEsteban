import { Button, Grid, Stack, TextField } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { credentials } from "../../firebase/credentials";
import useStyles from "../login/login.styles";
import logOut from "../../firebase/means/logOut";
import { getService } from "../../api/get";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { grid } from "@mui/system";

const Post = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  console.log(data);
  const classes = useStyles();
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
    <Stack spacing={2} className={classes.root}>
      <div className={classes.buttonBox}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>POST</TableCell>
                <TableCell align="center">CONTENT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!!data &&
                data.map((item, index) => (
                  <TableRow key={`row-${index}`}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.button}>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            onClick={onClick}
          >
            POST
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            onClick={() => {
              logOut();
            }}
          >
            LOGOUT
          </Button>
        </div>
        <div style={{ height: "15px" }} />
        <Stack spacing={4}>
          <div className={classes.buttonBox}>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <div style={{ height: "15px" }} />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              defaultValue=" "
            />
            <div style={{ height: "15px" }} />
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
            >
              CREATE/EDIT
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};
export default Post;
