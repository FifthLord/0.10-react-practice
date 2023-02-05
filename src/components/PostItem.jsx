import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
   const navigate = useNavigate()
   return (
      <div className="post">
         <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
         </div>
         <div className="post__btn">
            <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} >Відкрити</MyButton>
         </div>
         <div className="post__btn">
            <MyButton onClick={() => props.remove(props.post)} >Видалити</MyButton>
         </div>
      </div>
   );
};

export default PostItem;