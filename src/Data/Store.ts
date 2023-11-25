import { Context, createContext, useContext } from "react";
import { DashboardStore } from "./DashboardStore";
import { ShipmentStore } from "./ShipmentStore";
import { InvoicesStore } from "./InvoicesStore";
import { AccountStatementStore } from "./AccountStatementStore";
import { ParameterizationStore } from "./ParameterizationStore";

interface Store {
  DashboardStore: DashboardStore;
  ShipmentStore: ShipmentStore;
  InvoicesStore: InvoicesStore;
  AccountStatementStore: AccountStatementStore;
  ParameterizationStore: ParameterizationStore;
}

export const store: Store = {
  DashboardStore: new DashboardStore(),
  ShipmentStore: new ShipmentStore(),
  InvoicesStore: new InvoicesStore(),
  AccountStatementStore: new AccountStatementStore(),
  ParameterizationStore: new ParameterizationStore(),
};

export const StoreContext: Context<Store> = createContext<Store>(store);

export function useStore(): Store {
  return useContext(StoreContext);
}
