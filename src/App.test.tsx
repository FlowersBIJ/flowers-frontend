import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { TextProvider } from "./Components/TextContext/TextContext";
import { UserRole } from "./Models/UserRole";

test("renders learn react link", () => {
   render(
      <TextProvider>
         <App userRole={UserRole.ADMIN} />,
      </TextProvider>
   );
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument();
});
