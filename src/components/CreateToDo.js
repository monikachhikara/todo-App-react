import { useState } from "react";

function CreateToDo({onCreate}){
    const [newToDoTitle, setNewToDoTitle] = useState('');

    const handleChange = (event)=>{
        setNewToDoTitle(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(newToDoTitle);
        setNewToDoTitle('');
    }


    return (
        <div className="container mt-5" >
            <h2>Create a new TO-DO!</h2>
            <form onSubmit={handleSubmit} >
                <div className="input group">
                    <input type="text" className="form-control" value={newToDoTitle} onChange={handleChange}/>
                    <button className="btn btn-success mt-3" >Add</button>
                 </div>
            </form>
        </div>
    )
}

export default CreateToDo