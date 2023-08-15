import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactUs';
import UsersPage from './pages/UsersPage';
import UserDetailsPage from './pages/UserDetails';
import SommePage from './pages/SommePage';
import ResultPage from './pages/ResultPage';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact-us",
      element: <ContactPage />,
    },
    
    {
      path: "/users",
      element: <UsersPage />,
    },
    

    {
      path: "/users-details/:id",
      element: <UserDetailsPage />,
    },
    


    {
      path: "/somme",
      element: <SommePage />,
    },
    
    {
      path: "/somme/result/:result",
      element: <ResultPage />,
    },
    
    
  ]

);



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
