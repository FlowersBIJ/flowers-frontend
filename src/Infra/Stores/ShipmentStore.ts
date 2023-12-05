import {action, makeAutoObservable, makeObservable, observable, runInAction} from "mobx";
import { Agent } from "../API/Agent";
import {ClientModel, ShipmentModel} from "../../Models/Shipment";

export class ShipmentStore {
  isInitialLoading: boolean = false;
  clients: ClientModel[] = []

  constructor() {
    makeAutoObservable(this);
  }

  getClients = () => {
    return this.clients;
  }

  load = async () => {
    try {
      this.isInitialLoading = true;
      const loaded = await Agent.shipment.get();
      runInAction(() => {
        this.clients = loaded;
      })
      this.isInitialLoading = false;
    } catch (e) {
      this.isInitialLoading = false;
    }
  }
}
