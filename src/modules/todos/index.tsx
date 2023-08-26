import { Button } from "@/components/shared/button";
import React, { useEffect, useState } from "react";

interface Todos {
  id: number;
  name: string;
}

export function Todos() {
  const [todoRecords, setTodoRecords] = useState<Array<Todos>>([]);
  const [clickedTodo, setClickedTodo] = useState<Todos | undefined>();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("api/todos");
        const data = await response.json();
        console.log("data is:", data);
        setTodoRecords(data);
      } catch (error) {
        console.log("error is:", error);
      }
    };
    fetchedData();
  }, []);

  const handleClickedTodo = async (id: number) => {
    console.log("id :", id);
    try {
      const response = await fetch(`api/todos/${id}`);
      const todo = await response.json();
      console.log("todo is:", todo);
      setClickedTodo(todo);
    } catch (error) {
      console.log("error is:", error);
    }
  };

  const onClick = () => {};

  return (
    <div>
      <ul>
        {todoRecords.length > 0 &&
          todoRecords.map((todo) => {
            return (
              <div key={todo.id}>
                <li onClick={() => handleClickedTodo(todo.id)}>{todo.name}</li>
                {clickedTodo?.id && <p>{clickedTodo.name} is clicked</p>}
              </div>
            );
          })}
      </ul>

      <Button onClick={onClick} buttonText="Get first element" />
    </div>
  );
}
