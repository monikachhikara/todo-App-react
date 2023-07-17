import { useState } from "react";
import DisplayToDo from "./DisplayToDo";

function CreateToDo({onCreate}){
    const [newToDoTitle, setNewToDoTitle] = useState('');

    const handleChange = (event)=>{
        setNewToDoTitle(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
       
        const todoData = {name:newToDoTitle};

        try{
            const response = await fetch('https://localhost:7096/api/TodoItem', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(todoData),
            });
            setNewToDoTitle('')

            if(!response.ok){
                throw new Error('Failed to create todo');
            } 
            } catch (error){
                console.error(error);
        }
    }


    return (
        <div className="container mt-5" >
        <DisplayToDo />
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