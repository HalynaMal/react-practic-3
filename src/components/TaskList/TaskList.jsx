import Task from '../Task/Task'

function TaskList(tasks) {
  return (
      <ul>
          {tasks.map((task) => {
              <li key={task.id}>
                  <Task data={task} />
              </li>
          })}
    </ul>
  )
}

export default TaskList