import { observer } from "mobx-react";
import {Box} from "@mui/material";
import {useMst} from "../../Infra/Models/Root";
import React from "react";
import {ReactGrid, Row} from "@silevis/reactgrid";
import {columns, headCells} from "./CellTemplate";
import {Instance} from "mobx-state-tree";
import {ClientModel} from "../../Infra/Models/ShipmentEntities/Client";

interface IOrder {
    manager: string;
    status: string;
    labeling: string;
    cargoAgencia: string;
    truck: string;
    country: string;
    city: string;
}

const newEntityButtonRow = (clients: ClientModel[], onSubmit: () => void): Row => {
    let rowId = 1;
    clients.forEach( client => rowId += client.length);

    return {
        rowId: rowId,
        reorderable: false,
        cells: [
            {
                type: "newEntityButton",
                onSubmit: onSubmit
            }
        ]
    }
}

export const NewOrderForm = observer(() => {
    const {
        clientStore,
        dropdownStore
    } = useMst();

    const onClientChange = (newClient: string): void => {
        // const client: DefaultClientModel = dropdownStore.getByName(newClient);
        // console.log(JSON.stringify(client));
        // setValue("labeling", client.labelling);
        // setValue("cargoAgencia", client.defaultCargoAgencia.name);
        // setValue("truck", client.defaultTruck.name);
        // setValue("country", client.country.name);
        // setValue("city", client.city.name);
    }

    const [currentClients, setCurrentClients] = React.useState<ClientModel[]>([]);

    const handleAddNewEntity = () => {
        // handle button click
    }

    const getRows = (): Row[] => {
        return [
            headCells,
        ...currentClients.flatMap(client => client.rows),
           newEntityButtonRow(currentClients, handleAddNewEntity)
        ]
    }

    return (
        <Box
            component={"form"}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
        >
            {/*    <FormSelect control={control} name={'status'} defaultValue={'created'} values={dropdownStore.getEntities("order_status")}/>*/}
            {/*    <FormSelect control={control} name={'labeling'} defaultValue={''} values={dropdownStore.getEntities("client")} onChange={onClientChange}/>*/}
            {/*/!* onSubmit={handleSubmit(submitHandler)} *!/*/}
            {/*        <Controller*/}
            {/*            name={"manager"}*/}
            {/*            control={control}*/}
            {/*            defaultValue={""}*/}
            {/*            render={*/}
            {/*                ({ field: { onChange, value }, fieldState: { error }, formState, }) => (*/}
            {/*                    <TextField*/}
            {/*                        variant="outlined"*/}
            {/*                        error={error !== undefined}*/}
            {/*                        onChange={onChange}*/}
            {/*                        value={value}*/}
            {/*                        label={error === undefined ? "Manager" : error.message}*/}
            {/*                    />*/}
            {/*                )*/}
            {/*            }*/}
            {/*        />*/}
            {/*    <Controller*/}
            {/*        name={"cargoAgencia"}*/}
            {/*        control={control}*/}
            {/*        defaultValue={""}*/}
            {/*        render={*/}
            {/*            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (*/}
            {/*                <TextField*/}
            {/*                    variant="outlined"*/}
            {/*                    error={error !== undefined}*/}
            {/*                    onChange={onChange}*/}
            {/*                    value={value}*/}
            {/*                    label={error === undefined ? "Cargo Agencia" : error.message}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Controller*/}
            {/*        name={"truck"}*/}
            {/*        control={control}*/}
            {/*        defaultValue={""}*/}
            {/*        render={*/}
            {/*            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (*/}
            {/*                <TextField*/}
            {/*                    variant="outlined"*/}
            {/*                    error={error !== undefined}*/}
            {/*                    onChange={onChange}*/}
            {/*                    value={value}*/}
            {/*                    label={error === undefined ? "Truck" : error.message}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Controller*/}
            {/*        name={"country"}*/}
            {/*        control={control}*/}
            {/*        defaultValue={""}*/}
            {/*        render={*/}
            {/*            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (*/}
            {/*                <TextField*/}
            {/*                    variant="outlined"*/}
            {/*                    error={error !== undefined}*/}
            {/*                    onChange={onChange}*/}
            {/*                    value={value}*/}
            {/*                    label={error === undefined ? "Country" : error.message}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Controller*/}
            {/*        name={"city"}*/}
            {/*        control={control}*/}
            {/*        defaultValue={""}*/}
            {/*        render={*/}
            {/*            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (*/}
            {/*                <TextField*/}
            {/*                    variant="outlined"*/}
            {/*                    error={error !== undefined}*/}
            {/*                    onChange={onChange}*/}
            {/*                    value={value}*/}
            {/*                    label={error === undefined ? "City" : error.message}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Button className="btnNextStep" variant={"contained"} type={"submit"} >Sumbit</Button>*/}

            <ReactGrid columns={columns} rows={getRows()} stickyLeftColumns={4} enableRowSelection/>
        </Box>
    );
});
// onClick={handleSubmit(submitHandler)}