import {createBrowserRouter} from "react-router-dom";
import App from './App'
import MainPage from "./layout/MainPage/MainPage";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/Main",
        element: <MainPage/>
    }
  ]);

