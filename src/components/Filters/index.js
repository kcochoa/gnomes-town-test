import React from "react";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  return (
    <Container className="sortBy">
      <Row className="filter-block-width ml-auto">
        <Col>
          <Select
            placeholder="Sort by age"
            value={sortOrder}
            className="my-cool-select-top"
            onChange={handleSort}
            options={options}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
