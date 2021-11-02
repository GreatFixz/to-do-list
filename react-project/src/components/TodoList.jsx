import React, {useState, useEffect} from 'react'

export default function TodoList() {
    const [vl,setVl] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        const raw = localStorage.getItem('todos')
        setVl(JSON.parse(raw))
    }, [])
    
    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(vl))
    }, [vl])
    
    const addTodoList = (event) => {
        if(event.key === 'Enter'){
            setVl([
                ...vl,
                {
                    id: Date.now(),
                    title: value,
                    completed: false,
                }
            ])
            setValue('')
        }
    }

    const removeTodoItem = () => {
        setVl(vl.filter(todos => {
            return todos.id !== todos.id
        }))
    }
    return (
        <div>
            <div class="container">
                    <h1 className="fonts-todo">To-do list</h1>
                    <div class="add-elements">
                        <input className="add-todo-input" type="text" placeholder="Add element to to-do list" 
                        value={value} 
                        onChange={(event) => setValue(event.target.value)}
                        onKeyPress={addTodoList}
                        />
                    </div>
                    <div class="element-list">
                        {vl.map(t => (
                            <li className={"todo"} value={t.value} key={t.id}>
                            <label>
                              <input type="checkbox" onChange={() => setVl(vl.completed !== vl.completed)} />
                              <span value={t.title} className="fonts-todo">{t.title}</span>
                              <p className="material-icons red-text" onClick={removeTodoItem}>Delete</p>
                            </label>
                          </li>
                        ))}
                </div>
            </div>
        </div>
    )
}
