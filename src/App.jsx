import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from './components/Home'
import Success from './components/Success'
import Layout from './components/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/success",
          element:<Success />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
