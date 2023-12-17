import { createBrowserRouter } from "react-router-dom";
import LayoutAuthentication from "../pages/Layout/LayoutAuth/LayoutAuthentication";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import LayoutDashBoard from "../pages/Layout/LayoutDashboard/LayoutDashBoard";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserLists from "../pages/userList/UserLists";
import PrivateRoute from "../utils/PrivateRoute";



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
       
      ],
    },
    {
        path:"/",
        element: (<PrivateRoute><LayoutDashBoard></LayoutDashBoard></PrivateRoute>),
        children:[
            {
                path:"/dashboard",
                element:(
                  <PrivateRoute>

                    <Dashboard/>
                  </PrivateRoute>
                )
            },
            {
                path:"user-lists",
                element:(
                  <PrivateRoute>
                    <UserLists/>
                  </PrivateRoute>
                )
            }
        ]
    }


  ]);