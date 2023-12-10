import {types} from "mobx-state-tree";
import {DropdownEntityByName} from "../DropdownEntities";

export const Flower = types.model({
    id: types.number,
    comment: types.optional(types.string, ""),
    flowerLength: types.optional(types.number, 0),
    numberOfStems: types.number,
    purchasePrice: types.number,
    salePrice: types.number,
    finalPriceInMiami: types.maybeNull(types.number),

    flowerVariety: DropdownEntityByName,
    flowerType: DropdownEntityByName
}).actions(self => ({
    changeComment(comment: string): void {
        self.comment = comment;
    },
    changeLength(flowerLength: number): void {
        self.flowerLength = flowerLength;
    },
    changeNumberOfStems(numberOfStems: number): void {
        self.numberOfStems = numberOfStems;
    },
    changePurchasePrice(price: number): void {
        self.purchasePrice = price;
    },
    changeSalePrice(price: number): void {
        self.salePrice = price;
    },
    changePriceInMiami(price: number): void {
        self.finalPriceInMiami = price;
    }
})).views(self => ({
    get totalPrice(): number {
        return self.numberOfStems * self.purchasePrice
    },
    get totalSalePrice(): number {
        if (self.finalPriceInMiami === null) {
            return self.salePrice * self.numberOfStems;
        }

        return self.finalPriceInMiami * self.numberOfStems;
    },
    get difference(): number {
        if (self.finalPriceInMiami === null) {
            return 0;
        }

        return this.totalSalePrice - this.totalPrice;
    }
}));
