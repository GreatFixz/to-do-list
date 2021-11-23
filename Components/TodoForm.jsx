import React from 'react'
import TodoIterable from '../Components/TodoIterable'

function TodoForm() {
    const [inputText, setInputText] = React.useState('')
    const [todos,setTodos] = React.useState([])

    React.useEffect(() => {
        const localStorageTodoItem = JSON.parse(localStorage.getItem('todos'))
        setTodos(localStorageTodoItem)
    }, [])

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const HanlderChanger = (e) => {
        setInputText(e.target.value)
    }
    const AddTodo = () => {
        if(inputText === "") {
            alert("Inter text in input form!")
        }
        else{
            setTodos([
                ...todos,
                {
                    id: Math.random() * 1,
                    title: inputText
                }
            ])
        }
    }

    const removeTodoItem = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    } 

    return (
    <div>
        <div className="textTodo">
            <h1>Add your todo</h1>
            <h2>Active tasks: {todos.length}</h2>
        </div>

        <div className="formTodo">
            <input 
            type="input" 
            onChange={HanlderChanger} 
            placeholder="Add your todo in input"
            ></input>
            <button onClick={AddTodo}>Add todo</button>
        </div>

        <TodoIterable 
        todos={todos} 
        id={todos.id} 
        setTodos={setTodos} 
        removeTodoItem={removeTodoItem}
        />

    </div>
    )
}

export default TodoForm
