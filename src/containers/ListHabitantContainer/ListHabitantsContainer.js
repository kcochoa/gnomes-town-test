import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import _ from "lodash";
import SearchBar from "../../components/SearchBar/SearchBar";
import { listHabitants } from "../../redux/habitants/habitants-actions";
import HabitantCard from "../../components/HabitantCard";
import Filters from "../../components/Filters";
import imgLogo from "../../assets/img/logo.png";

import { TablePagination } from "@material-ui/core";

const ListHabitantsContainer = () => {
  const habitantsState = useSelector((state) => state.habitantsState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);
  const [habitants, setHabitants] = useState(habitantsState.habitantsList);
  const [sortOrder, setSortOrder] = useState("");

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(listHabitants());
  }, [dispatch]);

  useEffect(() => {
    if (habitantsState.habitantsList.length > 0) {
      setHabitants(habitantsState.habitantsList);
    }
  }, [habitantsState.habitantsList]);

  const handleSubmitCallback = (term, searchCriteria) => {
    let filtered;
    if (term) {
      switch (searchCriteria) {
        case "name":
          filtered = habitantsState.habitantsList.filter((habitant) =>
            habitant.name.toLowerCase().includes(term.toLowerCase())
          );
          break;
        case "age":
          filtered = habitantsState.habitantsList.filter((habitant) =>
            habitant.age.toString().includes(term)
          );
          break;
        case "hair_color":
          filtered = habitantsState.habitantsList.filter((habitant) =>
            habitant.hair_color.toLowerCase().includes(term.toLowerCase())
          );
          break;
        default:
          filtered = habitantsState.habitantsList;
      }
    } else {
      filtered = habitantsState.habitantsList;
    }

    setHabitants(filtered);
    setSortOrder("");
  };

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      if (habitants) {
        setHabitants(_.orderBy(habitants, ["age"], [sortOrder.value]));
      } else {
        setHabitants(
          _.orderBy(habitantsState.habitantsList, ["age"], [sortOrder.value])
        );
      }
    }
  }

  const handleClickCallback = (id) => {
    console.log(id);
    history.push("/habitant/" + id);
  };

  return habitantsState.loading ? (
    <h2>Loading...</h2>
  ) : habitantsState.error ? (
    <h2>{habitantsState.lastRequesErrorMessage}</h2>
  ) : habitants ? (
    <div className="bg-pages">
      <Container className="d-flex flex-sm-wrap align-items-center">
        <img src={imgLogo} alt="LOGO" height="200"/>
        <SearchBar handleSubmitCallback={handleSubmitCallback} />
      </Container>
      <Filters handleSort={handleSort} sortOrder={sortOrder} />
      <Container>
        <Row className="align-items-stretch mt-5 d-flex d-xs-block  mx-auto">
          {habitants.slice(page * limit, page * limit + limit).map((hab) => (
            <Col  key={hab.id.toString()} xs={12} sm={6} lg={4} className="mt-5">
              <HabitantCard
                id={hab.id}
                name={hab.name}
                age={hab.age}
                weight={hab.weight}
                height={hab.height}
                hairColor={hab.hair_color}
                handleClickCallback={handleClickCallback}
              />
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <TablePagination
              className="mx-auto"
              component="div"
              count={habitants.length}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[6, 12, 24]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <h2>There's no data to display</h2>
  );
};

export default ListHabitantsContainer;
