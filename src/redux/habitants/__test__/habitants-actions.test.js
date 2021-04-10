import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { listHabitants, habitantDetails } from "../habitants-actions";
import HabitantsTypes from "../habitants-types";

import allHabitantsResponse from "../../../utils/test-utils/habitants/all-habitants.json";
import singleHabitantResponse from "../../../utils/test-utils/habitants/single-habitant.json";

const habitantsData = {
  allHabitantsResponse,
  singleHabitantResponse,
};


describe("recipes thunk actions tests", () => {
  const mockStore = configureStore([thunk]);

  test("fetches all habitants from the api and dispatches the result", async () => {
    const expectedActions = [
      {
        type: HabitantsTypes.LIST_HABITANTS_REQUEST,
      },
      {
        type: HabitantsTypes.LIST_HABITANTS_SUCCESS,
        payload: habitantsData.allHabitantsResponse.Brastlewark,
          
    
      },
    ];

    const store = mockStore();
    await store.dispatch(listHabitants());

    expect(store.getActions()).toEqual(expectedActions);
  });

  test("fetches a single habitant from the api and dispatches the result", async () => {
    const expectedActions = [
      {
        type: HabitantsTypes.DETAIL_HABITANT_REQUEST,
      },
      {
        type: HabitantsTypes.DETAIL_HABITANT_SUCCESS,
        payload: habitantsData.singleHabitantResponse,
      },
    ];

    const store = mockStore();
    await store.dispatch(habitantDetails(0));

    expect(store.getActions()).toEqual(expectedActions);
  });

});
