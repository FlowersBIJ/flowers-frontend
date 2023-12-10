import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageBody } from "./Components/PageBody/PageBody";
import { Shipment } from "./Pages/Shipment/Shipment";
import { NewOrderForm } from "./Pages/NewOrderForm/OrderForm";
import "./index.css";
import { TextProvider } from "./Components/TextContext/TextContext";
import { Provider, rootStore } from "./Infra/Models/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App />
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
    <Provider value={rootStore}>
        <TextProvider>
            <RouterProvider router={router} />
        </TextProvider>
    </Provider>
);
