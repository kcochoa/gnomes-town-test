import { Alert, Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SearchBar from "../components/SearchBar/SearchBar";
import { listHabitants } from "../redux/habitants/habitants-actions";
import HabitantCard from "../components/HabitantCard";

const ListHabitantsContainer = () => {

  const habitantsState = useSelector((state) => state.habitantsState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(listHabitants());
  }, [dispatch]);

  const handleSubmitCallback = async (term) => {
    console.log("button submit");
    // listHabitantsBySearch(term);
    // history.push("/result-search")
  };

  const handleClickCallback = (id) =>{
    console.log(id)
    history.push("/habitant/"+ id)
  }

  return habitantsState.loading ? (
    <h2>Loading...</h2>
  ) : habitantsState.error ? (
    <h2>{habitantsState.lastRequesErrorMessage}</h2>
  ) : habitantsState.habitantsList ? (
    <div className="bg-pages">
      <SearchBar handleSubmitCallback={handleSubmitCallback} />
      <Container>
        <Row  className="d-flex align-items-stretch">
          {habitantsState.habitantsList.map((hab) => (
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="mt-5"
             
            >
              <HabitantCard
                key={hab.id}
                id={hab.id}
                name={hab.name}
                age={hab.age}
                weight={hab.weight}
                height={hab.height}
                hairColor={hab.hair_color}
                handleClickCallback = {handleClickCallback}
               
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  ) : (
    <h2>There's no data to display</h2>
  );
};

export default ListHabitantsContainer;
