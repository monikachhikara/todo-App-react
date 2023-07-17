import { useEffect, useState } from "react";
import { faPencil, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DisplayToDo(){
    const [listOfTodos, setListOfTodos] = useState([]);
    const [updatedItemId, setUpdatedItemId] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const fetchedData = await fetch("https://localhost:7096/api/TodoItem");
        const jsonData = await fetchedData.json();
        console.log(jsonData);

        setListOfTodos(jsonData);
    }

    const handleTodoDelete = async (id) => {
        try {
          await fetch(`https://localhost:7096/api/TodoItem?id=${id}`, {
            method: "DELETE",
          });
    
          // Remove the deleted item from the list
          setListOfTodos((prevList) =>
            prevList.filter((todo) => todo.id !== id)
          );
        } catch (error) {
          console.error(error);
        }
      };

      const handleUpdateTodo = async (id, updatedTodo) => {
        try {
          const updatedItem = listOfTodos.find((todo) => todo.id === id);
          if (!updatedItem) {
            throw new Error("Todo item not found");
          }
          updatedItem.name = updatedTodo;
      
          await fetch(`https://localhost:7096/api/TodoItem?id=${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
          });
      
          setListOfTodos((prevList) =>
            prevList.map((todo) => {
              if (todo.id === id) {
                return { ...todo, name: updatedTodo };
              }
              return todo;
            })
          );
      
          setUpdatedItemId(null);
          setUpdatedName("");
        } catch (error) {
          console.error(error);
        }
      };
      

    return(
        <div className="conatiner">
        <ul className="list-group">
            {listOfTodos.map((todo) => (
              <div className="list"> 
                <li className="list-group-item list-group-item-success d-flex justify-content-between">
                {updatedItemId === todo.id ? (
                    <div>
                        <input value={updatedName} onChange={(event)=>setUpdatedName(event.target.value)} />
                        <button onClick={() => handleUpdateTodo(todo.id, updatedName)}>
                  Save
                </button>
              </div>
            ) : (
              <div>{todo.name}</div>
            )}
            <div className="list-right">
                <button onClick={()=>setUpdatedItemId(todo.id)}><FontAwesomeIcon icon={faPencil}  /></button>
                <button onClick={()=>handleTodoDelete(todo.id)}><FontAwesomeIcon icon={faTrashCanArrowUp} /></button>
            </div>
                </li>
                </div>
              ))}
        </ul>
      
    </div>
    )
}

export default DisplayToDo;