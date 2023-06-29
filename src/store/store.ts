import  ToDoSlice  from './Reducers/ToDoSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    ToDoSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore["dispatch"]