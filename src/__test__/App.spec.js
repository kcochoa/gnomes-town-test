import React from "react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import { renderWithReduxAndRouter } from "../utils/test-utils";

/**
 * Based on the AAA principle,
 * These test will describe the end user intentions with the app.
 * Because of this, they are mostly integration tests
 *
 * More: https://kentcdodds.com/blog/write-tests
 */

describe("App behaviour", () => {
  describe("route [/]", () => {
    describe("Application [Header]", () => {
      it(`should contain the right content`, () => {
        const { getByTestId } = renderWithReduxAndRouter(<App />);
        expect(getByTestId("home-button")).toBeInTheDocument();
      });
    });

    describe("route [/all-habitants]", () => {
      const route = "/all-habitants";
      it(`should contain the right content when loading`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />, route);

        expect(getByText("Loading...", { exact: false })).toBeInTheDocument();
      });

      it(`should contain the right content once its loaded`, async () => {
        const { queryByText, queryAllByText } = renderWithReduxAndRouter(
          <App />,
          route
        );

        await waitFor(() =>
          expect(queryByText("Tobus Quickwhistle")).toBeInTheDocument()
        );
        const items = queryAllByText(/Years/);

        expect(items).toHaveLength(6); //paginator limit per page
      });

      it("should be able to navigate to a habitant's detail", async () => {
        const { getByTestId, getByText } = renderWithReduxAndRouter(
          <App />,
          route
        );

        await waitFor(() =>
          expect(getByTestId("habitant-card-0")).toBeInTheDocument()
        );
        userEvent.click(getByTestId("habitant-card-0"));

        await waitFor(() =>
          expect(getByText("Metalworker", { exact: false })).toBeInTheDocument()
        );

        expect(getByText("Cogwitz Chillwidget")).toBeInTheDocument();
        expect(getByText("Tinadette Chillbuster")).toBeInTheDocument();
        expect(getByText("Woodcarver", { exact: false })).toBeInTheDocument();
        expect(getByText("Stonecarver", { exact: false })).toBeInTheDocument();
        expect(getByText("Tinker", { exact: false })).toBeInTheDocument();
        expect(getByText("Tailor", { exact: false })).toBeInTheDocument();
        expect(getByText("Potter", { exact: false })).toBeInTheDocument();
      });
    });
  });
});
