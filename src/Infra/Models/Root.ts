import {Instance, types} from "mobx-state-tree";
import {DropdownStore} from "./DropdownEntities";
import {Client, ClientStore} from "./ShipmentEntities/Client";
import {ManagerStore} from "./Manager";
import {createContext, useContext} from "react";

const RootModel = types.model({
    managerStore: ManagerStore,
    dropdownStore: DropdownStore,
    clientStore: ClientStore
});

const managerStore = ManagerStore.create({
    managers: [{
        name: "Ricardo",
        lastOnline: new Date()
    }]
})

const dropdownStore = DropdownStore.create({
        models: {
            "farm": [{
                name: "Ricardo Farm",
                visible: true,
                __entity_name: "farm",
            }],
            "box_type": [
                {
                    name: "ON",
                    visible: true,
                    __entity_name: "box_type",
                }
            ],
            "order_status": [
                {
                    name: "created",
                    visible: true,
                    __entity_name: "order_status"
                },
                {
                    name: "in_work",
                    visible: true,
                    __entity_name: "order_status"
                },
                {
                    name: "done",
                    visible: true,
                    __entity_name: "order_status"
                }
            ],
            "order_type": [
                {
                    name: "OM",
                    visible: true,
                    __entity_name: "order_type"
                },
                {
                    name: "OS",
                    visible: true,
                    __entity_name: "order_type"
                }
            ],
            "cargo_agencia": [
                {
                    name: "McDonalds Agencia",
                    visible: true,
                    __entity_name: "cargo_agencia"
                }
            ],
            "truck": [
                {
                    name: "McDonalds Truck",
                    visible: true,
                    __entity_name: "truck"
                }
            ],
            "country": [
                {
                    name: "Jopa",
                    visible: true,
                    __entity_name: "country"
                }
            ],
            "city": [
                {
                    name: "JopaTown",
                    visible: true,
                    __entity_name: "city"
                }
            ]},
        clients: [
            {
                labelling: "McDonalds",
                country: "Jopa",
                city: "JopaTown",
                visible: true,
                defaultCargoAgencia: "McDonalds Agencia",
                defaultTruck: "McDonalds Truck",

                __entity_name: "client"
            },
        ]
});


export const rootStore = RootModel.create({
    // @ts-ignore
        dropdownStore,
        managerStore,
        clientStore: {
            clients: [
            //     {
            //         id: 0,
            //         client: "McDonalds",
            //         visible: true,
            //         truck: "McDonalds Truck",
            //         cargoAgencia: "McDonalds Agencia",
            //         parentClient: null,
            //         orders: []
            //     },
            //     {
            //         id: 1,
            //         client: "McDonalds Krasnogorsk",
            //         parentClient: "McDonalds",
            //         visible: true,
            //         truck: dropdownStore.getByName("truck").name,
            //         cargoAgencia: "McDonalds Agencia",
            //         orders: [
            //             {
            //                 id: 1,
            //                 type: "OM",
            //                 status: "created",
            //                 // manager: "Ricardo",
            //                 invoice: "123123",
            //                 releaseDate: new Date(),
            //                 lastModifiedStatus: new Date(),
            //                 boxes: [
            //                     {
            //                         id: 1,
            //                         boxType: "ON",
            //                         awb: "123",
            //                         farm: "Ricardo Farm",
            //                         invoiceOur: "12312324",
            //                         lastModifiedInvoice: new Date(),
            //                         flowers: [
            //                             {
            //                                 id: 1,
            //                                 flowerLength: 15,
            //                                 flowerType: "Rose",
            //                                 flowerVariety: "Red",
            //                                 finalPriceInMiami: 1500,
            //                                 numberOfStems: 150,
            //                                 salePrice: 0.55,
            //                                 purchasePrice: 1.6
            //                             }
            //                         ]
            //                     }
            //                 ]
            //             }
            //         ]
            //     }
            ]
        }
    }
);

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store cannot be null, please add a context provider");
    }
    return store;
}