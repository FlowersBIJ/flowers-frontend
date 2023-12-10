// export type Manager = {
//   name: string;
//   //   userName: string;
//   lastOnline: string;
// };

import {types} from "mobx-state-tree";
import {IDropdownEntity, IManager} from "./dto";

export const Manager = types.model({
  name: types.string,
  lastOnline: types.Date
});
export const ManagerByName= (
    types.reference(Manager, {
      get(name: string, parent: any) {
        return parent.entities.find((entity: IDropdownEntity) => entity.name === name) || null
      },
      set(value: IManager) {
        return value.name
      }
    })
)
export const ManagerStore = types.model({
  managers: types.array(Manager)
});
