import React, { useState } from "react";
import { v4 as uuid} from "uuid";
import { Button, TextField } from "@mui/material";

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid });

            // Reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
    
}

export default TodoForm