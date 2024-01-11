import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Home from "./Components/default/Home";
import Pnf from "./Components/default/Pnf";


function App(props){
  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/*'} element={<Pnf/>} />
      </Routes>

    </BrowserRouter>
  )
}
export default App
