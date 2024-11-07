import React from 'react'
import PostListItem from '../components/PostListItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchPosts } from "../state/postsSlice"
import Loading from '../components/Loading';

export default function Index() {
      const dispatch = useDispatch();
      const { records, loading, error } = useSelector((state) => state.postsSlice);

      useEffect(() => {
            dispatch(fetchPosts())
      }, [dispatch]);

      return (
            <section>
                  <Loading loading={loading} error={error}>
                        <PostListItem data={records} />
                  </Loading>
            </section>
      )
}
