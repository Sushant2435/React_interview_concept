import React, { useEffect, useState } from 'react'

const Todo1 = () => {
    const [input, setinput] = useState('')
    const [todo, setTodo] = useState([])
    const [todoUpdate, setTodoUpdate] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)

    useEffect(() => {
        const storedTodo = JSON.parse(localStorage.getItem('Todo')) || [];
        if (storedTodo.length) {
            setTodo(storedTodo);
        }
    }, [])

    useEffect(() => {
        if (todo.length) {
            localStorage.setItem('Todo', JSON.stringify(todo));
        }
    }, [todo])

    const handleChange = (e) => {
        setinput(e.target.value);
    }

    const AddInTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            if (todoUpdate) {
                const updateTodos = todo.map((item, index) => index === currentIndex ? input : item)
                setTodo(updateTodos);
                setTodoUpdate(false)
                setCurrentIndex(null)
            } else {
                setTodo([...todo, input])
            }
            setinput('')
        }
    }
    const deleteTodo = (index) => {
        const filterList = todo.filter((_, i) => i !== index)
        setTodo(filterList)
    }
    const updateTodo = (index) => {
        const updateTodo = todo[index]
        setinput(updateTodo)
        setTodoUpdate(true)
        setCurrentIndex(index)
    }
    return (
        <div className='bg-gray-400 py-10 text-center'>
            <h1 className='text-black font-bold text-3xl pb-10'>Todo list using React hooks</h1>
            <div className='flex gap-4 justify-center'>
                <input type="text" onChange={handleChange} value={input} className='border border-gray-50 rounded-xl bg-white p-2 w-1/3' placeholder='Enter todo Data' />
                <button onClick={AddInTodo} className="bg-red-200 p-2 rounded-xl">{todoUpdate ? 'UpdateTodo' : 'AddTodo'}</button>
            </div>
            {todo.map((item, index) => (
                <div key={index} className='flex bg-red-100 w-1/3 justify-between m-auto px-2 text-lg mt-4 p-2 rounded-xl'>
                    <li className='list-none'>{index + 1}. {item}</li>
                    <div className='flex gap-4'>
                        <button onClick={() => updateTodo(index)} className='bg-green-400 px-3 rounded-xl'>Edit</button>
                        <button onClick={() => deleteTodo(index)} className='bg-red-400 px-3 rounded-xl'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo1
