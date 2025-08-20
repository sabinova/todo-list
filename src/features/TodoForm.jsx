import { useRef, useState } from 'react';

function TodoForm(props) {
  const {onAddTodo} = props; 
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef(null);

  const handleAddTodo = (event) => {
    event.preventDefault();
    event.target.title.value = '';
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label> 
      <input ref={todoTitleInput} type="text" id="todoTitle" name="title" 
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)} 
      />

      <button type="submit" disabled={workingTodoTitle.trim() === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;