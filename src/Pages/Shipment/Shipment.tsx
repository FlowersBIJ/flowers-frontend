import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {observer} from "mobx-react-lite";
import {ShipmentTableToolbar} from "./ShipmentTableToolbar";
import {useEffect} from "react";
import {CopyPreviewModal} from "./CopyPreviewModal";
import {
    ReactGrid,
} from "@silevis/reactgrid";
import {columns, headCells} from "./ShipmentTableHead";
import {useMst} from "../../Infra/Models/Root";



export const Shipment = observer(() => {
    const {
        clientStore
    } = useMst();

    const [copyOpen, setCopyOpen] = React.useState<boolean>(false);


    const visibleRows = React.useMemo(
        ()   => {
            return [
                headCells,
                ...clientStore.getShipmentRows(),

            ];
        },
        [clientStore]
    );

    // useEffect(() => {
    //     shipmentStore.load();
    // }, []);

    return (

        <Box sx={{width: "100%"}}>
            <Paper sx={{width: "100%", mb: 2}}>
                <ShipmentTableToolbar selected={[]} openCopyModal={() => setCopyOpen(true)}/>
                <ReactGrid columns={columns} rows={visibleRows} stickyLeftColumns={4}/>
            </Paper>
                <CopyPreviewModal close={() => setCopyOpen(false)} open={copyOpen} selectedValues={[]}/>

        </Box>
)
    ;
});