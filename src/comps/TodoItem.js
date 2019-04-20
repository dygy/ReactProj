import React from "react"

function TodoItem(item){
        return (
            <div className="todo-item">
                <input type="checkbox" defaultChecked={item.check} disabled={true}/>
                {console.log(item)}
                <p>{item.value}</p>
            </div>
        )

}

export default TodoItem