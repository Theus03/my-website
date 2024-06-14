import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Contact } from './pages/Contact.tsx'
import { Skills } from './pages/Skills.tsx'
import { Resume } from './pages/Resume.tsx'
import { Projects } from './pages/Projects.tsx'
import { Editors } from './components/Editors.tsx'
import { Design } from './components/Design.tsx'

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
        path: "/my-website/skills",
        element: <Skills/>,
      },
      {
        path: "/my-website/skills/editors",
        element: <Editors/>
      },
      {
        path: "/my-website/skills/design",
        element: <Design/>
      },
      {
        path: "/my-website/projects",
        element: <Projects/>
      },
      {
        path: "/my-website/resume",
        element: <Resume/>
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
