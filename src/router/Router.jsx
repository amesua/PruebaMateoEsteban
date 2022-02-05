import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Post from "../pages/post/Post";

const Router = () => {
  const auth = true;
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="post" element={auth ? <Post /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default Router;
