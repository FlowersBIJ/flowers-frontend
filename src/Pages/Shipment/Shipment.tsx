import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

interface Data {
   id: number;
   pais: string;
   tpFlor: string;
   cajas: number;
   tpCaja: string;
   variedad: string;
   long: number;
   tallos: number;
   finca: string;
   fchOut: string;
   compra: number;
   ttCompra: number;
   marca: string;
   cargoAg: string;
   truck: string;
   dif: string;
   venta: number;
   ttVenta: number;
   awb: string;
   invoice: string;
   miami: number;
   ttMiami: number;
   orden: string;
   creador: string;
   ejecutor: string;
}

function createData(data: Partial<Data>): Data {
   return {
      id: data.id || 0,
      pais: data.pais || "",
      tpFlor: data.tpFlor || "",
      cajas: data.cajas || 0,
      tpCaja: data.tpCaja || "",
      variedad: data.variedad || "",
      long: data.long || 0,
      tallos: data.tallos || 0,
      finca: data.finca || "",
      fchOut: data.fchOut || "",
      compra: data.compra || 0,
      ttCompra: data.ttCompra || 0,
      marca: data.marca || "",
      cargoAg: data.cargoAg || "",
      truck: data.truck || "",
      dif: data.dif || "",
      venta: data.venta || 0,
      ttVenta: data.ttVenta || 0,
      awb: data.awb || "",
      invoice: data.invoice || "",
      miami: data.miami || 0,
      ttMiami: data.ttMiami || 0,
      orden: data.orden || "",
      creador: data.creador || "",
      ejecutor: data.ejecutor || "",
   };
}

const rows = [
   createData({
      id: 1,
      pais: "Test1",
      tpFlor: "Test1",
      cajas: 10,
      tpCaja: "Test1",
      variedad: "Test1",
      long: 30,
      tallos: 50,
      finca: "Test1",
      fchOut: "2023-01-01",
      compra: 100,
      ttCompra: 1000,
      marca: "Test1",
      cargoAg: "Test1",
      truck: "Test1",
      dif: "Test1",
      venta: 150,
      ttVenta: 1500,
      awb: "Test1",
      invoice: "Test1",
      miami: 120,
      ttMiami: 1200,
      orden: "Test1",
      creador: "Test1",
      ejecutor: "Test1",
   }),
   createData({
      id: 2,
      pais: "Test2",
      tpFlor: "Test2",
      cajas: 11,
      tpCaja: "Test2",
      variedad: "Test2",
      long: 31,
      tallos: 51,
      finca: "Test2",
      fchOut: "2023-01-01",
      compra: 101,
      ttCompra: 1001,
      marca: "Test2",
      cargoAg: "Test2",
      truck: "Test2",
      dif: "Test2",
      venta: 151,
      ttVenta: 1501,
      awb: "Test2",
      invoice: "Test2",
      miami: 121,
      ttMiami: 1201,
      orden: "Test2",
      creador: "Test2",
      ejecutor: "Test2",
   }),
   createData({
      id: 3,
      pais: "Test3",
      tpFlor: "Test3",
      cajas: 12,
      tpCaja: "Test3",
      variedad: "Test3",
      long: 32,
      tallos: 52,
      finca: "Test3",
      fchOut: "2023-01-01",
      compra: 102,
      ttCompra: 1002,
      marca: "Test3",
      cargoAg: "Test3",
      truck: "Test3",
      dif: "Test3",
      venta: 152,
      ttVenta: 1502,
      awb: "Test3",
      invoice: "Test3",
      miami: 122,
      ttMiami: 1202,
      orden: "Test3",
      creador: "Test3",
      ejecutor: "Test3",
   }),
];

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

interface HeadCell {
   disablePadding: boolean;
   id: keyof Data;
   label: string;
   numeric: boolean;
}

