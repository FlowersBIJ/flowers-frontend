import {makeAutoObservable, runInAction} from "mobx";
import { Agent } from "../API/Agent";
import {ClientModel} from "../Models/Shipment";

export class ShipmentStore {
  isInitialLoading: boolean = false;
  clients: ClientModel[] = []

  constructor() {
    makeAutoObservable(this);
  }

  load = async () => {
    try {
      this.isInitialLoading = true;
      const loaded = await Agent.shipment.get();
      console.log(JSON.stringify(loaded));
      runInAction(() => {
        this.clients = loaded;
      })
      this.isInitialLoading = false;
    } catch (e) {
      this.isInitialLoading = false;
    }
  }
}
