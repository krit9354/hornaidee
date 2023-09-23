import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login'
import Register from './pages/register'
import Detail from './pages/detaidom'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Chat from './pages/chat';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "Login",
    element: (
      <Login />
    ),
  },
  {
    path: "Register",
    element: (
      <Register />
    ),
  },
  {
    path: "detail",
    element: (
      <Detail />
    ),
  },
  {
    path: "chat",
    element: (
      <Chat />
    ),
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
