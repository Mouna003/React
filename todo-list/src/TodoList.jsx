import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
const [todos, setTodos] = useState([
    { id: 1, text: "Get Python black belt", completed: true },
    { id: 2, text: "Get MERN black belt", completed: false },
]);

const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
};

const toggleCompletion = (id) => {
    setTodos(
    todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )

    };

const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

return (
    <div>
    <h2>Todo List</h2>
    <AddTodo addTodo={addTodo} />
    {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        todo={todo}
        toggleCompletion={toggleCompletion}
        removeTodo={removeTodo}
        />
    
    </div>
);
};

export default TodoList;
