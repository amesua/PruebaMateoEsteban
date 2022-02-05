import { Routes, Route, Navigate } from "react-router-dom";

const Router = () => {
  const auth = true;
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route
          path="post"
          element={auth ? <div>post</div> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
export default Router;
