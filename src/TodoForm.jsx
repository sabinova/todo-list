import { useRef } from 'react';

function TodoForm(props) {
  const {onAddTodo} = props; 
  const todoTitleInput = useRef('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    onAddTodo(title);
    event.target.title.value = '';
    todoTitleInput.current.focus();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label> 
      <input ref={todoTitleInput} type="text" id="todoTitle" name="title" />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;