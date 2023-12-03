// import * as React from "react";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";
// import { observer } from "mobx-react";
// import { ShipmentModel } from "../../Models/Shipment";
// import { useStore } from "../../Data/Store";

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//    if (b[orderBy] < a[orderBy]) {
//       return -1;
//    }
//    if (b[orderBy] > a[orderBy]) {
//       return 1;
//    }
//    return 0;
// }

// type Order = "asc" | "desc";

// function getComparator<Key extends keyof any>(
//    order: Order,
//    orderBy: Key
// ): (
//    a: { [key in Key]: number | string },
//    b: { [key in Key]: number | string }
// ) => number {
//    return order === "desc"
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort<T>(
//    array: readonly T[],
//    comparator: (a: T, b: T) => number
// ) {
//    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//    stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) {
//          return order;
//       }
//       return a[1] - b[1];
//    });
//    return stabilizedThis.map((el) => el[0]);
// }

// interface HeadCell {
//    disablePadding: boolean;
//    id: keyof ShipmentModel;
//    label: string;
//    numeric: boolean;
// }

// const headCells: readonly HeadCell[] = [
//    { id: "country", numeric: false, disablePadding: true, label: "Country" },
//    {
//       id: "flowerType",
//       numeric: false,
//       disablePadding: false,
//       label: "Flower type",
//    },
//    {
//       id: "numberOfBoxes",
//       numeric: true,
//       disablePadding: false,
//       label: "Boxes",
//    },
//    { id: "boxType", numeric: false, disablePadding: false, label: "Box Type" },
//    { id: "variety", numeric: false, disablePadding: false, label: "Variety" },
//    { id: "length", numeric: true, disablePadding: false, label: "Length" },
//    {
//       id: "numberOfStems",
//       numeric: true,
//       disablePadding: false,
//       label: "Stems",
//    },
//    { id: "farm", numeric: false, disablePadding: false, label: "Farm" },
//    {
//       id: "releaseDate",
//       numeric: false,
//       disablePadding: false,
//       label: "Release Date",
//    },
//    {
//       id: "purchasePrice",
//       numeric: true,
//       disablePadding: false,
//       label: "Purchase Price",
//    },
//    { id: "total", numeric: true, disablePadding: false, label: "Total" },
//    { id: "labeling", numeric: false, disablePadding: false, label: "Labeling" },
//    {
//       id: "cargoAgencia",
//       numeric: false,
//       disablePadding: false,
//       label: "Cargo AG",
//    },
//    { id: "truck", numeric: false, disablePadding: false, label: "Truck" },
//    {
//       id: "difference",
//       numeric: false,
//       disablePadding: false,
//       label: "Difference",
//    },
//    {
//       id: "salePrice",
//       numeric: true,
//       disablePadding: false,
//       label: "Sale Price",
//    },
//    {
//       id: "totalSales",
//       numeric: true,
//       disablePadding: false,
//       label: "Total Sales",
//    },
//    { id: "awb", numeric: false, disablePadding: false, label: "AWB" },
//    { id: "invoice", numeric: false, disablePadding: false, label: "Invoice" },
//    { id: "miami", numeric: true, disablePadding: false, label: "Miami" },
//    {
//       id: "finalPriceInMiami",
//       numeric: true,
//       disablePadding: false,
//       label: "Miami Final Price",
//    },
//    {
//       id: "orderType",
//       numeric: false,
//       disablePadding: false,
//       label: "Order Type",
//    },
//    { id: "manager", numeric: false, disablePadding: false, label: "Manager" },
//    { id: "done", numeric: false, disablePadding: false, label: "Done" },
// ];

// interface EnhancedTableProps {
//    numSelected: number;
//    onRequestSort: (
//       event: React.MouseEvent<unknown>,
//       property: keyof ShipmentModel
//    ) => void;
//    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//    order: Order;
//    orderBy: string;
//    rowCount: number;
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//    const {
//       onSelectAllClick,
//       order,
//       orderBy,
//       numSelected,
//       rowCount,
//       onRequestSort,
//    } = props;
//    const createSortHandler =
//       (property: keyof ShipmentModel) => (event: React.MouseEvent<unknown>) => {
//          onRequestSort(event, property);
//       };

//    return (
//       <TableHead>
//          <TableRow>
//             <TableCell padding="checkbox">
//                <Checkbox
//                   color="primary"
//                   indeterminate={numSelected > 0 && numSelected < rowCount}
//                   checked={rowCount > 0 && numSelected === rowCount}
//                   onChange={onSelectAllClick}
//                   inputProps={{ "aria-label": "select all rows" }}
//                />
//             </TableCell>
//             {headCells.map((headCell) => (
//                <TableCell
//                   key={headCell.id}
//                   align={headCell.numeric ? "right" : "left"}
//                   padding={headCell.disablePadding ? "none" : "normal"}
//                   sortDirection={orderBy === headCell.id ? order : false}
//                >
//                   <TableSortLabel
//                      active={orderBy === headCell.id}
//                      direction={orderBy === headCell.id ? order : "asc"}
//                      onClick={createSortHandler(headCell.id)}
//                   >
//                      {headCell.label}
//                      {orderBy === headCell.id ? (
//                         <Box component="span" sx={visuallyHidden}>
//                            {order === "desc"
//                               ? "sorted descending"
//                               : "sorted ascending"}
//                         </Box>
//                      ) : null}
//                   </TableSortLabel>
//                </TableCell>
//             ))}
//          </TableRow>
//       </TableHead>
//    );
// }

// interface EnhancedTableToolbarProps {
//    numSelected: number;
// }

// function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
//    const { numSelected } = props;

//    return (
//       <Toolbar
//          sx={{
//             marginTop: "20px",
//             pl: { sm: 2 },
//             pr: { xs: 1, sm: 1 },
//             ...(numSelected > 0 && {
//                bgcolor: (theme) =>
//                   alpha(
//                      theme.palette.primary.main,
//                      theme.palette.action.activatedOpacity
//                   ),
//             }),
//          }}
//       >
//          {numSelected > 0 ? (
//             <Typography
//                sx={{ flex: "1 1 100%" }}
//                color="inherit"
//                variant="subtitle1"
//                component="div"
//             >
//                {numSelected} selected
//             </Typography>
//          ) : (
//             <Typography
//                sx={{ flex: "1 1 100%" }}
//                variant="h6"
//                id="tableTitle"
//                component="div"
//             >
//                Shipment
//             </Typography>
//          )}
//          {numSelected > 0 ? (
//             <Tooltip title="Delete">
//                <IconButton>
//                   <DeleteIcon />
//                </IconButton>
//             </Tooltip>
//          ) : (
//             <Tooltip title="Filter list">
//                <IconButton>
//                   <FilterListIcon />
//                </IconButton>
//             </Tooltip>
//          )}
//       </Toolbar>
//    );
// }

// export const Shipment = observer(() => {
//    const {
//       OrderStore
//    } = useStore();


//    const [order, setOrder] = React.useState<Order>("asc");
//    const [orderBy, setOrderBy] =
//       React.useState<keyof ShipmentModel>("numberOfBoxes");
//    const [selected, setSelected] = React.useState<readonly number[]>([]);
//    const [page, setPage] = React.useState(0);
//    const [dense, setDense] = React.useState(false);
//    const [rowsPerPage, setRowsPerPage] = React.useState(5);

//    const handleRequestSort = (
//       event: React.MouseEvent<unknown>,
//       property: keyof ShipmentModel
//    ) => {
//       const isAsc = orderBy === property && order === "asc";
//       setOrder(isAsc ? "desc" : "asc");
//       setOrderBy(property);
//    };

//    const handleSelectAllClick = (
//       event: React.ChangeEvent<HTMLInputElement>
//    ) => {
//       if (event.target.checked) {
//          const newSelected = rows.map((n) => n.id);
//          setSelected(newSelected);
//          return;
//       }
//       setSelected([]);
//    };

//    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
//       const selectedIndex = selected.indexOf(id);
//       let newSelected: readonly number[] = [];

//       if (selectedIndex === -1) {
//          newSelected = newSelected.concat(selected, id);
//       } else if (selectedIndex === 0) {
//          newSelected = newSelected.concat(selected.slice(1));
//       } else if (selectedIndex === selected.length - 1) {
//          newSelected = newSelected.concat(selected.slice(0, -1));
//       } else if (selectedIndex > 0) {
//          newSelected = newSelected.concat(
//             selected.slice(0, selectedIndex),
//             selected.slice(selectedIndex + 1)
//          );
//       }
//       setSelected(newSelected);
//    };

//    const handleChangePage = (event: unknown, newPage: number) => {
//       setPage(newPage);
//    };

//    const handleChangeRowsPerPage = (
//       event: React.ChangeEvent<HTMLInputElement>
//    ) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//    };

//    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setDense(event.target.checked);
//    };

//    const isSelected = (id: number) => selected.indexOf(id) !== -1;

//    const emptyRows =
//       page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//    const visibleRows = React.useMemo(
//       () =>
//          stableSort(rows, getComparator(order, orderBy)).slice(
//             page * rowsPerPage,
//             page * rowsPerPage + rowsPerPage
//          ),
//       [order, orderBy, page, rowsPerPage]
//    );

//    return (
//       <Box sx={{ width: "100%" }}>
//          <Paper sx={{ width: "100%", mb: 2 }}>
//             <EnhancedTableToolbar numSelected={selected.length} />
//             <TableContainer>
//                <Table
//                   sx={{ minWidth: 750 }}
//                   aria-labelledby="tableTitle"
//                   size={dense ? "small" : "medium"}
//                >
//                   <EnhancedTableHead
//                      numSelected={selected.length}
//                      order={order}
//                      orderBy={orderBy}
//                      onSelectAllClick={handleSelectAllClick}
//                      onRequestSort={handleRequestSort}
//                      rowCount={rows.length}
//                   />
//                   <TableBody>
//                      {OrderStore.ord.map((row, index) => {
//                         const isItemSelected = isSelected(row.id);
//                         const labelId = `enhanced-table-checkbox-${index}`;

//                         return (
//                            <TableRow
//                               hover
//                               onClick={(event) => handleClick(event, row.id)}
//                               role="checkbox"
//                               aria-checked={isItemSelected}
//                               tabIndex={-1}
//                               key={row.id}
//                               selected={isItemSelected}
//                               sx={{ cursor: "pointer" }}
//                            >
//                               <TableCell padding="checkbox">
//                                  <Checkbox
//                                     color="primary"
//                                     checked={isItemSelected}
//                                     inputProps={{
//                                        "aria-labelledby": labelId,
//                                     }}
//                                  />
//                               </TableCell>
//                               {headCells.map((cell) => (
//                                  <TableCell
//                                     key={cell.id}
//                                     align={cell.numeric ? "right" : "left"}
//                                  >
//                                     {row[cell.id]}
//                                  </TableCell>
//                               ))}
//                            </TableRow>
//                         );
//                      })}
//                      {emptyRows > 0 && (
//                         <TableRow
//                            style={{
//                               height: (dense ? 33 : 53) * emptyRows,
//                            }}
//                         >
//                            <TableCell colSpan={headCells.length + 1} />
//                         </TableRow>
//                      )}
//                   </TableBody>
//                </Table>
//             </TableContainer>
//             <TablePagination
//                rowsPerPageOptions={[5, 10, 25]}
//                component="div"
//                count={rows.length}
//                rowsPerPage={rowsPerPage}
//                page={page}
//                onPageChange={handleChangePage}
//                onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//          </Paper>
//          <FormControlLabel
//             control={<Switch checked={dense} onChange={handleChangeDense} />}
//             label="Dense padding"
//          />
//       </Box>
//    );
// });

import { observer } from "mobx-react"

export const Shipment = observer(() => {
   return (
      <div></div>
   )
})