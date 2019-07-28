import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils/renderWithProviders";
import BottomNavigation from "./BottomNavigation";

describe("BottomNavigation", () => {
  afterEach(cleanup);

  it("should allow Navigation", () => {
    // @ts-ignore
    window.innerWidth = 450;
    window.dispatchEvent(new Event("resize"));
    const { getByText } = renderWithProviders(<BottomNavigation />);

    fireEvent.click(getByText("Einstellungen"));
    fireEvent.click(getByText("Rechner"));
    fireEvent.click(getByText("Einloggen"));
  });
});
