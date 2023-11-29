import { Context, createContext, useContext } from "react";
import { ShipmentStore } from "./ShipmentStore";
import { NewOrderFormStore } from "./NewOrderFormStore";

interface Store {
  ShipmentStore: ShipmentStore;
  NewOrderFormStore: NewOrderFormStore;
}

export const store: Store = {
  ShipmentStore: new ShipmentStore(),
  NewOrderFormStore: new NewOrderFormStore(),
};

export const StoreContext: Context<Store> = createContext<Store>(store);

export function useStore(): Store {
  return useContext(StoreContext);
}
