import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import ConverterPage from './components/ConverterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/converter",
    element: <ConverterPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

