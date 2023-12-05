import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import {observer} from "mobx-react";
import {BoxModel, ClientModel, FlowerModel, OrderModel, ShipmentModel} from "../../Models/Shipment";
import {useStore} from "../../Infra/Stores/Store";
import {headCells, ShipmentTableHead} from "./ShipmentTableHead";
import {ShipmentTableToolbar} from "./ShipmentTableToolbar";
import {useAsyncError} from "react-router-dom";
import {useEffect} from "react";
import {SelectedRow} from "../../Models/types";
import {CopyPreviewModal} from "./CopyPreviewModal";
import {ClickAwayListener} from "@mui/material";


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const exportToRow = (index: number, flower: FlowerModel, box: BoxModel, order: OrderModel, client: ClientModel): ShipmentModel => (
    {
        id: flower.id,
        income_price: flower.income_price,
        outcome_price: flower.outcome_price,
        hotline_miami_price: flower.hotline_miami_price,
        stems: flower.stems,
        flower_name: flower.flower_name,
        flower_sort: flower.flower_sort,
        flower_length: flower.flower_length,
        total: flower.total,
        total_sale: flower.total_sale,
        difference: flower.difference,
        // Invoice
        invoice: box.invoice.invoice,
        plantation: box.invoice.plantation,
        // Box
        release_date: box.release_date,
        box_count: box.box_count,
        box_type: box.box_type,
        // Order
        manager_name: order.manager_name,
        comment: order.comment,
        outcome_invoice: order.outcome_invoice,
        order_type: order.order_type,
        // Client
        client_name: client.client_name,
        country: client.country,
        city: client.city,
        agencie: client.agencie,
        truck: client.truck,
    }
)


export const Shipment = observer(() => {
    const {
        shipmentStore
    } = useStore();


    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] =
        React.useState<keyof ShipmentModel>("box_count");
    const [selected, setSelected] = React.useState<SelectedRow[]>([]);
    const [copyOpen, setCopyOpen] = React.useState<boolean>(false);
    const [toCopy, setToCopy] = React.useState<string>("");
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof ShipmentModel
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    const handleCopy = () => {
        const selection = window.getSelection();
        if (selection) {
            setToCopy(selection.toString());
            setCopyOpen(true);
        }
    };

      useEffect(() => {
        document.addEventListener('copy', handleCopy);
        return () => {
            document.removeEventListener('copy', handleCopy);
        };
    }, []);


    const handleClick = (event: React.MouseEvent<unknown>, row: SelectedRow) => {
        const selectedIndex = selected.findIndex((r) => r.id === row.id);
        let newSelected: SelectedRow[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, row);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };


    const isSelected = (id: number) => selected.find((v) => v.id === id) !== undefined;

    const visibleRows = React.useMemo(
        () => {
            let result: ShipmentModel[] = [];

            if (shipmentStore.getClients().length === 0) {
                return result;
            }

            shipmentStore.getClients().forEach(
                (client) => {
                    client.orders.forEach((order) => {
                        order.boxes.forEach((box) => {
                            box.flowers.forEach((flower, index) => {
                                result.push(exportToRow(index, flower, box, order, client))
                            })
                        })
                    })
                }
            )
            return result;
        },
        [shipmentStore.getClients()]
    );

    useEffect(() => {
        shipmentStore.load();
    }, []);

    return (

        <Box sx={{width: "100%"}}>
            <Paper sx={{width: "100%", mb: 2}}>
                <ShipmentTableToolbar selected={selected} openCopyModal={() => setCopyOpen(true)}/>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        stickyHeader
                        aria-labelledby="tableTitle"
                    >
                        <ShipmentTableHead/>
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(index);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, {id: index, data: row})}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{cursor: "pointer"}}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                            />
                                        </TableCell>
                                        {headCells.map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                align={cell.numeric ? "right" : "left"}

                                            >
                                                {row[cell.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

                <CopyPreviewModal close={() => setCopyOpen(false)} open={copyOpen} selectedValues={selected} textCopy={toCopy}/>

        </Box>
)
    ;
});