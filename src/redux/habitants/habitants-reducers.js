import HabitantsTypes from "./habitants-types";

export const HabitantsInitialState = {
  lastRequest: null,
  error: null,
  success: null,
  lastRequesErrorMessage: null,
  habitantDetails: null,
  habitantsList: [],
  loading: false,
};

const HabitantsReducers = (state = HabitantsInitialState, action) => {
  switch (action.type) {
    case HabitantsTypes.LIST_HABITANTS_REQUEST: {
      return {
        ...state,
        lastRequest: action.type,
        loading: true,
      };
    }

    case HabitantsTypes.DETAIL_HABITANT_REQUEST: {
      return {
        ...state,
        lastRequest: action.type,
        loading: true,
      };
    }
   
    case HabitantsTypes.LIST_HABITANTS_ERROR:
    case HabitantsTypes.DETAIL_HABITANT_ERROR: {
      return {
        ...state,
        error: "Failed" + state.lastRequest,
        lastRequesErrorMessage: action.payload,
        success: null,
      };
    }
    case HabitantsTypes.LIST_HABITANTS_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        error: null,
        loading: false,
        habitantsList: action.payload,
      };
    }
  
    case HabitantsTypes.DETAIL_HABITANT_SUCCESS: {
      return {
        ...state,
        habitantDetails: action.payload,
        loading: false,
        error: null,
        success: state.lastRequest + "was successful",
      };
    }
  
    default: {
      return state;
    }
  }
};

export default HabitantsReducers;
