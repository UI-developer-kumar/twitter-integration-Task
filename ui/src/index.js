import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './features/common/Home';
import Login from './features/user/Login';
import { Provider } from 'react-redux';
import { store } from './App/store';
// import Dashboard from './features/dashboard/Dashboard';
// import WelcomePage from './features/common/WelcomePage';
import Explore from './features/pages/Explore'
import TweetFeed from './features/pages/TweetFeed';


const router = createBrowserRouter([
            {
              path:"/",
              element:<Login></Login>,
            }, 
            {
              path:"/home",
              element:<Home></Home>,
            },
            
            {
              path:"/explore",
              element:<Explore></Explore>
            },
            // {
            //   path:"/dashboard",
            //   element:<Dashboard></Dashboard>
            // },
              

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
);

