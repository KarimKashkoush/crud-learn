import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
      Container,
      Row,
      Col,
      Button,
} from "react-bootstrap";
import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
      const error = useRouteError();
      const navigate = useNavigate()
      return (
            <Container>
                  <Row>
                        <Col xs={{ span: 8, offset: 2 }}>
                              <div>
                                    <h1>Oops!</h1>
                                    <p>Sorry, an unexpected error has occurred.</p>
                                    <p>
                                          <i>{error.statusText || error.message}</i>
                                    </p>
                                    <Button variant='Link' onClick={() => { navigate('/', { replace: true }) }}>Go Back</Button>
                              </div>
                        </Col>
                  </Row>
            </Container>
      )
}
