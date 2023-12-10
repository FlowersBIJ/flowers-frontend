import {flow, getParent, getParentOfType, hasParent, hasParentOfType, IMSTMap, Instance, types} from "mobx-state-tree";
import {IDropdownEntity} from "./dto";
import {OptionType} from "@silevis/reactgrid";
import {Agent} from "../API/Agent";

export const AbstractDropdownEntity = types.model({
    __entity_name: types.string
}).views(self => ({
    getAllEntities(): OptionType[] {
        if (!hasParentOfType(self, DropdownStore)) return [];

        const parent = getParentOfType(self, DropdownStore) as DropdownStoreModel;
        return parent.getEntities(self.__entity_name);
    }
}));


// @ts-ignore
export const DropdownEntity = AbstractDropdownEntity.named("DropdownEntity").props({
    name: types.identifier,
    visible: types.boolean,

}).actions(self => ({
    changeVisibility(newVisibility: boolean): void {
        self.visible = newVisibility;
    },
    changeName(newName: string): void {
        self.name = newName;
    }
}))

export const DropdownEntityByName = types.reference(DropdownEntity);

// ========================================== Client ==========================================

// @ts-ignore
export const  DefaultClient = AbstractDropdownEntity.named("DefaultClient").props({
    labelling: types.identifier,
    parentClientId: types.maybeNull(types.reference(types.late(() => DefaultClient))),
    defaultCargoAgencia: DropdownEntityByName,
    defaultTruck: DropdownEntityByName,
    country: DropdownEntityByName,
    city: DropdownEntityByName,

    visible: types.boolean
}).actions(self => ({
    changeVisibility(newVisibility: boolean): void {
        self.visible = newVisibility;
    },
    changeLabelling(newLabelling: string): void {
        self.labelling = newLabelling;
    }
}));

export const DefaultClientByName = types.reference(DefaultClient);
// ========================================== Client ==========================================

export const DropdownStore = types.model({
    models: types.map(types.array(DropdownEntity)),
    clients: types.array(DefaultClient),
    undefinedEntity: types.optional(DropdownEntity, {name: "UNDEFINED", visible: true, __entity_name: "UNDEFINED"})
}).views(self => ({
    load: flow(function *(dropdownNames: string[]) {
        for (const dropdownName of dropdownNames) {
            const dropdown = yield Agent.dropdown.getByName(dropdownName);
            self.models.set(dropdownName, dropdown.map((entity: IDropdownEntity) => ({...entity, __entity_name: dropdownName})));
        }
    }),
    initialise(dropdownNames: string[]) {
        this.load(dropdownNames);
    },
    getByName(entityName: string) {
        let found = self.clients.find(u => u.labelling === entityName);
        if (found !== undefined) {
            return found;
        }

        for (const models in self.models) {
            found = (self.models.get(models)?.find(
                u => u.name === entityName
            ));
            if (found !== undefined) {
                return found;
            }
        }
        return self.undefinedEntity;
    },
    getEntities(entityName: string): OptionType[] {
        if (entityName === "client") {
            console.log(entityName)
            console.log(self.clients.map(client => ({ label:client.labelling, value: client.labelling})));
            return self.clients.map(client => ({ label:client.labelling, value: client.labelling}));
        }
        if (self.models.has(entityName)) {
            return self.models.get(entityName)?.map(
                entity => ({ label: entity.name, value: entity.name })
            ) || [];
        }

        return [];
    },
}));

export type DefaultClientModel = Instance<typeof DefaultClient>;
export type DropdownEntityModel = Instance<typeof DropdownEntity>;
export type DropdownStoreModel = Instance<typeof DropdownStore>;