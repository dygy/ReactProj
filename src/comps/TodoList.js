import React from "react"
import TodoItem from "./TodoItem"

function TodoList() {


    return (
        <div className="todo-list">

            <TodoItem value='Full Stack' check={true} />
            <TodoItem value='Java SE' check={true}/>
            <TodoItem value='Game Dev' check={true}/>
            <TodoItem value='Hired' check={false}/>
        </div>
    )
}

export default TodoList