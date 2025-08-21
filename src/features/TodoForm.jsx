import { useRef, useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';  

function TodoForm({ onAddTodo }) { 
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef(null);

  const handleAddTodo = (event) => {
    event.preventDefault();
    // event.target.title.value = '';
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}> 

    <TextInputWithLabel         // any part of the app can reuse same labeled text input without duplicating code
        elementId="todoTitle"   // combined htmlFor and id
        labelText="Todo" 
        onChange={(event) => setWorkingTodoTitle(event.target.value)} 
        inputRef={todoTitleInput} 
        value={workingTodoTitle}
      />

      <button type="submit" disabled={workingTodoTitle.trim() === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;