import './App.css';
import CreateToDo from './components/CreateToDo';
import {useState} from 'react';
import Layout from './components/Layout';
import DisplayToDo from './components/DisplayToDo';

function App() {
  const [showCreateToDo, setShowCreateToDo] = useState(false);
  const [toDos, setToDos] = useState([]);

  const handleClick = ()=>{
    setShowCreateToDo(true);
  }

  const createList = (newToDoTitle)=>{
    const updatedToDos = [
      ...toDos, 
      {
      id:Math.round(Math.random()*99),
      newToDoTitle
      }
    ];
      setToDos(updatedToDos);
      console.log(toDos)
  }

  const deleteListById = (id)=>{
    const updatedToDos = toDos.filter((todo) =>{
      return todo.id !== id;
    });

    setToDos(updatedToDos);
  };

  const editToDoById =(id, newToDo)=>{
    const updatedToDos = toDos.map((todo)=>{
      if(todo.id===id){
        return {...todo, newToDoTitle:newToDo}
      }

      return todo;
    })
    setToDos(updatedToDos);
  }


  return (
    <div>
      <Layout />
    
      <DisplayToDo toDos={toDos} onDelete={deleteListById} onEdit={editToDoById}/>

      {!showCreateToDo && <button className='m-3 btn btn-success mt-3' type="submit" onClick={handleClick}>Create</button>}

      {showCreateToDo && <CreateToDo onCreate={createList}/>}
    </div>
  );
}

export default App;
