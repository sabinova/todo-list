function TodoListItem({ todo, onCompleteTodo }) {
    return (
    <li>
        <form>
            <input 
                type="checkbox" 
                id="todo" 
                checked={todo.isCompleted} 
                onChange={onCompleteTodo} />
            {todo.title}
        </form>
    </li>
    );
}

export default TodoListItem;