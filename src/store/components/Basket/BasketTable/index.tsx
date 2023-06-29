import Button from '@mui/joy/Button';
import { IBasket } from "../../../../typess/IToDo";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { addBasket, decBasket, delBasket } from '../../../Reducers/ToDoSlice';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

interface IBas {
    el: IBasket
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const BasketTable = ({el}: IBas) => {
    const dispatch = useAppDispatch()
    
    return (
             <StyledTableRow >
              <img width={150} src={el.image}/>
              <StyledTableCell>{el.title}</StyledTableCell>
              <StyledTableCell>
                <div style={{display: "flex" , alignItems: "center"}}>
                <Button onClick={() => dispatch(addBasket(el))} sx={{background: "black"}}>+</Button>
                <Typography sx={{margin: "0 15px"}}>
                {el.count}
                </Typography>
                <Button onClick={() => dispatch(decBasket(el))} sx={{background: "black"}}>-</Button>
                </div>
              </StyledTableCell>
              <StyledTableCell>$ {el.price * el.count}</StyledTableCell>
              <StyledTableCell>
              <Button onClick={() => dispatch(delBasket(el))}
          variant="solid"
          size="sm"
          color="danger"
          aria-label="Explore Bahamas Islands"
        >
          Delete
        </Button>
              </StyledTableCell>
            </StyledTableRow>
    );
};

export default BasketTable;