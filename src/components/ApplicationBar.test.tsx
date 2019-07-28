import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import ApplicationBar from "./ApplicationBar";
import { renderWithProviders } from "../utils/renderWithProviders";

describe("ApplicationBar", () => {
  afterEach(cleanup);

  it("should allow Navigation", () => {
    const { getByText } = renderWithProviders(<ApplicationBar />);

    fireEvent.click(getByText("Einstellungen"));
    fireEvent.click(getByText("Rechner"));
    fireEvent.click(getByText("Einloggen"));
    fireEvent.click(getByText("Rechner"));
  });
});
