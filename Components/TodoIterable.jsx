import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoIterable({todos,id, removeTodoItem}) {
    return (
        <div>
                {todos.map((todos,idx) => (
                    <Todo key={idx} todos={todos} id={id}  removeTodoItem={removeTodoItem}/>
                ))}
        </div>
    )
}

export default TodoIterable
