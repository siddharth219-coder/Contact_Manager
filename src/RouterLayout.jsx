import { createBrowserRouter, RouterProvider } from "react-router-dom"

const RouterLayout = () => {

    const routes=createBrowserRouter([
        {
            path:"/",
        }
    ])

  return <RouterProvider router={routes}/>
}

export default RouterLayout