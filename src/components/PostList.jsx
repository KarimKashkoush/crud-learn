import {
      Button,
      ButtonGroup,
} from "react-bootstrap";
function PostList({ data, deleteRecoed }) {

      const recordes = data.map((ele, idx) => (
            <tr key={ele.id}>
                  <td>#{++idx}</td>
                  <td>{ele.title}</td>
                  <td>
                        <ButtonGroup aria-label="Basic example">
                              <Button variant="success">Edit</Button>
                              <Button variant="danger" onClick={() => deleteRecoed(ele.id)}>Delete</Button>
                        </ButtonGroup>
                  </td>
            </tr>
      ))
      return (
            <>
                  {recordes}
            </>
      )
}

export default PostList;
