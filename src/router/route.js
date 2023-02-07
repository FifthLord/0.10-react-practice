import PostPage from "../pages/PostPage";
import About from "../pages/About";
import Posts from "../pages/Posts";


export const routes = [
   { path: '/about', element: About },
   { path: "/posts/:id", element: PostPage },
   { path: "/posts", element: Posts },
]