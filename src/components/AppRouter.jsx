import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/about" element={<About />} exact />
         <Route path="/posts" element={<Posts />} exact />
         <Route path="/posts/:id" element={<PostPage />} exact />
         <Route path='*' element={<Navigate to='/posts' replace />} />
      </Routes>
   );
};

export default AppRouter;