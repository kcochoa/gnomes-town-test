import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SearchArea = () => {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by name"
              aria-label="Search by name"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchArea;
