import React from 'react'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchPosts } from "../state/postsSlice"
import { light, dark } from "../state/darkLightMode";

export default function Index() {
      const dispatch = useDispatch();
      const { records, loading, error } = useSelector((state) => state.postsSlice);
      const mode = useSelector((state) => state.modeSlice.mode)

      console.log(mode)
      useEffect(() => {
            dispatch(fetchPosts())
      }, [dispatch]);

      return (
            <section className={mode}>
                  <PostList data={records} loading={loading} error={error} />
                  <button onClick={dispatch(dark())}>Dark Mode</button>
                  <button onClick={dispatch(light())}>Light Mode</button>
            </section>
      )
}
