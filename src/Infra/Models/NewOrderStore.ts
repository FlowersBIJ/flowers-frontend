import {Instance, types} from "mobx-state-tree";
import {Client} from "./ShipmentEntities/Client";

export const NewOrderStore = types.model({
    clients: types.array(Client)
}).actions(self => ({
    clear() {
        self.clients.clear();
    }
}));

export type NewOrderStoreModel = Instance<typeof NewOrderStore>;