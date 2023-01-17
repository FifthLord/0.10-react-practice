import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

   if (!posts.length) {
      return (
         <h2 style={{ textAlign: 'center' }}>Пости не знайдені!</h2>
      )
   };

   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         {/* <Counter />
         <ClassCounter /> */}
         {/* <PostItem post={ id: 1, title: "JS", body: 'Description'} /> */}
         {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
         )}
      </div>
   );
};

export default PostList;