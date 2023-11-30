import { action, makeObservable, observable } from "mobx";
import { Agent } from "./API/Agent";

export class ShipmentStore {
  shipment = {
    country: "",
    cityOfDelivery: "",
    flowerType: "",
    numberOfBoxes: 0,
    boxType: "",
    variety: "",
    length: 0,
    numberOfStems: 0,
    farm: "",
    releaseDate: "",
    purchasePrice: 0,
    total: 0,
    labeling: "",
    cargoAgencia: "",
    truck: "",
    difference: "",
    salePrice: 0,
    totalSales: 0,
    awb: "",
    invoice: "",
    invoiceOur: "",
    miami: 0,
    finalPriceInMiami: 0,
    orderType: "",
    manager: "",
    done: "",
  };

  constructor() {
    makeObservable(this, {
      shipment: observable,
    });
  }
}
