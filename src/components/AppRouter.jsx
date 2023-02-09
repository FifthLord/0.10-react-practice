import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
// import About from '../pages/About';
// import PostPage from '../pages/PostPage';
// import Posts from '../pages/Posts';
import { publicRoutes, privateRoutes } from '../router/route';

const AppRouter = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext);
   return (
      isAuth
         ?
         <Routes>
            {privateRoutes.map(route =>
               <Route
                  path={route.path}
                  element={< route.element />}
                  key={route.path} />
            )}
            {/* <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} /> */}
            <Route path='*' element={<Navigate to='/posts' replace />} />
         </Routes>
         :
         <Routes>
            {publicRoutes.map(route =>
               <Route
                  path={route.path}
                  element={< route.element />}
                  key={route.path} />
            )}
            <Route path='*' element={<Navigate to='/login' replace />} />
         </Routes>
   );
};

export default AppRouter;