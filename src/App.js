import React, { useState } from "react";
// import { useRef } from "react";
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

   //*двусторонє звя'зування Керованого компоненту
   const [post, setPost] = useState({ title: '', body: '', });

   //*односторонє звя'зування Не керованого компоненту
   // const bodyInputRef = useRef();

   const addNewPost = (e) => {
      e.preventDefault()
      //*розгортаємо старі пости й додаємо туди новий об'єкт з новим ІД
      setPosts([...posts, { ...post, id: Date.now() }]);
      //*обнуляємо інпути
      setPost({ title: '', body: '', })
   }

   return (
      <div className="App">
         <form>
            {/* Керований компонент */}
            <MyInput
               value={post.title}
               onChange={e => setPost({ ...post, title: e.target.value })}
               type='text'
               placeholder="Назва посту"
            />
            {/* Не Керований компонент */}
            {/* <MyInput
               ref={bodyInputRef}
               type='text'
               placeholder="Опис посту"
            /> */}
            <MyInput
               value={post.body}
               onChange={e => setPost({ ...post, body: e.target.value })}
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
