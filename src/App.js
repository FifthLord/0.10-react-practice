import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "JS", body: 'Description' },
      { id: 2, title: "JS 2", body: 'Description' },
      { id: 3, title: "JS 3", body: 'Description' },
   ]);

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
         <div>
            <MySelect
               defaultValue="Сортування"
               options={[
                  { value: 'title', name: "По назві" },
                  { value: 'body', name: "По опису" }
               ]}
            />
         </div>
         {posts.length !== 0
            ? <PostList remove={removePost} posts={posts} title='Пости про JS' />
            : <h2 style={{ textAlign: 'center' }}>Пости не знайдені!</h2>
         }
      </div>
   );
}

export default App;
