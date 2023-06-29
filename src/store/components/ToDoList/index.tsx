import { Box, Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import React, { FormEvent, useState } from "react";
import { addTodo } from "../../Reducers/ToDoSlice";
import ToDoCard from "./ToDoCard";


function ToDoList() {
    const dispatch = useAppDispatch()
    const {todo} = useAppSelector(s => s.ToDoSlice)
    const [save, setSave] = useState({
        id: 0,
        title: "",
        image: "",
        price: "",
        date: "",
        count:1
      
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSave({
        ...save, [e.target.name]: e.target.value
      })
     
    }
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newTask = {
            id: Math.round(Math.random() * 1000),
            title: save.title,
            price: save.price,
            image: save.image,
            date: save.date,
            count: save.count
        }
        dispatch(addTodo(newTask))
        save.image = ""
        save.price = ""
        save.title = ""
        save.date = ""
        save.count = 1
    }
  return (
    <div style={{paddingTop: "90px"}}>
        <h1 style={{textAlign: "center"}}>Create Card</h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 0 50px 0",
      }}>
        <TextField onChange={handleChange} value={save.image} name="image" sx={{width: "30%"}} type="text" label="Image"/>
        <TextField onChange={handleChange} value={save.title} name="title" sx={{width: "30%", margin: "20px 0"}} type="text" label="Title"/>
        <TextField onChange={handleChange} value={save.price} name="price" sx={{width: "30%"}} type="text" label="Price"/>
        <TextField onChange={handleChange} value={save.date} name="date" sx={{width: "30%", margin: "20px 0"}} type="date"/>
        <Button onClick={handleSubmit} variant="contained" color="success">
         Create
        </Button>
      </form>

      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center",gap: "50px"}}>
        {
            todo.map(el => (
               <ToDoCard el={el}/>
            ))
        }
      </Box>
    </div>
  );
}

export default ToDoList;
