import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react";
import { OrderForm } from "../../Infra/Models/OrderForm";
import {Box, FormControl, FormGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useMst} from "../../Infra/Models/Root";
import {FormSelect} from "../../Components/FormSelect/FormSelect";
import {DefaultClientModel} from "../../Infra/Models/DropdownEntities";
import {columns, headCells} from "../Shipment/ShipmentTableHead";
import {Cell, ReactGrid, Row} from "@silevis/reactgrid";
import * as React from "react";

interface IOrder {
    manager: string;
    status: string;
    labeling: string;
    cargoAgencia: string;
    truck: string;
    country: string;
    city: string;
}


export const NewOrderForm = observer(() => {
    const {
        clientStore,
        dropdownStore
    } = useMst();

    // const {
    //     orderFormStore
    // } = useStore();
    const submitHandler: SubmitHandler<IOrder> = (data: IOrder) => {
        console.log(data);
    };

    const onClientChange = (newClient: string): void => {
        const client: DefaultClientModel = dropdownStore.getByName(newClient);
        console.log(JSON.stringify(client));
        // setValue("labeling", client.labelling);
        // setValue("cargoAgencia", client.defaultCargoAgencia.name);
        // setValue("truck", client.defaultTruck.name);
        // setValue("country", client.country.name);
        // setValue("city", client.city.name);
    }


    const visibleRows = React.useMemo(
        ()   => {
            return [
                headCells,

            ];
        },
        []
    );
    return (
        <Box
            component={"form"}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
        >
            <ReactGrid columns={columns} rows={visibleRows} stickyLeftColumns={4}/>
                <Button className="btnNextStep" variant={"contained"} type={"submit"} >Sumbit</Button>
        </Box>
    );
});
// onClick={handleSubmit(submitHandler)}