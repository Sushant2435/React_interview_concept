import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction, updateTodoAction } from './actions/todoActions';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [editTodo, setEditTodo] = useState(null);
    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        if (savedTodos.length > 0) {
            // Dispatch an action to load these todos into the Redux store
            savedTodos.forEach(todo => dispatch(AddTodoAction(todo.todo)));
        }
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTodo) {
            dispatch(updateTodoAction({ ...editTodo, todo }));
            setEditTodo(null);
        } else {
            dispatch(AddTodoAction(todo));
        }
        setTodo('');
    };

    const deleteTodo = (todo) => {
        dispatch(RemoveTodoAction(todo));
    };

    const startUpdateTodo = (item) => {
        setEditTodo(item);
        setTodo(item.todo);
    };

    return (
        <>
            <h1 className='text-3xl font-bold text-center'>Todo list using React Redux Toolkit</h1>
            <form onSubmit={handleSubmit} className='justify-center mt-4 flex gap-4'>
                <input
                    type='text'
                    name='todo'
                    value={todo}
                    className='rounded-lg h-10 w-[300px] px-3 font-semibold'
                    placeholder='Enter todo item'
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className='bg-pink-200 px-8 py-2 font-semibold rounded-lg cursor-pointer'>
                    {editTodo ? 'Update Todo' : 'Add Todo'}
                </button>
            </form>
            <div className='text-center mt-5'>
                {todos ? todos.map((item) => (
                    <ol key={item.id} className='list-decimal bg-yellow-100 rounded-lg mt-2 px-8 py-4 font-semibold w-1/3 m-auto'>
                        <li>
                            <div className='flex justify-between'>
                                <span>{item.todo}</span>
                                <div>
                                    <button onClick={() => deleteTodo(item)} className='text-white px-4 rounded-full ml-4 bg-red-300'>Delete</button>
                                    <button onClick={() => startUpdateTodo(item)} className='text-white px-4 rounded-full ml-4 bg-green-300'>Update</button>
                                </div>

                            </div>

                        </li>
                    </ol>
                )) : ""}
            </div>
        </>
    );
}

export default Todo;
