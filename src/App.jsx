import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useState} from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

function addTodo(title) {
    const newTodo = { title, id: Date.now() };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
    </>
  );
}

export default App;
