import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useState} from 'react';


function App() {
  const [newTodo, setNewTodo] = useState('new todo');
  return (
    <>
      <h1>Todo List</h1>
        <TodoForm />
        <p>{newTodo}</p>
        <TodoList />
    </>
  );
}

export default App;
