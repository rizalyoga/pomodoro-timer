import React, { useState, useEffect } from "react";
import { TodoListInterface, FilterOptionType } from "../../types/types";
import CardTodo from "./CardTodo";
import FilterButtons from "./FilterButtons";
import Swal from "sweetalert2";
import { useLocalStorage } from "usehooks-ts";

const TodoComponent = () => {
  const [todos, setTodos, removeAllTodos] = useLocalStorage(
    "my-todos",
    [] as TodoListInterface[]
  );
  const [filterTodo, setFilterTodos] = useState<TodoListInterface[]>([]);
  const [inputTodo, setInputTodo] = useState("");
  const [filterOption, setFilterOption] = useState<FilterOptionType>("all");

  useEffect(() => {
    filterDataTodos(filterOption);
  }, [todos, filterOption]);

  const createNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTodo === "") {
      Swal.fire({
        icon: "warning",
        text: "Please input field!",
      });
      return;
    }

    const newTodo = {
      id: new Date().toString().replace(/\s/g, "") + Math.random().toString(),
      text: inputTodo,
      completed: false,
      date: new Date().toString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputTodo("");
  };

  const deleteTodo = (id: string) => {
    Swal.fire({
      text: "Are you sure you want to delete this todo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete action
        setTodos(todos.filter((todo) => todo.id !== id));

        // show alert after delete action
        Swal.fire({
          text: "Success Deleted!",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  };

  const deleteAllTodos = () => {
    if (todos.length !== 0) {
      Swal.fire({
        text: "Are you sure you want to delete all todos?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Yes",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Delete action
          removeAllTodos();

          // show alert after delete action
          Swal.fire({
            text: "Success Deleted!",
            icon: "success",
            timer: 1200,
            showConfirmButton: false,
          });
        }
      });
    }
  };

  const filterDataTodos = (filterOption: string) => {
    let filteredTodos: TodoListInterface[] = [];
    if (filterOption === "all") {
      filteredTodos = todos;
    } else if (filterOption === "done") {
      filteredTodos = todos.filter((todo) => {
        return todo.completed === true;
      });
    } else {
      filteredTodos = todos.filter((todo) => {
        return todo.completed === false;
      });
    }

    setFilterTodos(filteredTodos);
  };

  const doneTodo = (id: string) => {
    const newDataTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodos(newDataTodo);
  };

  return (
    <div className="sm:mt-8 lg:mt-0 lg:-ml-24 lg:mx-36">
      <h1 className="font-semibold uppercase text-xl text-center text-slate-900 mb-8 tracking-tighter lg:mt-28 md:text-2xl">
        My Todo List
      </h1>

      <div className="header-todos flex justify-between items-center flex-wrap px-8 mb-6 lg:px-10 gap-2">
        <FilterButtons
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
        <button
          onClick={deleteAllTodos}
          title="Delete all todos"
          className="px-4 py-2 text-xs rounded-md border cursor-pointer transition duration-300 border-black bg-black text-white  hover:bg-red-500 hover:border-red-500 hover:text-white active:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <form
        onSubmit={createNewTodo}
        className="px-8 flex justify-center items-center gap-2 lg:px-10"
      >
        <input
          type="text"
          placeholder="Add New Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          required
          className="w-full px-4 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <input
          title="Create todo"
          type="submit"
          value={"Create"}
          className="px-4 py-2 text-sm rounded-md border cursor-pointer transition duration-300 bg-white border-slate-500 hover:bg-black hover:text-white active:bg-slate-800 active:text-white"
        />
      </form>

      <div className="list-todo-container py-6 px-8 flex flex-col justify-center items-center gap-3 lg:px-10 ">
        {todos.length < 1 && (
          <>
            <div className="border bg-slate-100 border-slate-400 rounded-md mt-3 px-4 py-2 animate-bounce">
              <p className="text-sm text-center text-slate-700 md:text-xl">
                You don't have any todo yet
              </p>
            </div>
          </>
        )}

        {filterTodo.map((todo) => (
          <CardTodo
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            key={todo.id}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
            date={todo.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoComponent;
