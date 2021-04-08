import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const SearchArea = ({handleSubmitCallback}) => {
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [term, setTerm] = useState("");

  const handleSelect = (e) => {
    setSearchCriteria(e);
  };

  const handleSubmit = () => {
    handleSubmitCallback(term)
  };

  return (
    <Container>
      <Row className="align-button mt-4">
        <Col>
          <InputGroup className="mb-3">
            {/* <DropdownButton
              title={
                <span>
                  <FontAwesomeIcon icon={faEllipsisV} size="lg" />
                </span>
              }
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="name">Name</Dropdown.Item>
              <Dropdown.Item eventKey="age">Age</Dropdown.Item>
              <Dropdown.Item eventKey="job">Job</Dropdown.Item>
              <Dropdown.Item eventKey="hair color">Hair Color</Dropdown.Item>
            </DropdownButton> */}
            <FormControl
              placeholder={"Search by name"}
              aria-label={"Search by name"}
              aria-describedby="basic-addon2"
              value={term}
              onChange={e => setTerm(e.target.value)}
              className="inputSearch"

            />
            <InputGroup.Append>
              <Button className="searchButton" onClick={handleSubmit} variant="outline-secondary">SEARCH</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

    </Container>
  );
};

export default SearchArea;

