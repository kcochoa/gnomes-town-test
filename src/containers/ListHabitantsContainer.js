import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import _ from 'lodash';
import SearchBar from "../components/SearchBar/SearchBar";
import { listHabitants } from "../redux/habitants/habitants-actions";
import HabitantCard from "../components/HabitantCard";
import Filters from "../components/Filters"


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

  const handleSubmitCallback = (term) => {
    let filtered;
    if (term) {
      filtered = habitantsState.habitantsList.filter((habitant) =>
        habitant.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setHabitants(filtered);
    setSortOrder("");
  };

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      if(habitants){

        setHabitants(_.orderBy(habitants, ['age'], [sortOrder.value]));
      }
      else{
        setHabitants(_.orderBy(habitantsState.habitantsList, ['age'], [sortOrder.value]));
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
  ) : habitantsState.habitantsList ? (
    <div className="bg-pages">
      <SearchBar handleSubmitCallback={handleSubmitCallback} />
      <Filters handleSort={handleSort} sortOrder={sortOrder}/>
      <Container>
        <Row className="d-flex align-items-stretch">
          {habitants
            ? habitants.slice(page * limit, page * limit + limit).map((hab) => (
                <Col xs={12} sm={6} lg={4} className="mt-5">
                  <HabitantCard
                    key={hab.id}
                    id={hab.id}
                    name={hab.name}
                    age={hab.age}
                    weight={hab.weight}
                    height={hab.height}
                    hairColor={hab.hair_color}
                    handleClickCallback={handleClickCallback}
                  />
                </Col>
              ))
            : habitantsState.habitantsList
                .slice(page * limit, page * limit + limit)
                .map((hab) => (
                  <Col xs={12} sm={6} lg={4} className="mt-5">
                    <HabitantCard
                      key={hab.id}
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
          <TablePagination
            className="mx-auto"
            component="div"
            count={habitantsState.habitantsList.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[6, 12, 24]}
          />
        </Row>
      </Container>
    </div>
  ) : (
    <h2>There's no data to display</h2>
  );
};

export default ListHabitantsContainer;
