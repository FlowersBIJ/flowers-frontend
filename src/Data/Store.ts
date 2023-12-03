import { Context, createContext, useContext } from "react";
import { ShipmentStore } from "./ShipmentStore";
import { ManagerStore } from "./ManagerStore";

interface Store {
  shipmentStore: ShipmentStore;
  managerStore: ManagerStore;
}

export const store: Store = {
  shipmentStore: new ShipmentStore(),
  managerStore: new ManagerStore(),
};

export const StoreContext: Context<Store> = createContext<Store>(store);

export function useStore(): Store {
  return useContext(StoreContext);
}
