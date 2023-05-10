import {useState} from 'react';
import EditToDo from './EditToDo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function DisplayList({todo, onDelete, onEdit}){
    const [isChecked, setIsChecked] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCheckbox = ()=>{
        setIsChecked(!isChecked);
    }

    const handleDeleteClick = () =>{
        onDelete(todo.id);
    }

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }

    const handleSubmit =(id,todo) =>{
        setShowEdit(false);
    }

    let content = <li className={`list-group-item list-group-item-success ${isChecked ? 'disabled' : ''}`}>{todo.newToDoTitle}
    <input type="checkbox" style={{float: "right", margin:"10px 10px"}} checked={isChecked} onChange={handleCheckbox} disabled={isChecked}/>
    <FontAwesomeIcon style={{float: "right", margin:"10px 10px"}} icon={faTrash} onClick={handleDeleteClick}/>
    <FontAwesomeIcon style={{float: "right", margin:"10px 10px"}} icon={faPenToSquare} onClick={handleEditClick}/>
    </li>;

    if(showEdit){
        content = <EditToDo onSubmit={handleSubmit} onEdit={onEdit} todo={todo} />
    }

    return (
        <div className="container mt-3">
            <div className='row'>
                <ul className="list-group">
                    {content}
                </ul>
        </div>
        </div>
    )
}

export default DisplayList;