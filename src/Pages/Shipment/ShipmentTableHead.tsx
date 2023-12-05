import {ShipmentModel} from "../../Models/Shipment";
import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {observer} from "mobx-react";

interface HeadCell {
    disablePadding: boolean;
    id: keyof ShipmentModel;
    label: string;
    numeric: boolean;
}


export const headCells: readonly HeadCell[] = [
    {
      id: "income_price",
      numeric: true,
      disablePadding: false,
      label: "Income Price"
    },
    {
      id: "outcome_price",
      numeric: true,
      disablePadding: false,
      label: "Outcome Price"
    },
    {
      id: "hotline_miami_price",
      numeric: true,
      disablePadding: false,
      label: "Miami Price"
    },
    {
      id: "stems",
      numeric: true,
      disablePadding: false,
        label: "Num of stems"
    },
    {
        id: "flower_name",
        numeric: false,
        disablePadding: false,
        label: "Flower name",
    },
    {
        id: "flower_sort",
        numeric: false,
        disablePadding: false,
        label: "Flower sort",
    },
    {
        id: "flower_length",
        numeric: true,
        disablePadding: false,
        label: "Flower length"
    },
    {
        id: "total",
        numeric: true,
        disablePadding: false,
        label: "Total"
    },
    {
        id: "total_sale",
        numeric: true,
        disablePadding: false,
        label: "Total Sale"
    },
    {
        id: "difference",
        numeric: true,
        disablePadding: false,
        label: "Difference"
    },
    {
        id: "invoice",
        numeric: false,
        disablePadding: false,
        label: "Invoice"
    },
    {
        id: "plantation",
        numeric: false,
        disablePadding: false,
        label: "Plantation"
    },
    {
        id: "release_date",
        numeric: false,
        disablePadding: false,
        label: "Release Date"
    },
    {
        id: "box_count",
        numeric: true,
        disablePadding: false,
        label: "Box Count"
    },
    {
        id: "box_type",
        numeric: false,
        disablePadding: false,
        label: "Box Type"
    },
    {
        id: "manager_name",
        numeric: false,
        disablePadding: false,
        label: "Manager"
    },
    {
        id: "comment",
        numeric: false,
        disablePadding: false,
        label: "Comment"
    },
    {
        id: "outcome_invoice",
        numeric: false,
        disablePadding: false,
        label: "Outcome Invoice"
    },
    {
        id: "order_type",
        numeric: false,
        disablePadding: false,
        label: "Order Type"
    },
    {
        id: "client_name",
        numeric: false,
        disablePadding: false,
        label: "Client Name"
    },
    {
        id: "country",
        numeric: false,
        disablePadding: false,
        label: "Country"
    },
    {
        id: "city",
        numeric: false,
        disablePadding: false,
        label: "City"
    },
    {
        id: "agencie",
        numeric: false,
        disablePadding: false,
        label: "Agencia"
    },
    {
        id: "truck",
        numeric: false,
        disablePadding: false,
        label: "Truck"
    },
];


export const ShipmentTableHead = observer(() => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Selected</TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                    >
                            {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
});
