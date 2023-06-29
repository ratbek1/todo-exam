import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { IToDo } from '../../../../typess/IToDo';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { addBasket, addSave, delTodo } from '../../../Reducers/ToDoSlice';

interface Iprops {
    el: IToDo
}
export default function ToDoCard({el}: Iprops) {
    const dispatch = useAppDispatch()
  return (
    <Card variant="outlined" sx={{ width: 320, background: "#c5cae9"}}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {el.title}
        </Typography>
        <Typography level="body2">{el.date}</Typography>
        <IconButton onClick={() => dispatch(addSave(el))}
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="400px">
        <img style={{objectFit: "cover"}}
          src={el.image}
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${el.price}
          </Typography>
        </div>
        <Button onClick={() => dispatch(addBasket(el))}
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 800 }}
        >
          Basket
        </Button> 
         <Button onClick={() => dispatch(delTodo(el))}
          variant="solid"
          size="sm"
          color="danger"
          aria-label="Explore Bahamas Islands"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
