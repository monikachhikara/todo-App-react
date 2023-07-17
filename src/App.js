import './App.css';
import CreateToDo from './components/CreateToDo';
import Layout from './components/Layout';
import DisplayToDo from './components/DisplayToDo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path='/' element={<CreateToDo />} />
            <Route path='/createtodo' element={<CreateToDo  />} />
            <Route path='/displaytodo' element={<DisplayToDo />} />
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
