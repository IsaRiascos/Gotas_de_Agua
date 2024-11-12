import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Page404 from "./pages/page-404/page404";
import Home from "./pages/home/Home";
import Conta from "./pages/Conta/contaminacion";
import Escazes from "./pages/escazes/Escazes";
import EscazesCyC from "./pages/escazes/EscazesCyC";
import Acidificacion from "./pages/acificacion/Acidficacion";
import Perfil from "./pages/perfil/Perfil";
import Scena from "./pages/Conta/scena-conta/Scena";



const router = createBrowserRouter([

  {path:"/",element: <Navigate to= "/Login" replace/>},
  {path: "/login",element: <Login />},
  {path: "/*" ,element: <Page404/>},
  {path: "/home", element: <Home/>},
  {path: "/contaminacion", element: <Conta/>},
  {path: "/escazes", element: <Escazes/>},
  {path: "/escazes-cyc", element: <EscazesCyC/>},
  {path: "/acidificacion", element: <Acidificacion/>},
  {path: "/perfil", element: <Perfil/>, },
  {path: "/Scena", element: <Scena/>, },


  
  
  

  

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

  