export interface TodoListInterface {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

export interface CardTodoProps extends TodoListInterface {
  deleteTodo: (id: string) => void;
  doneTodo: (id: string) => void;
}

export type FilterOptionType = "all" | "done" | "undone";
