import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
   //додавання в масив відсортованих постів при зміні поля сортування в формі, або зміні поста
   const sortedPosts = useMemo(() => {
      if (sort) {
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      }
      return posts;
   }, [sort, posts]);

   return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
   //фільтрація масиву відсортованих постів при зміні значення в інпуті або в відсортованих постах 
   const sortedPosts = useSortedPosts(posts, sort);
   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
   }, [query, sortedPosts]);

   return sortedAndSearchedPosts;
}