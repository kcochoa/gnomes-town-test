import HabitantsTypes from "./habitants-types";
import axios from "axios";
import { BASE_URL } from "../../utils/endpoint";

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
    const allHabitants = await axios.get(BASE_URL);

    if (allHabitants) {
      dispatch({
        type: HabitantsTypes.LIST_HABITANTS_SUCCESS,
        payload: allHabitants.data.Brastlewark,
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
    console.log(habitant)
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

async function getHabitantById(id) {
  try {
    const allHabitants = await axios.get(BASE_URL);

    if (allHabitants) {
      const habitantById = allHabitants.data.Brastlewark.filter(
        (habitant) => habitant.id === parseInt(id)
      );

      return habitantById;
    }
    // const property = await responseOfOwnServer.json();
    // if (property.data) {
    //   return property.data;
    // } else {
    //   throw new Error(
    //     "Request fetching property by Id not ok. Not data object."
    //   );
    // }
  } catch (error) {
    throw new Error(error.message);
  }
}

// //* Obtain all habitants to filter later
// export const listHabitants = (term) => async (dispatch) => {

//   dispatch(listHabitantsRequest());
//   try {

//     const allHabitants = await axios.get(BASE_URL);

//     if(allHabitants){
//       const searchByNameResult = allHabitants.data.Brastlewark.filter((habitant) => habitant.name.includes(term))

//       dispatch({
//         type: HabitantsTypes.LIST_HABITANTS_SUCCESS,
//         payload: searchByNameResult,
//       });

//     }

//   } catch (error) {
//     dispatch(listHabitantsError(error.message));
//   }
// };
