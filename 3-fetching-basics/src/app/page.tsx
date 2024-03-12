import { Todo, TodoCard } from "@/components/todo-card";

export default async function Home() {
  const todos: Todo[] = [];

  return (
    <div className="grid grid-cols-4 p-10">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
