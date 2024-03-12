import { Todo, TodoCard } from "@/components/todo-card";
import { TODO_URL } from "@/lib/api";

async function getTodos() {
  const response = await fetch(TODO_URL);
  if (!response.ok) throw new Error("Failed to fetch todos");
  const todos: Todo[] = await response.json();
  return todos;
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="grid grid-cols-4 p-10">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
