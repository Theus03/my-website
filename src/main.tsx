import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Contact } from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: "/my-website/",
    element: <App/>,
    children: [
      {
        path: "/my-website/",
        element: <Home/>
      },
      {
        path: "/my-website/contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
