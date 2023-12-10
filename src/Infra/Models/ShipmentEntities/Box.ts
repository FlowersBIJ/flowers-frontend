import {types} from "mobx-state-tree";
import {DropdownEntityByName} from "../DropdownEntities";
import {Flower} from "./Flower";

export const Box = types.model({
    id: types.number,
    awb: types.string,
    invoiceOur: types.string,
    lastModifiedInvoice: types.Date,

    farm: DropdownEntityByName,
    boxType: DropdownEntityByName,
    flowers: types.array(Flower)
}).actions(self => ({

}));