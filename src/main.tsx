import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
    <App />
    </Provider>
    </AlertProvider>
  </React.StrictMode>,
)
