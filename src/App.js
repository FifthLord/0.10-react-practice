import React, { useState } from "react";
import PostForm from "./components/PostForm";
// import { useRef, useState  } from "react";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
// import PostItem from "./components/PostItem";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
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
   }


   return (
      <div className="App">
         <PostForm create={createPost} />
         <PostList posts={posts} title='Пости про JS' />
      </div>
   );
}

export default App;
