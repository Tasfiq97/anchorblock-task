/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"
interface AuthState {
    [x: string]: any;
    user : {
      id: number;
      token: string;
    };  
    isLoading: boolean;
    isError: boolean;
    error: string;
  }

const PrivateRoute = ({children}:PropsWithChildren) => {
    const pathname=useLocation()

    const {
        isLoading,
        user: {token},
    } = useSelector((state:AuthState) => state.auth);
    const storedUser = localStorage.getItem("user");
    
      const jsonStore=(JSON.parse(storedUser as string));

      if (isLoading) {
        return <>loading....</>;
      }
      if (!isLoading && !jsonStore?.token) {
        return <Navigate to="/signup" state={{ path: pathname }} />;
      }
  return children;
}

export default PrivateRoute