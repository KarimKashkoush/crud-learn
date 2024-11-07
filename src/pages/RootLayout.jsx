import React from 'react'
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import {
      Container,
      Row,
      Col,
} from "react-bootstrap";
import { useSelector } from 'react-redux';

export default function RootLayout() {
      const theme = useSelector((state) => state.themeSlice.mode)
      return (
            <section className={`App ${theme}`}>
                  <Container>
                        <Header />
                        <Row>
                              <Col xs={{ span: 8, offset: 2 }}>
                                    <Outlet />
                              </Col>
                        </Row>
                  </Container>
            </section>
      )
}
