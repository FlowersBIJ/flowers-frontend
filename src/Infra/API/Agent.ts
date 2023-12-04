import axios, { AxiosResponse } from "axios";
import { ShipmentModel } from "../../Models/Shipment";
import { Manager } from "../../Models/Manager";
import {EntityType} from "../../Models/EntityType";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) =>
    instance.get<T>(url).then(responseBody).catch(handleError),
  getById: <T>(url: string, id: number) =>
    instance
      .get<T>(url + "/" + id)
      .then(responseBody)
      .catch(handleError),
  post: <T>(url: string, body: {}) =>
    instance.post<T>(url, body).then(responseBody).catch(handleError),
  put: <T>(url: string, body: {}) =>
    instance.put<T>(url, body).then(responseBody).catch(handleError),
  delete: <T>(url: string) =>
    instance.delete<T>(url).then(responseBody).catch(handleError),
};

const handleError = (error: any) => {
  console.error("Request failed:", error);
  throw error;
};

const ShipmentAgent = {
  get: () => requests.get<ShipmentModel[]>("/shipments"),
  getById: (id: number) => requests.get<ShipmentModel>(`/shipments/${id}`),
};

const OrderFormAgent = {
  submitShipment: (shipment: ShipmentModel) =>
    requests.post("/shipments", {
      data: JSON.stringify(shipment),
    }),
};

const ManagerAgent = {
  get: () => requests.get<Manager[]>("/managers"),
  getById: (id: number) => requests.get<Manager>(`/managers/${id}`),
};

const EntityAgent = {
  getAllEntities: async (entityTypes: string[]) => {
    let entities: {[key: string]: EntityType[]} = {};

    for (const entityType of entityTypes) {
      const data = await requests.get(`/api/v1/${entityType}`);

      console.log(data);
      // @ts-ignore
      entities[entityType] = data[entityType];
    }
    return entities;
  }
}

export const Agent = {
  shipment: ShipmentAgent,
  newOrderForm: OrderFormAgent,
  manager: ManagerAgent,
  entity: EntityAgent
};
