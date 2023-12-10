import {Column, Row} from "@silevis/reactgrid";

export const columns: Column[] = [
    { columnId: "manager", resizable: true },
    { columnId: "status", resizable: true },
    { columnId: "comment", resizable: true },
    { columnId: "flower_type", resizable: true },
    { columnId: "number_of_boxes", resizable: true },
    { columnId: "box_type", resizable: true },
    { columnId: "variety", resizable: true },
    { columnId: "length", resizable: true },
    { columnId: "number_of_stems", resizable: true },
    { columnId: "farm", resizable: true },
    { columnId: "release_date", resizable: true },
    { columnId: "purchase_price", resizable: true },
    { columnId: "total", resizable: true },
    { columnId: "labeling", resizable: true },
    { columnId: "cargo_agencia", resizable: true },
    { columnId: "truck", resizable: true },
    { columnId: "difference", resizable: true },
    { columnId: "sale_price", resizable: true },
    { columnId: "total_sales", resizable: true },
    { columnId: "awb", resizable: true },
    { columnId: "incoming_invoice", resizable: true },
    { columnId: "our_invoice", resizable: true },
    { columnId: "final_price_in_miami", resizable: true },
    { columnId: "order_type", resizable: true },
    { columnId: "country", resizable: true },
    { columnId: "city_of_delivery", resizable: true },
];

export const headCells: Row = {
    rowId: "head",
    cells: [
        {
            type: "header",
            text: "Manager",
        },
        {
            type: "header",
            text: "Status",
        },
        {
            type: "header",
            text: "Comment",
        },
        {
            type: "header",
            text: "Flower type",
        },
        {
            type: "header",
            text: "Num of boxes",
        },
        {
            type: "header",
            text: "Box type",
        },
        {
            type: "header",
            text: "Variety",
        },
        {
            type: "header",
            text: "Length",
        },
        {
            type: "header",
            text: "Number of stems",
        },
        {
            type: "header",
            text: "Farm",
        },
        {
            type: "header",
            text: "Release date",
        },
        {
            type: "header",
            text: "Purchase price",
        },
        {
            type: "header",
            text: "Total",
        },
        {
            type: "header",
            text: "Labelling",
        },
        {
            type: "header",
            text: "Cargo agencia",
        },
        {
            type: "header",
            text: "Truck",
        },
        {
            type: "header",
            text: "Difference",
        },
        {
            type: "header",
            text: "Sale price",
        },
        {
            type: "header",
            text: "Total sales",
        },
        {
            type: "header",
            text: "AWB",
        },
        {
            type: "header",
            text: "Invoice",
        },
        {
            type: "header",
            text: "Invoice (our)",
        },
        {
            type: "header",
            text: "Price in Miami",
        },
        {
            type: "header",
            text: "Order type",
        },
        {
            type: "header",
            text: "Country",
        },
        {
            type: "header",
            text: "City of delivery",
        },
    ]}