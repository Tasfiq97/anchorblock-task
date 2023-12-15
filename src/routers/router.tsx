import { createBrowserRouter } from "react-router-dom";
import LayoutAuthentication from "../pages/Layout/LayoutAuth/LayoutAuthentication";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import LayoutDashBoard from "../pages/Layout/LayoutDashboard/LayoutDashBoard";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserLists from "../pages/userList/UserLists";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutAuthentication></LayoutAuthentication>,
      children: [
        {
          path: "/",
          element: <SignIn/>,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        // {
        //   path: "/generatePdf",
        //   element: <GeneratePdf />,
        // },
      ],
    },
    {
        path:"dashboard",
        element: <LayoutDashBoard></LayoutDashBoard>,
        children:[
            {
                path:"home",
                element:<Dashboard/>
            },
            {
                path:"user-lists",
                element:<UserLists/>
            }
        ]
    }


  ]);