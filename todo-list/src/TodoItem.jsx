const TodoItem = ({ todo, toggleCompletion, removeTodo }) => {
    return (
    <div className="todo-item">
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
        </span>
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(todo.id)}
        />
        <button className="delete" onClick={() => removeTodo(todo.id)}>
        Delete
        </button>
    </div>
    );
};

export default TodoItem;
