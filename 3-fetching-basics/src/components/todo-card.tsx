import { CheckIcon, XIcon } from "lucide-react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function TodoCard(props: { todo: Todo }) {
  const { id, title, completed } = props.todo;

  return (
    <div
      key={id}
      className="text-white text-lg font-bold p-4 bg-slate-800 rounded-lg shadow-lg m-4 flex items-center justify-between"
    >
      {title}

      {completed ? (
        <CheckIcon className="size-5 text-green-500" />
      ) : (
        <XIcon className="size-5 text-red-500" />
      )}
    </div>
  );
}
