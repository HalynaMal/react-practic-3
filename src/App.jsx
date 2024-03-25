import { useState } from 'react'
import initialTasks from './components/tasks.json'
import './App.css'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([initialTasks])
  const addTask = () => {
    
  }

  return (
      <div>
      <Form />
      <Filter />
      <TaskList tasks={ tasks} />
      </div>
          
  )
}

export default App
