import {createBrowserRouter, Navigate} from "react-router-dom";
import App from './App'
import MainLayout from "./layout/Main";
import ProyectsContainer from "./components/ProyectsContainer";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: '*',
      element: <Navigate to={'/Main/proyects'} />,
    },
    {
        path: "/Main",
        element: <MainLayout/>,
        children: [
          {
            path: "projects",
            element: <ProyectsContainer />,
          },
          {
            path: '*',
            element: <Navigate to={'projects'} />,
          },
        ],
    },
    
  ]);

