import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContextProvider } from "context/AuthContext";

const Wrapper = ({ children }) => {
  return (
    <AuthContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </AuthContextProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };