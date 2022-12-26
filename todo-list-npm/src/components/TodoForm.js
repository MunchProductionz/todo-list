import React, { useState } from "react";

function TodoForm() {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value});
    }

    return (
        <form>
            <input 
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button />
        </form>
    );
    
}

export default TodoForm