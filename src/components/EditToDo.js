import { useState } from "react";

function EditToDo({todo, onEdit, onSubmit}){
    const [editTodo, setEditToDo] = useState(todo.newToDoTitle);

    const handleChange = (event)=>{
        setEditToDo(event.target.value);
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        onEdit(todo.id, editTodo);
        onSubmit();
    }

    return (
        <div className="container mt-5">
            <h2>Edit a TO-DO!</h2>
            <form onSubmit={handleSubmit} >
                <div className="input group">
                    <input type="text" className="form-control" value={editTodo}  onChange={handleChange}/>
                    <button className="btn btn-success mt-3" >Save</button>
                 </div>
            </form>
        </div>
    )
}

export default EditToDo;