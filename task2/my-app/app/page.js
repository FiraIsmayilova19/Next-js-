'use client';

import { useState } from 'react';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';

export default function HomePage() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Read Book', completed: false },
    { id: 2, title: 'Play Tennis', completed: false },
    { id: 3, title: 'Write Code', completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleAdd = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', backgroundColor: 'white', padding: '2rem', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>📝 Todolist</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
      <hr style={{ margin: '2rem 0' }} />
      <TodoForm onAdd={handleAdd} />
    </div>
  );
}
