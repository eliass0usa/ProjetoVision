import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Router } from "./Router.1";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

const Router = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;