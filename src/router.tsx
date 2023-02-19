import { Routes, Route } from "react-router-dom";
import { LayoutHeader } from "./layouts/LayoutHeader";
import { Details } from "./screens/details";
import { Home } from "./screens/home";

export function Router () {
  return(
    <Routes>
      <Route path='/' element={<LayoutHeader/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Route>
    </Routes>
  )
}