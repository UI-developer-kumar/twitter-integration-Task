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
import Explore from './features/pages/Explore'


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
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
);

