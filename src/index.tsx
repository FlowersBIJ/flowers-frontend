import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageBody } from "./Components/PageBody/PageBody";
import { Shipment } from "./Pages/Shipment/Shipment";
import { NewOrderForm } from "./Pages/NewOrderForm/OrderForm";
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
               <PageBody text={"SHIPMENT"}>
                  <Shipment />
               </PageBody>
            ),
         },
         {
            path: "/new-order",
            element: (
               <PageBody text={"NEW ORDER"}>
                  <NewOrderForm />
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
