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
}));

export const ClientStore = types.model("ClientStore", {
   clients: types.array(Client)
}).views(self => ({
    getRows(): Row[] {
        let rowId = 0;
        let rows: Row[] = [];
        self.clients.forEach(
            client => client.orders.forEach(
                order => order.boxes.forEach(
                    box => box.flowers.forEach(
                        flower => rows.push({
                            rowId:rowId++,
                            reorderable: true,
                            cells: [
                                    {
                                        type: "text",
                                        text: order.manager.name,
                                    },
                                    {
                                        type: "dropdown",
                                        selectedValue: order.status.name,
                                        values: order.status.getAllEntities(),
                                    },
                                    {
                                      type: "text",
                                      text: flower.comment,
                                    },
                                {
                                    type: "dropdown",
                                    selectedValue: flower.flowerType.name,
                                    values: flower.flowerType.getAllEntities()
                                },
                                {
                                    type: "number",
                                    value: order.numberOfBoxes,
                                },
                                {
                                    type: "dropdown",
                                    selectedValue: box.boxType.name,
                                    values: box.boxType.getAllEntities()
                                },
                                {
                                    type: "dropdown",
                                    selectedValue: flower.flowerVariety.name,
                                    values: flower.flowerVariety.getAllEntities()
                                },
                                {
                                    type: "number",
                                    value: flower.numberOfStems,
                                },
                                {
                                    type: "dropdown",
                                    selectedValue: box.farm.name,
                                    values: box.farm.getAllEntities(),
                                },
                                {
                                    type: "date",
                                    date: order.releaseDate,
                                },
                                {
                                    type: "number",
                                    value: flower.purchasePrice,
                                },
                                {
                                    type: "number",
                                    value: flower.totalPrice,
                                },
                                {
                                        type: "dropdown",
                                        selectedValue: client.client.labelling,
                                        values: client.client.getAllEntities()
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
                                    value: flower.difference
                                },
                                {
                                    type: "number",
                                    value: flower.salePrice
                                },
                                {
                                    type: "number",
                                    value: flower.totalSalePrice
                                },
                                {
                                    type: "text",
                                    text: box.awb
                                },
                                {
                                    type: "text",
                                    text: order.invoice
                                },
                                {
                                    type: 'text',
                                    text: box.invoiceOur
                                },
                                {
                                    type: "number",
                                    value: flower.finalPriceInMiami || 0
                                },
                                {
                                    type: "text",
                                    text: order.type.name
                                },
                                {
                                    type: "text",
                                    text: client.client.country.name,
                                },
                                {
                                    type: "text",
                                    text: client.client.city.name,
                                }
                            ]
                        })
                    )
                )
            )
        )
        return rows;
    }
})).actions(self => ({
    addClient(client: Instance<typeof Client>) {
        if (self.clients.find(c => c.id === client.id)) {
            throw new Error("Client already registered");
        }

        self.clients.push(client);
    }
}));