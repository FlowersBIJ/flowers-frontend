import { Cell } from "@silevis/reactgrid";

export interface NewEntityButtonCell extends Cell {
  type: "newEntityButton";
  onSubmit: () => void;
}
