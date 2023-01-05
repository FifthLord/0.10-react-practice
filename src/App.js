import React from "react";
import PostItem from "./components/PostItem";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import './styles/App.css'

function App() {

   return (
      <div className="App">
         {/* <Counter />
         <ClassCounter /> */}
         <PostItem post={{ id: 1, title: "JS", body: 'Description' }} />
      </div>
   );
}

export default App;
