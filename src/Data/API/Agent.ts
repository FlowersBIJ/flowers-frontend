import axios, { AxiosResponse } from "axios";
import { ShipmentModel } from "../../Models/Shipment";
import { NewOrderFormModel } from "../../Models/NewOrderForm";

const instance = axios.create({
  baseURL: "http://localhost:3000",
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

const NewOrderFormAgent = {
  submitOrder: (order: NewOrderFormModel) =>
    requests.post("/orders", {
      data: JSON.stringify(order),
    }),
};

export const Agent = {
  shipment: ShipmentAgent,
  newOrderForm: NewOrderFormAgent,
};
