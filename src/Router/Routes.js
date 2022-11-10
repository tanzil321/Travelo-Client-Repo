import AddServices from "../Components/AddServices/AddServices";
import Blog from "../Components/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import LoadMore from "../Components/LoadMore/LoadMore";
import Login from "../Components/Login";
import Register from "../Components/Register";
import MyReviews from "../Components/Reviews/MyReviews";
import Main from "../Layout/Main";

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
            path: '/myreviews',
            element: <MyReviews></MyReviews>
        },
        {
            path: '/addservices',
            element: <AddServices></AddServices>
        },
        {
            path: '/services',
            loader:()=>{
              return fetch('http://localhost:5000/services')
            },
            element: <LoadMore></LoadMore>
        },
        {
            path: '/services/:id',
            loader:({params})=>{
              return fetch(`http://localhost:5000/services/${params.id}`)
            },
            element: <Details></Details>
        },
      ]
    }
  ]);
  export default router