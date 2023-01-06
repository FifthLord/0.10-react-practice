import React, { useState } from "react";
import PostList from "./components/PostList";
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

   return (
      <div className="App">
         <form>
            <input type='text' placeholder="Назва посту" />
            <input type='text' placeholder="Опис посту" />
            <button>Створити пост</button>
         </form>
         <PostList posts={posts} title='Пости про JS' />
      </div>
   );
}

export default App;
