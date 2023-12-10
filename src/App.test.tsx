import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { TextProvider } from "./Components/TextContext/TextContext";
import { UserRole } from "./Infra/Models/UserRole";

test("renders learn react link", () => {
   render(
      <TextProvider>
         <App />,
      </TextProvider>
   );
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument();
});
