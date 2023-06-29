import { useAppSelector } from "../../../hooks/useAppSelector";
import ToDoCard from "../ToDoList/ToDoCard";

const Save = () => {
    const {save} = useAppSelector(s => s.ToDoSlice)
    return (
        <div style={{display: "flex", justifyContent: "center", paddingTop: "150px", gap: "25px"}}>
{
    save.map(el => (
        <ToDoCard el={el}/>
    ))
}
        </div>
    );
};

export default Save;