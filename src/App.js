import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "JS", body: 'Description' },
      { id: 2, title: "JS 2", body: 'Description' },
      { id: 3, title: "JS 3", body: 'Description' },
   ]);

   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [modal, setModal] = useState(false);
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
   const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
   })

   useEffect(() => {
      fetchPosts()
   }, [])

   const createPost = (newPost) => {
      //*розгортаємо старі пости й додаємо туди новий об'єкт з новим ІД
      setPosts([...posts, newPost]);
      setModal(false);
   };

   //*отримуємо post з дочірнього компоненту
   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
   }

   return (
      <div className="App">
         <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
            Створити користувача
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </MyModal>
         <hr style={{ margin: '15px 0' }} />
         <PostFilter
            filter={filter}
            setFilter={setFilter}
         />
         {postError &&
            <h1>Виникла помилка {postError}</h1>
         }
         {isPostsLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Пости про JS' />
         }

      </div>
   );
}

export default App;
