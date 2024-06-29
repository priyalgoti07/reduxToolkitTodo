import { useState } from 'react';
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  return (
    <>
      <AddTodo todoToUpdate={todoToUpdate} setTodoToUpdate={setTodoToUpdate} />
      <Todos setTodoToUpdate={setTodoToUpdate} />
    </>
  )
}

export default App
