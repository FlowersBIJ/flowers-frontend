import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageBody } from "./Components/PageBody/PageBody";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Shipment } from "./Pages/Shipment/Shipment";
import { Invoices } from "./Pages/Invoices/Invoces";
import { AccountStatement } from "./Pages/AccountStatements/AccountStatement";
import { Parameterization } from "./Pages/Parameterization/Parameterization";
import { store, StoreContext } from "./Data/Store";
import "./index.css";
import { TextProvider } from "./Components/TextContext/TextContext";
const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <TextProvider>
            <App />,
         </TextProvider>
      ),
      children: [
         {
            index: true,
            element: (
               <PageBody text={"Dashboard"}>
                  <Dashboard />
               </PageBody>
            ),
         },
         {
            path: "/shipment",
            element: (
               <PageBody text={"Shipment"}>
                  <Shipment />
               </PageBody>
            ),
         },
         {
            path: "/invoices",
            element: (
               <PageBody text={"Invoices"}>
                  <Invoices />
               </PageBody>
            ),
         },
         {
            path: "/account-statement",
            element: (
               <PageBody text={"Account statement"}>
                  <AccountStatement />
               </PageBody>
            ),
         },
         {
            path: "/parameterization",
            element: (
               <PageBody text={"Parameterization"}>
                  <Parameterization />
               </PageBody>
            ),
         },
      ],
   },
]);

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

root.render(
   <StoreContext.Provider value={store}>
      <TextProvider>
         <RouterProvider router={router} />
      </TextProvider>
   </StoreContext.Provider>
);
