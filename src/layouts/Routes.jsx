import Layout from "./Layout"
import Home from "../components/web/home/Home";
import Categories from "../components/web/categories/Categories";
import CategoryDetails from "../components/web/categories/CategoryDetails";
import Products from "../components/web/products/Products";
import UserCart from "../components/web/usercart/UserCart";
import Register from "../components/web/register/Register";
import Login from "../components/web/login/Login";
import Dlayout from "./Dlayout";
import Dhome from "../components/dashboard/dhome/Dhome";
import Dcategories from "../components/dashboard/dcategories/Dcategories";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/web/protectedRoute/ProtectedRoute";
import Profile from "../components/web/profile/Profile";
import ForgetPassword from "../components/web/forgetPassword/ForgetPassword";
import SendCode from "../components/web/sendCode/SendCode";
import Userinfo from "../components/web/profile/Userinfo";
import Usercontact from "../components/web/profile/Usercontact";
import CreateOrder from "../components/web/createorder/CreateOrder";
import GetOrder from "../components/web/getOrder.jsx/GetOrder";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
      index:true,
      element: <Home/>,
      },
      {
        path: "categories",
        element: <Categories/>,
      },
      {
        path: "products/category/:categoryId",
        element: <CategoryDetails/>,
      },
      {
        path: "product/:productId",
        element: <Products/>,
      },
      {
        path: "cart",
        element: <ProtectedRoute><UserCart /></ProtectedRoute>,
      },
      {
        path: "createorder",
        element: <ProtectedRoute><CreateOrder /></ProtectedRoute>,
      },
      {
        path: "profile",
        element:
       <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>,
        children:[
          {
            index:true,
            element:<Userinfo/>
          },
          {
            path:'contact',
            element:<Usercontact/>
          },
          {
            path:'getorder',
            element:<GetOrder/>
          },
        ]
      },
      {
          path: "register",
          element: <Register/>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "sendcode",
        element: <SendCode />,
      },
      {
          path:'*',
          element:<h2>page not found --- web</h2>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dlayout/>,
    children:[
      {
      path: "home",
      element: <Dhome/>,
      },
      {
        path: "categories",
        element: <Dcategories/>,
      },
      {
          path:'*',
          element:<h2>page not found --- dashboard</h2>
      }
    ]
  },
]);
