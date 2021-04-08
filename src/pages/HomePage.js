import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <Container className="bg-banner d-flex flex-column" fluid>
      <Row className="my-auto">
        <Col xs={6} sm={4} lg={3} xl={3} className="align-items-center mx-auto" >
          <Button className="w-100 btn-banner" ><Link className="link-banner" to="/all-habitants">GET TO KNOW US </Link></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
