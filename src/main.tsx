import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router.tsx'
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 4000,
  offset: '50px',
  transition: transitions.SCALE
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
     
    <App />

    </Provider>    </AlertProvider>
  </React.StrictMode>,
)
