import {Instance, types} from "mobx-state-tree";
import {DropdownEntityByName} from "../DropdownEntities";
import {ManagerByName} from "../Manager";
import { Box } from "./Box";

export const Order = types.model({
    id: types.integer,
    releaseDate: types.optional(types.Date, new Date(), [null]),
    invoice: types.string,
    lastModifiedStatus: types.optional(types.Date, new Date(), [null]),

    status: DropdownEntityByName,
    type: DropdownEntityByName,
    manager: types.reference(ManagerByName),

    boxes: types.array(Box)
}).views(self => ({
    get numberOfBoxes() {
        return self.boxes.length;
    }
})).actions(self => ({
    changeReleaseDate(releaseDate: Date): void {
        self.releaseDate = releaseDate;
    },
    changeInvoice(invoice: string): void {
        self.invoice = invoice
    },
}));

export type OrderModel = Instance<typeof Order>;