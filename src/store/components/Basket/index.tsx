import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BasketTable from './BasketTable';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Basket () {
    const {basket} = useAppSelector(s => s.ToDoSlice)
    const total = basket.reduce((acc, el) => {
        return acc + el.count * el.price
    },0)
  return (
    <TableContainer sx={{paddingTop: "90px", display: "flex" ,justifyContent: "center" }}>
      {total === 0 ? <h1 style={{color: "red"}}>NO LIST!!</h1>
     : <Table sx={{ width: "80%"}} aria-label="customized table">
       <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Count</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
            basket.map(el => (
                <BasketTable el={el}/>
            ))
            }
        </TableBody>
        { total === 0 ? null : <h1 style={{color: "yellowgreen" }}>$ {total}</h1>}
      </Table>}
    </TableContainer>
  );
}