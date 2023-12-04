import { action, makeObservable, observable } from "mobx";
import { Agent } from "../API/Agent";
import {ShipmentModel} from "../../Models/Shipment";

export class ShipmentStore {
  shipment: ShipmentModel[] = []

  constructor() {
    makeObservable(this, {
      shipment: observable,
    });
  }
}
