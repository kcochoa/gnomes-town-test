import HabitantsTypes from "./habitants-types";
import {fetchAll} from "../../utils/fetchAll"
import {getHabitantById} from "../../utils/fetchById"

//=======================================================
//===== Fetching list of habitants
//=======================================================
export const listHabitantsRequest = () => {
  return { type: HabitantsTypes.LIST_HABITANTS_REQUEST };
};
export const listHabitantsError = (message) => ({
  type: HabitantsTypes.LIST_HABITANTS_ERROR,
  payload: message,
});

//* Obtain all habitants to filter later
export const listHabitants = () => async (dispatch) => {
  dispatch(listHabitantsRequest());
  try {
    const allHabitants = await fetchAll();

    if (allHabitants) {
      dispatch({
        type: HabitantsTypes.LIST_HABITANTS_SUCCESS,
        payload: allHabitants,
      });
    }
  } catch (error) {
    dispatch(listHabitantsError(error.message));
  }
};

//======================================
//===== Fetching habitant details
//======================================
export const habitantDetailsRequest = () => {
  return { type: HabitantsTypes.DETAIL_HABITANT_REQUEST };
};
export const habitantDetailsError = (message) => ({
  type: HabitantsTypes.DETAIL_HABITANT_ERROR,
  payload: message,
});

//* Action passed to component
export const habitantDetails = (id) => async (dispatch) => {
  dispatch(habitantDetailsRequest());
  try {
    const habitant = await getHabitantById(id);
    if (habitant) {
      dispatch({
        type: HabitantsTypes.DETAIL_HABITANT_SUCCESS,
        payload: habitant,
      });
    } else {
      dispatch(habitantDetailsError("Not found habitant"));
    }
  } catch (error) {
    dispatch(habitantDetailsError(error.message));
  }
};


