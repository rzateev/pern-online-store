import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Auth/>
        <AppRouter>
         </AppRouter>
    </BrowserRouter>
  );
}

export default App;
