import { CardTodoProps } from "../../types/types";
import { formatDate } from "../../utils/utils";

const CardTodo = ({
  deleteTodo,
  doneTodo,
  id,
  text,
  completed,
  date,
}: CardTodoProps) => {
  return (
    <div
      key={id}
      className="relative w-full bg-white  border border-slate-400 rounded-md px-4 py-2"
    >
      <span className="flex justify-start items-center gap-2">
        <button
          title={completed ? "Undone" : "Done"}
          onClick={() => doneTodo(id)}
          className="p-1 text-sm rounded-md border border-slate-300 cursor-pointer transition duration-300 bg-white hover:bg-black"
        >
          {completed ? "❌" : "✅"}
        </button>

        <p className={`text-wrap text-sm  ${completed ? "line-through" : ""} `}>
          {text}
        </p>
      </span>

      <p className="text-xs text-slate-400 text-left pt-1">
        {formatDate(date)}
      </p>

      <button
        title="Delete todo"
        onClick={() => deleteTodo(id)}
        className="absolute top-0 right-0 px-2 py-[3px] text-xs text-slate-600 rounded-full border border-slate-400 cursor-pointer transition duration-300 bg-white -mt-2 -mr-2 hover:bg-black hover:text-white"
      >
        🗑️
      </button>
    </div>
  );
};

export default CardTodo;
