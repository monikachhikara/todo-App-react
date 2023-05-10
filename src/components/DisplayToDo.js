import DisplayList from "./DisplayList";

function DisplayToDo({toDos, onDelete, onEdit}){
    const renderedToDo = toDos.map((todo)=>{
        return <DisplayList key={todo.id} onDelete={onDelete} onEdit={onEdit} todo={todo} />;
    });

    return(
        <div className="Conatiner">
            {renderedToDo}
        </div>
    )
}

export default DisplayToDo;