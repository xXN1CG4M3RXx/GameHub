import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'

import App from './App.jsx'
import Home from './routes/Home.jsx'

import Games from './routes/Games.jsx'
import CookieClicker from './routes/CookieClicker.jsx'
import Snake from './routes/Snake.jsx'
import FlappyBird from './routes/FlappyBird.jsx'

import Account from './routes/Account.jsx'
import Signup from './routes/Signup.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "games",
        element: <Games />,
        children: [
          {
            path: "cookie-clicker",
            element: <CookieClicker />
          },
          {
            path: 'snake',
            element: <Snake />
          },
          {
            path: 'flappy-bird',
            element: <FlappyBird />
          }
        ]
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "signup",
            element: <Signup />
          },
          {
            path: "login",
            element: <Login />
          }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)