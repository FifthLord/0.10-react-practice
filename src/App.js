import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css'


function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/about" element={<About />} exact />
            <Route path="/posts" element={<Posts />} exact />
            <Route path='*' element={<Navigate to='/posts' replace />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
