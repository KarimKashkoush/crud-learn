import { memo } from 'react';
import React from 'react'
import {
      Table
} from "react-bootstrap";
import PostList from './PostList';

function PostListItem({ data, deleteRecoed }) {

      return (
            <Table striped bordered hover>
                  <thead>
                        <tr>
                              <th>#</th>
                              <th style={{ width: "70%" }}>Title</th>
                              <th style={{ width: "10%" }}></th>
                        </tr>
                  </thead>
                  <tbody>
                        <PostList data={data} deleteRecoed={deleteRecoed} />
                  </tbody>
            </Table>
      )
}

export default memo(PostListItem);