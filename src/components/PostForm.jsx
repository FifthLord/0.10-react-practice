import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
   //*двусторонє звя'зування Керованого компоненту
   const [post, setPost] = useState({ title: '', body: '', });

   //*односторонє звя'зування Не керованого компоненту
   // const bodyInputRef = useRef();

   const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
         ...post, id: Date.now()
      }
      create(newPost)
      //*обнуляємо інпути
      setPost({ title: '', body: '', })
   }

   return (
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
   );
};

export default PostForm;