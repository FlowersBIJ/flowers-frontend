import { Context, createContext, useContext } from "react";
import { ShipmentStore } from "./ShipmentStore";
import { ManagerStore } from "./ManagerStore";
import {AdminPanelStore} from "./AdminPanelStore";

interface Store {
  shipmentStore: ShipmentStore;
  managerStore: ManagerStore;
  adminPanelStore: AdminPanelStore;
}

export const store: Store = {
  shipmentStore: new ShipmentStore(),
  managerStore: new ManagerStore(),
  adminPanelStore: new  AdminPanelStore()
};

export const StoreContext: Context<Store> = createContext<Store>(store);

export function useStore(): Store {
  return useContext(StoreContext);
}
