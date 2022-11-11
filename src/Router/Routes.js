import AddServices from "../Components/AddServices/AddServices";
import Blog from "../Components/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import LoadMore from "../Components/LoadMore/LoadMore";
import Login from "../Components/Login";
import Register from "../Components/Register";
import MyReviews from "../Components/Reviews/MyReviews";
import UpdateReview from "../Components/UpdateReview/UpdateReview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/updatereview/:id',
            element: <UpdateReview></UpdateReview>,
            loader:({params})=>{
                return fetch(`https://travelo-server.vercel.app/comments/${params.id}`)
            }
        },
        {
            path: '/myreviews',
            element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
            path: '/addservices',
            element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
            path: '/services',
            loader:()=>{
              return fetch('https://travelo-server.vercel.app/services')
            },
            element: <LoadMore></LoadMore>
        },
        {
            path: '/services/:id',
            loader:({params})=>{
              return fetch(`https://travelo-server.vercel.app/services/${params.id}`)
            },
            element: <Details></Details>
        },
      ]
    }
  ]);
  export default router