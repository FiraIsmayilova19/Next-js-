export default function TodoItem({ todo, onToggle }) {
  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const labelStyle = {
    marginLeft: '0.5rem',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <label style={labelStyle}>{todo.title}</label>
    </div>
  );
}
