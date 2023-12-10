import { observer } from "mobx-react";
import { Box, Container } from "@mui/material";
import { useMst } from "../../Infra/Models/Root";
import React, { useMemo, useState } from "react";
import { ReactGrid, Row } from "@silevis/reactgrid";
import { columns, headCells } from "./CellTemplate";
import { ClientModel } from "../../Infra/Models/ShipmentEntities/Client";
import { AddCellButton } from "../../Components/NewEntityButtonCell/AddCellButton";
import { NewOrderStoreModel } from "../../Infra/Models/NewOrderStore";
import Button from "@mui/material/Button";

const createNewClientRow = (store: NewOrderStoreModel, additionalRows?: Row[]) => {
    return [
        headCells,
        ...store.clients.flatMap(client => client.rows),
        ...(additionalRows || [])
    ]
}

export const NewOrderForm = observer(() => {
    const {
        clientStore,
        dropdownStore,
        newOrderStore
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
    const [editing, setEditing] = useState<boolean>(false);
    const [rows, setRows] = useState<Row[]>([
        headCells,
        ...newOrderStore.clients.flatMap(client => client.rows)]
    );

    const handleAddNewClient = () => {
        setRows(createNewClientRow(newOrderStore, []));
        setEditing(true);
    }

    const saveData = () => {
        console.log("Saved");
        console.log(JSON.stringify(newOrderStore.clients));
        setEditing(false);
    }

    const cancelData = () => {
        newOrderStore.clear();
        setEditing(false);
    }
    return (
        <Box
            component={"form"}
            sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
            }}
        >
            <ReactGrid columns={columns} rows={rows} stickyLeftColumns={4} enableRowSelection />
            {editing ? (<>
                <Button variant={"outlined"} onClick={() => saveData()}>Save</Button>
                <Button variant={"contained"} color={"error"} onClick={() => cancelData()}>Cancel</Button>
            </>) : <AddCellButton buttons={[
                { label: "Add Cell", action: handleAddNewClient }
            ]} />}
        </Box>
    );
});
// onClick={handleSubmit(submitHandler)}