
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser,  } from './features/usersApi/authSlice';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';

function App() {

  const dispatch = useDispatch();
  // const navigate=useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(restoreUser(JSON.parse(storedUser)));
    } 
  }, [dispatch]);
  
  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
