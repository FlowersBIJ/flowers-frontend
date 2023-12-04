import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PageBody} from "./Components/PageBody/PageBody";
import {Shipment} from "./Pages/Shipment/Shipment";
import {NewOrderForm} from "./Pages/NewOrderForm/OrderForm";
import {Managers} from "./Pages/Managers/Managers";
import {store, StoreContext} from "./Infra/Stores/Store";
import "./index.css";
import {TextProvider} from "./Components/TextContext/TextContext";
import {Managment} from "./Pages/Management/Managment";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
                    <App/>
        ),
        children: [
            {
                index: true,
                element: (
                    <PageBody text={"SHIPMENT"}>
                        <Shipment/>
                    </PageBody>
                ),
            },
            {
                path: "/new-order",
                element: (
                    <PageBody text={"NEW ORDER"}>
                        <NewOrderForm/>
                    </PageBody>
                ),
            },
            {
                path: "/managers",
                element: (
                    <PageBody text={"MANAGERS"}>
                        <Managers/>
                    </PageBody>
                ),
            },
            {
                path: "/admin_panel",
                element: (
                    <PageBody text={"ADMIN PANEL"}>
                        <Managment/>
                    </PageBody>
                )
            }
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StoreContext.Provider value={store}>
        <TextProvider>
            <RouterProvider router={router}/>
        </TextProvider>
    </StoreContext.Provider>
);
