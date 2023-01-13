import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Feed, {loader as feedLoader} from './routes/feed'
import SignIn, {loader as signInLoader, action as signInAction} from './routes/singin'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    loader: feedLoader
  },
  {
    path: "/signin",
    element: <SignIn />,
    loader: signInLoader,
    action: signInAction
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
