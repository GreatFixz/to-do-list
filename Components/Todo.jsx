import React from 'react'

function Todo({todos,removeTodoItem}) {
    const handlerRemoveItemTodo = () => removeTodoItem(todos.id)
    return (
        <div className="todoIterableForm">
            <div className="todoIterableText">
                <li className="todoIterableText">{todos.title}</li> 
                <button className="checkbox" onClick={handlerRemoveItemTodo}>DELETE</button>
            </div>
        </div>
    )
}

export default Todo
