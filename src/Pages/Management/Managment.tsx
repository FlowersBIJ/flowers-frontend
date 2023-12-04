
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel/CustomTabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button, Checkbox } from '@mui/material';
import { observer } from 'mobx-react';
import {useStore} from "../../Infra/Stores/Store";
import {EntityType} from "../../Models/EntityType";
import {isObject} from "util";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export const Managment = observer(() => {
  const {adminPanelStore: {fillEntities, entities, currentEntity, setCurrentEntity, getCurrentEntities}} = useStore();


  React.useEffect(() => {
    fillEntities();
  }, []);

    return (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentEntity} onChange={(e, newCurrentEntity) => setCurrentEntity(newCurrentEntity)} aria-label="basic tabs example">
          {
            Object.keys(entities).map(
                (entityType: string) => {
                  return <Tab key={entityType} label={entityType} value={entityType}/>
                }
            )
          }
        </Tabs>
      </Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Choose Type</StyledTableCell>
            <StyledTableCell align="right">Visible</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getCurrentEntities().map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right"><Checkbox /></StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colSpan={2}><Button variant={"contained"}>Add new</Button></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
        </TableContainer>
    </Box>
    );
});
