import { Context, createContext, useContext } from "react";
import { ShipmentStore } from "./ShipmentStore";

interface Store {
  shipmentStore: ShipmentStore;
}

export const store: Store = {
  shipmentStore: new ShipmentStore(),
};

export const StoreContext: Context<Store> = createContext<Store>(store);

export function useStore(): Store {
  return useContext(StoreContext);
}
