import PostPage from "../pages/PostPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from "../pages/Login";


export const privateRoutes = [
   { path: '/about', element: About },
   { path: "/posts/:id", element: PostPage },
   { path: "/posts", element: Posts },
];

export const publicRoutes = [
   { path: '/login', element: Login },
];