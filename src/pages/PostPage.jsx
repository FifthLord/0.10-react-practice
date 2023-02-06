import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
   const params = useParams();
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);
   const [fetchPostById, isLoading, error] = useFetching(async () => {
      const response = await PostService.getById(params.id)
      setPost(response.data);
   });
   const [fetchComments, isComLoading, comError] = useFetching(async () => {
      const response = await PostService.getCommentsById(params.id)
      setComments(response.data);
   });

   useEffect(() => {
      fetchPostById(params.id)
      fetchComments(params.id)
   }, [])


   return (
      <div>
         <h2>Сторінка посту з ІД = {params.id}</h2>
         {isLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
            : <div>{post.id}. {post.title}</div>
         }
         <h2>Коментарі</h2>
         {isComLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
            : <div>
               {comments.map(comm =>
                  <div style={{ marginTop: 15 }}>
                     <h5>{comm.email}</h5>
                     <div>{comm.body}</div>
                  </div>
               )}
            </div>
         }
         <div>
         </div>
      </div>
   );
};

export default PostPage;