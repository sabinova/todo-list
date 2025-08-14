import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useState} from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

function addTodo(title) {
    const newTodo = { title, id: Date.now(), isCompleted: false };
    setTodoList([...todoList, newTodo]);
  };

// Create a helper function completeTodo. It:
// takes an id
// maps through the todoList and:
// if the current todo.id matches the id, return a new object that destructures the current todo and isCompleted set to true
// otherwise (if todo.id does not match the id) return the todo
// saves the resulting array to a const updatedTodos
// update the todoList state with updatedTodos

function completeTodo(id) {
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: true };
    }
    return todo;
  });
  setTodoList(updatedTodos);
}

  return (
    <>
      <h1>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </>
  );
}

export default App;
