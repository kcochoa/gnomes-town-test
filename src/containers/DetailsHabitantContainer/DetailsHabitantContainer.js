import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { habitantDetails } from "../../redux/habitants/habitants-actions";
import DetailsCard from "../../components/DetailsCard";

const DetailsHabitantContainer = () => {
  let { id } = useParams();
  const habitantsState = useSelector((state) => state.habitantsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(habitantDetails(id));
  }, [dispatch, id]);

  return habitantsState.loading ? (
    <h2>Loading...</h2>
  ) : habitantsState.error ? (
    <h2>{habitantsState.lastRequesErrorMessage}</h2>
  ) : habitantsState.habitantDetails ? (
    <div className="bg-pages">
      <DetailsCard
        key={habitantsState.habitantDetails[0].id}
        id={habitantsState.habitantDetails[0].id}
        name={habitantsState.habitantDetails[0].name}
        age={habitantsState.habitantDetails[0].age}
        hairColor={habitantsState.habitantDetails[0].hair_color}
        professions={habitantsState.habitantDetails[0].professions}
        friends={habitantsState.habitantDetails[0].friends}
        weight={habitantsState.habitantDetails[0].weight}
        height={habitantsState.habitantDetails[0].height}
      />
    </div>
  ) : (
    <h2>There's no data to display</h2>
  );
};

export default DetailsHabitantContainer;
