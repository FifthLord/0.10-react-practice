import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "JS", body: 'Description' },
      { id: 2, title: "JS 2", body: 'Description' },
      { id: 3, title: "JS 3", body: 'Description' },
   ]);

   const [filter, setFilter] = useState({ sort: '', query: '' })

   //додавання в масив відсортованих постів при зміні поля сортування в формі, або зміні поста
   const sortedPosts = useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
   }, [filter.sort, posts]);

   //фільтрація масиву відсортованих постів при зміні значення в інпуті або в відсортованих постах 
   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
   }, [filter.query, sortedPosts]);

   const createPost = (newPost) => {
      //*розгортаємо старі пости й додаємо туди новий об'єкт з новим ІД
      setPosts([...posts, newPost]);
   };

   //*отримуємо post з дочірнього компоненту
   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
   }

   return (
      <div className="App">
         <PostForm create={createPost} />
         <hr style={{ margin: '15px 0' }} />
         <PostFilter
            filter={filter}
            setFilter={setFilter}
         />
         {sortedAndSearchedPosts.length !== 0
            ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Пости про JS' />
            : <h2 style={{ textAlign: 'center' }}>Пости не знайдені!</h2>
         }
      </div>
   );
}

export default App;
