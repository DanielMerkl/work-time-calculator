import React, { ReactChild } from "react";
import { render } from "@testing-library/react";
import CombinedProviders from "./CombinedProviders";

export const renderWithProviders = (children: ReactChild) => {
  return render(<CombinedProviders>{children}</CombinedProviders>);
};
