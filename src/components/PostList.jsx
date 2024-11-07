import React from 'react'
import {
      Table,
      Button,
      ButtonGroup,
} from "react-bootstrap";
export default function PostList({ data, loading, error }) {
      const recordes = data.map((ele, idx) => (
            <tr key={ele.id}>
                  <td>#{++idx}</td>
                  <td>{ele.title}</td>
                  <td>
                        <ButtonGroup aria-label="Basic example">
                              <Button variant="success">Edit</Button>
                              <Button variant="danger">Delete</Button>
                        </ButtonGroup>
                  </td>
            </tr>
      ))
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
                        {loading ?
                              <tr>
                                    <td colSpan={3}>please wait is loading......</td>
                              </tr>
                              : error ?
                                    <tr>
                                          <td colSpan={3}>{error}</td>
                                    </tr>
                                    : recordes
                        }
                  </tbody>
            </Table>
      )
}
