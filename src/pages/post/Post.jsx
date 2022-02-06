import { Button, Grid, Stack, TextField } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { credentials } from "../../firebase/credentials";
import useStyles from "./post.styles";
import logOut from "../../firebase/means/logOut";
import { getService } from "../../api/get";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { postService } from "../../api/post";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteService } from "../../api/delete";
import EditIcon from "@mui/icons-material/Edit";
import { putService } from "../../api/put";
import StarIcon from "@mui/icons-material/Star";
import addDataFireStore from "../../firebase/fireStore/addFireStore";
import getDataFireStore from "../../firebase/fireStore/getFireStore";
import removeDataFireStore from "../../firebase/fireStore/removeFireStore";

const Post = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [dataFav, setDataFav] = useState();
  const classes = useStyles();
  const mainCredentials = getAuth(credentials);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    onAuthStateChanged(mainCredentials, (user) => {
      setUser(user.uid);
      getService(`/api/users/${user.uid}/post`, {}).then((response) => {
        setData(response.data.data);
        getDataFireStore(user.uid).then((response) => {
          setDataFav(response);
        });
      });
    });
  }, []);

  const onClick = () => {
    postService("/api/posts", {
      title: title,
      body: body,
      user_uuid: user,
    }).then(() => {
      window.location.reload();
    });
  };

  const onDelete = (id) => {
    deleteService(`/api/posts/${id}`, {}).then(() => {
      window.location.reload();
    });
  };

  const prevEdit = (user) => {
    setTitle(user.title);
    setBody(user.body);
    setEditId(user.id).then(() => {
      window.location.reload();
    });
  };

  const addFav = (item) => {
    const isRepeat = dataFav.find((itemFav) => itemFav.id === item.id);
    if (!isRepeat) {
      addDataFireStore(user, { ...item }).then(() => {
        window.location.reload();
      });
    }
  };
  const deleteFav = (item) => {
    removeDataFireStore(user, item).then(() => {
      window.location.reload();
    });
  };

  const onEdit = () => {
    putService(`/api/posts/${editId}`, { title: title, body: body }).then(
      () => {
        window.location.reload();
      }
    );
  };
  return (
    <Stack spacing={2} className={classes.root}>
      <div className={classes.buttonBox}>
        <TableContainer component={Paper} className={classes.tableStyles}>
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
                    <TableCell className={classes.tableCell}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          onDelete(item.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => {
                          prevEdit(item);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <IconButton
                        aria-label="favorite"
                        onClick={() => {
                          addFav(item);
                        }}
                      >
                        <StarIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ height: "15px" }} />
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
        <div style={{ height: "15px" }} />
        <Stack spacing={4}>
          <div className={classes.buttonBox}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              className={classes.colorTextField}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              focused
            />
            <div style={{ height: "15px" }} />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              value={body}
              className={classes.colorTextField}
              onChange={(event) => {
                setBody(event.target.value);
              }}
              focused
            />
            <div style={{ height: "15px" }} />
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
              onClick={!!editId ? onEdit : onClick}
            >
              CREATE/EDIT
            </Button>
          </div>
          <TableContainer component={Paper} className={classes.tableStyles}>
            <Table sx={{ minWidth: 650 }} aria-label="favorite list">
              <TableHead>
                <TableRow>
                  <TableCell align="right">FAVORITE LIST</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>POST</TableCell>
                  <TableCell align="center">CONTENT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!!dataFav &&
                  dataFav.map((item, index) => (
                    <TableRow key={`row-${index}`}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.body}</TableCell>
                      <TableCell className={classes.tableCell}>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            deleteFav(item.firestoreId);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </div>
      <div style={{ height: "15px" }} />
    </Stack>
  );
};
export default Post;
