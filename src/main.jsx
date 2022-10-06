import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ErrorPage } from './ErrorPage';
import './index.css'
import { Contact } from './routes/Contact';
import { Root } from './routes/Root';
import { Edit } from './routes/Edit';
import { loader as rootLoader } from './routes/Root';
import { action as rootAction } from './routes/Root';
import { action as editAction } from './routes/Edit';
import { action as destroyAction } from './routes/Destroy';
import { loader as contactLoader } from './routes/Contact';
import { Index } from './routes/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <Edit />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:id/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error uwu!</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
