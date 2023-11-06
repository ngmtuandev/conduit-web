import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BodyHome from "../component/BodyHome";
import Login from "../component/Login";
import Register from "../component/Register";
import HomePage from "../pages/HomePage";
import BottomHeader from "../component/BottomHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <BottomHeader></BottomHeader> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

export default router;
