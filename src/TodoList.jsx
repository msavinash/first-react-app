import { TodoItem } from "./TodoItem"

export function TodoList({toggleTodo, deleteTodo, todos}) {

  return (
    <ul className="list">
    {todos.length === 0 && "No todos, yay!"}
    {todos.map(todo => {
      return (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      )
    })}
    </ul>
  )
}