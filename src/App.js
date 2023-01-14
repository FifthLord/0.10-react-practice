import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "JS", body: 'Description' },
      { id: 2, title: "JS 2", body: 'Description' },
      { id: 3, title: "JS 3", body: 'Description' },
   ]);

   const [selectedSort, setSelectedSort] = useState('');
   const [searchQuery, setSearchQuery] = useState('');

   function getSortedPosts() {
      console.log('was getSortedPosts()');
      if (selectedSort) {
         return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;
   }


   const sortedPosts = getSortedPosts()

   const createPost = (newPost) => {
      //*розгортаємо старі пости й додаємо туди новий об'єкт з новим ІД
      setPosts([...posts, newPost]);
   };

   //*отримуємо post з дочірнього компоненту
   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
   }

   const sortPosts = (sort) => {
      setSelectedSort(sort)
   }

   return (
      <div className="App">
         <PostForm create={createPost} />
         <hr style={{ margin: '15px 0' }} />
         <div>
            <MyInput
               value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
               placeholder='Пошук...'
            />
            <MySelect
               value={selectedSort}
               onChange={sortPosts}
               defaultValue="Сортування"
               options={[
                  { value: 'title', name: "По назві" },
                  { value: 'body', name: "По опису" }
               ]}
            />
         </div>
         {posts.length !== 0
            ? <PostList remove={removePost} posts={sortedPosts} title='Пости про JS' />
            : <h2 style={{ textAlign: 'center' }}>Пости не знайдені!</h2>
         }
      </div>
   );
}

export default App;
