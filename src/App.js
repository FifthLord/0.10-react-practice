import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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

   const [title, setTitle] = useState('');

   const addNewPost = (e) => {
      e.preventDefault()
      console.log(title);
   }

   return (
      <div className="App">
         <form>
            {/* Керований компонент */}
            <MyInput
               value={title}
               onChange={e => setTitle(e.target.value)}
               type='text'
               placeholder="Назва посту"
            />
            <MyInput
               type='text'
               placeholder="Опис посту"
            />
            <MyButton onClick={addNewPost}>Створити пост</MyButton>
         </form>
         <PostList posts={posts} title='Пости про JS' />
      </div>
   );
}

export default App;
