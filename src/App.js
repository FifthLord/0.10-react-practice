import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css'


function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/about" element={<About />} exact />
            <Route path="/posts" element={<Posts />} exact />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
