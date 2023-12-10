import {Instance, types} from "mobx-state-tree";
import {
    DefaultClientByName, DropdownEntityByName
} from "../DropdownEntities";
import {Order} from "./Order";
import {Row} from "@silevis/reactgrid";


export const Client = types.model({
    id: types.integer,
    visible: types.boolean,
    parentClient: types.maybeNull(types.string),

    client: DefaultClientByName,
    cargoAgencia: DropdownEntityByName,
    truck: DropdownEntityByName,

    orders: types.array(Order)
}).actions(self => ({
    changeVisibility(newVisibility: boolean): void {
        self.visible = newVisibility;
    }
})).views(self => ({
    get rows(): Row[] {
        return []
    },
    get length(): number {
        return this.rows.length;
    }
}));

export const ClientStore = types.model("ClientStore", {
   clients: types.array(Client)
}).views(self => ({
    getShipmentRows(): Row[] {
        let rowId = 0;
        return self.clients.flatMap(
            client => client.orders.flatMap(
                order => order.boxes.flatMap(
                    box => box.flowers.flatMap(
                        flower => ({
                            rowId:rowId++,
                            reorderable: true,
                            cells: [
                                    {
                                        type: "text",
                                        text: order.manager.name,
                                        nonEditable: true,
                                    },
                                    {
                                        type: "text",
                                        text: order.status.name,
                                        nonEditable: true,
                                    },
                                    {
                                      type: "text",
                                      text: flower.comment,
                                        nonEditable: true,
                                    },
                                {
                                    type: "text",
                                    text: flower.flowerType.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: order.numberOfBoxes,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: box.boxType.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: flower.flowerVariety.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.numberOfStems,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: box.farm.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "date",
                                    date: order.releaseDate,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.purchasePrice,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.totalPrice,
                                    nonEditable: true,
                                },
                                {
                                        type: "text",
                                        text: client.client.labelling,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: client.cargoAgencia.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: client.truck.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.difference,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.salePrice,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.totalSalePrice,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: box.awb,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: order.invoice,
                                    nonEditable: true,
                                },
                                {
                                    type: 'text',
                                    text: box.invoiceOur,
                                    nonEditable: true,
                                },
                                {
                                    type: "number",
                                    value: flower.finalPriceInMiami || 0,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: order.type.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: client.client.country.name,
                                    nonEditable: true,
                                },
                                {
                                    type: "text",
                                    text: client.client.city.name,
                                    nonEditable: true,
                                }
                            ]
                        })
                    )
                )
            )
        )
    }
})).actions(self => ({
    addClient(client: Instance<typeof Client>) {
        if (self.clients.find(c => c.id === client.id)) {
            throw new Error("Client already registered");
        }

        self.clients.push(client);
    }
}));


export type ClientModel = Instance<typeof Client>;