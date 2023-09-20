import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/spacecrafts" element={<Spacecrafts />}></Route>
      <Route path="/spacecraft/build" element={<SpacecraftBuild />}></Route>
      <Route path="/spacecraft/:id" element={<Spacecraft />}></Route>
      <Route path="/planets" element={<Planets />}></Route>
    </Routes>
  );
}

export default AppRoute;
