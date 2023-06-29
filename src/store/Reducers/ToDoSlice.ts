import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IBasket, IToDo } from "../../typess/IToDo"
const local: any = localStorage.getItem("todo")
const basLocal: any = localStorage.getItem("bas")

interface ToDoState {
    todo: IToDo[],
    basket: IBasket[],
    save: IToDo[]
}
const initialState: ToDoState = {
    todo: JSON.parse(local) || [],
    basket: JSON.parse(basLocal) || [],
    save: []
}
export const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<IToDo>){
            localStorage.setItem("todo", JSON.stringify(state.todo = [{...action.payload},...state.todo]))
        },
        delTodo(state, action: PayloadAction<IToDo>){
            localStorage.setItem("todo", JSON.stringify(state.todo = state.todo.filter(el => el.id !== action.payload.id)))
        },
        addBasket(state, action: PayloadAction<IBasket>){
            let bas = state.basket.find(el => el.id === action.payload.id)
            localStorage.setItem("bas", JSON.stringify([...state.basket, {...action.payload}]))
            if (bas) {
              return {...state, basket: state.basket.map(el => el.id === action.payload.id ? {...el, count: el.count + 1}: el)}
            }else {
              return {...state, basket: [...state.basket, {...action.payload, count: 1}]}
            }
        },
        delBasket(state, action:PayloadAction<IBasket>){
            localStorage.setItem("bas", JSON.stringify(state.basket = state.basket.filter(el => el.id !== action.payload.id)))
        },
        decBasket(state, action:PayloadAction<IBasket>){
            return {...state, basket: [...state.basket.map(el => {
                if (el.id === action.payload.id && el.count > 1){
                    return {...el, count: el.count - 1}
                }else {
                    return el
                }
            })]}
        },addSave(state, action: PayloadAction<IToDo>){
            let fav = state.save.find(el => el.id === action.payload.id)
            if(fav){
                return {...state, save: state.save.filter(el => el.id !== action.payload.id)}
            }else {
                return {...state, save: [...state.save, {...action.payload}]}
            }
        }
    }
})
export default ToDoSlice.reducer
export const {addTodo,delTodo,addBasket,delBasket,decBasket,addSave} = ToDoSlice.actions