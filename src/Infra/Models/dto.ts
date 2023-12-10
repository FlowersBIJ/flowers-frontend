export interface IManager {
    name: string,
    lastOnline: Date
}

export interface IDropdownEntity {
    name: string,
    visible: boolean
}

export interface IDefaultClient {
    labelling: string,
    defaultCargoAgencia: IDropdownEntity,
    defaultTruck: IDropdownEntity,
    country: IDropdownEntity,
    city: IDropdownEntity,
}
export interface IFlower {
    id: number,
    comment: string,
    flowerType: IDropdownEntity,
    flowerVariety: IDropdownEntity,
    flowerLength: number,
    numberOfStems: number,
    purchasePrice: number,
    salePrice: number,
    finalPriceInMiami: number
}
export interface IBox {
    id: number,
    boxType: IDropdownEntity,
    farm: string,
    awb: string,
    invoiceOur: string,
    lastModifiedInvoice: Date,

    flowers: IFlower[]
}
export interface IOrder {
    id: number,
    status: IDropdownEntity,
    releaseDate: Date,
    invoice: string,
    lastModifiedInvoice: Date,
    orderType: IDropdownEntity,

    boxes: IBox[]
}

export interface IClient {
    id: number, // Id from clients_to_orders
    labelling: string,
    cargoAgencia: IDropdownEntity,
    truck: IDropdownEntity,
    country: IDropdownEntity,
    city: IDropdownEntity,

    orders: IOrder[],
}