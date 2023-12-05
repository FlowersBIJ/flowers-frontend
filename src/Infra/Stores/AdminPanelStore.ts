import {EntityType} from "../../Models/EntityType";
import {action, makeObservable, observable, runInAction} from "mobx";
import {Agent} from "../API/Agent";


export class AdminPanelStore {
    entityTypes: string[] = ['agencies', 'box_types', 'clients', 'flower_sorts', 'order_types', 'plantations', 'trucks'];
    currentEntity: string = this.entityTypes[0];
    entities: { [key: string]: EntityType[] } = {};
    loadingInitial: boolean = false;

    constructor() {
        makeObservable(this,
            {
                entityTypes: observable,
                currentEntity: observable,
                entities: observable,
                loadingInitial: observable,
                getCurrentEntities: action.bound,
                setCurrentEntity: action.bound,
                fillEntities: action.bound,
                setLoadingInitial: action.bound
            });
    }

    fillEntities = () => {
        this.setLoadingInitial(true);
        Agent.entity.getAllEntities(this.entityTypes).then(
            (result) => {
                runInAction(() => {
                    this.entities = result;
                });
            }
        ).then(
            () => this.setLoadingInitial(false)
        ).catch(
            (e) => {
                console.error(e);
                this.setLoadingInitial(false);
            }
        );
    }

    setLoadingInitial= (loading: boolean): void => {
        this.loadingInitial = loading;
    }

    setCurrentEntity = (entityType: string): void => {
        this.currentEntity = entityType;
    }

    getCurrentEntities = (): EntityType[] => {
        if (this.entities.hasOwnProperty(this.currentEntity)) {
            return this.entities[this.currentEntity];
        }

        return [];
    }
}