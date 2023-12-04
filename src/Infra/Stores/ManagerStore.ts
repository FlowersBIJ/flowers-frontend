import { Manager } from "../../Models/Manager";
import { makeAutoObservable, runInAction } from "mobx";
import { Agent } from "../API/Agent";

export class ManagerStore {
  managers: Manager[] = [];
  loadingInitial: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  load = async () => {
    this.loadingInitial = true;
    try {
      const result = await Agent.manager.get();
      runInAction(() => {
        this.managers = result;
      });
      this.setLoadingInitial(false);
    } catch (e) {
      console.error(e);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };

  setLoadingInitial(state: boolean) {
    this.loadingInitial = state;
  }
}
