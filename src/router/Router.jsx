import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { credentials } from "../firebase/credentials";
import Login from "../pages/login/Login";
import Post from "../pages/post/Post";

const Router = () => {
  const [auth, getUser] = useState();
  console.log(!!auth);
  const mainCredentials = getAuth(credentials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(mainCredentials, (user) => {
      getUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="post"
            element={!!auth ? <Post /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};
export default Router;
