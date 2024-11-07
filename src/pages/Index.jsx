import React from 'react'
import PostListItem from '../components/PostListItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchPosts, deletePost } from "../state/postsSlice"
import Loading from '../components/Loading';
import { useCallback } from 'react';

export default function Index() {
      const dispatch = useDispatch();
      const { records, loading, error } = useSelector((state) => state.postsSlice);

      useEffect(() => {
            dispatch(fetchPosts())
      }, [dispatch]);

      const deleteRecoed = useCallback((id) => dispatch(deletePost(id)), [dispatch])

      return (
            <section>
                  <Loading loading={loading} error={error}>
                        <PostListItem data={records} deleteRecoed={deleteRecoed} />
                  </Loading>
            </section>
      )
}
