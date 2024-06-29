import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice'

const AddTodo = ({ todoToUpdate, setTodoToUpdate }) => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (todoToUpdate) {
            setInput(todoToUpdate.text)
        }
    }, [todoToUpdate])

    const addTodoHandler = (event) => {
        event.preventDefault()
        if (todoToUpdate) {
            dispatch(updateTodo({
                id: todoToUpdate.id,
                text: input
            }))
            setInput('')
            setTodoToUpdate(null);
        }
        else {
            if (input) {
                dispatch(addTodo(input))
                setInput('')
            }

        }
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 w-full max-w-lg text-center m-auto">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo