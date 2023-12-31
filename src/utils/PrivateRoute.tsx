/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../components/Loading/Loading";
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
        return <>
        <Loading/>
        </>
      }
      if ( !jsonStore?.token) {
      if (!isLoading && !token) {
        return <Navigate to="/" state={{ path: pathname }} />;
      }
    }
  return children;
}

export default PrivateRoute