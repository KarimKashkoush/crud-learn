import React from 'react'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchPosts } from "../state/postsSlice"
export default function Index() {
      const dispatch = useDispatch();
      const posts = useSelector((state) => state.postsSlice);

      useEffect(() => {
            dispatch(fetchPosts())
      }, []);

      return (
            <PostList />
      )
}
