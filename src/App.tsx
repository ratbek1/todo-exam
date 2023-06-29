import { Box } from "@mui/material";
import "./App.css";
import ToDoList from "./store/components/ToDoList";
import Header from "./store/components/Header";
import { Route, Routes } from "react-router-dom";
import Basket from "./store/components/Basket";
import Save from "./store/components/Save";

function App() {
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path="/" element={ <ToDoList/> }/>
        <Route path="/basket" element={ <Basket/> }/>
        <Route path="/save" element={ <Save/> }/>
      </Routes>
    </Box>
  );
}

export default App;
