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
   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(params.id)
      setPost(response.data);
   });

   useEffect(() => {
      fetchPostById(params.id)
   }, [])

   return (
      <div>
         <h2>Сторінка посту з ІД = {params.id}</h2>
         {isLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
            : <div>{post.id}. {post.title}</div>
         }
      </div>
   );
};

export default PostPage;