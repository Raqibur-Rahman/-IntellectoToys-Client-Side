import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import AboutUs from "../pages/About/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
      ,
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ]
  }
  ,
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;