const headCells: readonly HeadCell[] = [
   { id: "pais", numeric: false, disablePadding: true, label: "Pais" },
   { id: "tpFlor", numeric: false, disablePadding: false, label: "Tp.Flor" },
   { id: "cajas", numeric: true, disablePadding: false, label: "#Cajas" },
   { id: "tpCaja", numeric: false, disablePadding: false, label: "Tp.Caja" },
   { id: "variedad", numeric: false, disablePadding: false, label: "Variedad" },
   { id: "long", numeric: true, disablePadding: false, label: "Long." },
   { id: "tallos", numeric: true, disablePadding: false, label: "Tallos" },
   { id: "finca", numeric: false, disablePadding: false, label: "Finca" },
   { id: "fchOut", numeric: false, disablePadding: false, label: "Fch.OUT" },
   { id: "compra", numeric: true, disablePadding: false, label: "$Compra" },
   { id: "ttCompra", numeric: true, disablePadding: false, label: "TT.Compra" },
   { id: "marca", numeric: false, disablePadding: false, label: "Marca" },
   { id: "cargoAg", numeric: false, disablePadding: false, label: "Cargo AG" },
   { id: "truck", numeric: false, disablePadding: false, label: "Truck" },
   { id: "dif", numeric: false, disablePadding: false, label: "Dif." },
   { id: "venta", numeric: true, disablePadding: false, label: "$Venta" },
   { id: "ttVenta", numeric: true, disablePadding: false, label: "TT.Venta" },
   { id: "awb", numeric: false, disablePadding: false, label: "AWB" },
   { id: "invoice", numeric: false, disablePadding: false, label: "Invoice" },
   { id: "miami", numeric: true, disablePadding: false, label: "$Miami" },
   { id: "ttMiami", numeric: true, disablePadding: false, label: "TT.Miami" },
   { id: "orden", numeric: false, disablePadding: false, label: "Orden" },
   { id: "creador", numeric: false, disablePadding: false, label: "Creador" },
   { id: "ejecutor", numeric: false, disablePadding: false, label: "Ejecutor" },
];

interface EnhancedTableProps {
   numSelected: number;
   onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof Data
   ) => void;
   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
   order: Order;
   orderBy: string;
   rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
   const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
   } = props;
   const createSortHandler =
      (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
         onRequestSort(event, property);
      };

   return (
      <TableHead>
         <TableRow>
            <TableCell padding="checkbox">
               <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{ "aria-label": "select all rows" }}
               />
            </TableCell>
            {headCells.map((headCell) => (
               <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
                  sortDirection={orderBy === headCell.id ? order : false}
               >
                  <TableSortLabel
                     active={orderBy === headCell.id}
                     direction={orderBy === headCell.id ? order : "asc"}
                     onClick={createSortHandler(headCell.id)}
                  >
                     {headCell.label}
                     {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                           {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                        </Box>
                     ) : null}
                  </TableSortLabel>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
}

interface EnhancedTableToolbarProps {
   numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
   const { numSelected } = props;

   return (
      <Toolbar
         sx={{
            marginTop: "50px",
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
               bgcolor: (theme) =>
                  alpha(
                     theme.palette.primary.main,
                     theme.palette.action.activatedOpacity
                  ),
            }),
         }}
      >
         {numSelected > 0 ? (
            <Typography
               sx={{ flex: "1 1 100%" }}
               color="inherit"
               variant="subtitle1"
               component="div"
            >
               {numSelected} selected
            </Typography>
         ) : (
            <Typography
               sx={{ flex: "1 1 100%" }}
               variant="h6"
               id="tableTitle"
               component="div"
            >
               Таблица Shipment
            </Typography>
         )}
         {numSelected > 0 ? (
            <Tooltip title="Delete">
               <IconButton>
                  <DeleteIcon />
               </IconButton>
            </Tooltip>
         ) : (
            <Tooltip title="Filter list">
               <IconButton>
                  <FilterListIcon />
               </IconButton>
            </Tooltip>
         )}
      </Toolbar>
   );
}

export default function Shipment() {
   const [order, setOrder] = React.useState<Order>("asc");
   const [orderBy, setOrderBy] = React.useState<keyof Data>("cajas");
   const [selected, setSelected] = React.useState<readonly number[]>([]);
   const [page, setPage] = React.useState(0);
   const [dense, setDense] = React.useState(false);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);

   const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: keyof Data
   ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
   };

   const handleSelectAllClick = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (event.target.checked) {
         const newSelected = rows.map((n) => n.id);
         setSelected(newSelected);
         return;
      }
      setSelected([]);
   };

   const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: readonly number[] = [];

      if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, id);
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

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDense(event.target.checked);
   };

   const isSelected = (id: number) => selected.indexOf(id) !== -1;

   const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

   const visibleRows = React.useMemo(
      () =>
         stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
         ),
      [order, orderBy, page, rowsPerPage]
   );

   return (
      <Box sx={{ width: "100%" }}>
         <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
               <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
               >
                  <EnhancedTableHead
                     numSelected={selected.length}
                     order={order}
                     orderBy={orderBy}
                     onSelectAllClick={handleSelectAllClick}
                     onRequestSort={handleRequestSort}
                     rowCount={rows.length}
                  />
                  <TableBody>
                     {visibleRows.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                           <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.id)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                              sx={{ cursor: "pointer" }}
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
                     {emptyRows > 0 && (
                        <TableRow
                           style={{
                              height: (dense ? 33 : 53) * emptyRows,
                           }}
                        >
                           <TableCell colSpan={headCells.length + 1} />
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={[5, 10, 25]}
               component="div"
               count={rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
         <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
         />
      </Box>
   );
}
