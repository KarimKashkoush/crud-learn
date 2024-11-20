import {
      Button,
      ButtonGroup,
} from "react-bootstrap";
export default function PostList({ data }) {
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
            <>
                  {recordes}
            </>
      )
}
