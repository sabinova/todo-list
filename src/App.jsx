import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import {useState} from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

function addTodo(title) {
    const newTodo = { title, id: Date.now(), isCompleted: false };
    setTodoList([...todoList, newTodo]);
  };


function completeTodo(id) {
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: true };
    }
    return todo;
  });
  setTodoList(updatedTodos);
}

function updateTodo(editedTodo) {
  const updatedTodos = todoList.map((todo) => 
    todo.id === editedTodo.id ? { ...editedTodo } : todo 
  );
  setTodoList(updatedTodos);
}

  return (
    <>
      <h1>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList 
          todoList={todoList} 
          onCompleteTodo={completeTodo} 
          onUpdateTodo={updateTodo}
        />
    </>
  );
}

export default App;
