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
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchArea = ({ handleSubmitCallback }) => {
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [term, setTerm] = useState("");

  const handleSelect = (e) => {
    setSearchCriteria(e);
  };

  const handleSubmit = () => {
    handleSubmitCallback(term, searchCriteria);
  };

  return (
    <Container>
      <Row className="align-button">
        <Col className="pr-0">
          <InputGroup className="seach-block-width mb-3 ml-auto">
            <DropdownButton
              title={
                <span>
                  <FontAwesomeIcon icon={faFilter} size="lg" />
                </span>
              }
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="name">Name</Dropdown.Item>
              <Dropdown.Item eventKey="age">Age</Dropdown.Item>
              <Dropdown.Item eventKey="hair_color">Hair Color</Dropdown.Item>
            </DropdownButton>
            <FormControl
              placeholder={"Search by " + searchCriteria}
              aria-label={"Search by " + searchCriteria}
              aria-describedby="basic-addon2"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="inputSearch"
            />
            <InputGroup.Append>
              <Button
               data-testid="search"
                className="searchButton"
                onClick={handleSubmit}
                variant="outline-secondary"
              >
                SEARCH
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchArea;
