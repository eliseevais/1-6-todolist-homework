// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

import {DataType} from "./App.tsx";

type TasksPropsType = {
  data: DataType
}

export const Tasks = (props: TasksPropsType) => {
  return (
    <div>
      <h1>
        {props.data.title}
      </h1>
      <ul>
        {props.data.tasks.map(task => {
          return (
            <li key={task.taskId}>
              <span>{task.title}</span>
              <span>{task.isDone}</span>
            </li>
          )
        })}
      </ul>

      <ul>
        {props.data.students.map(student => {
          return (
            <li>{student}</li>
          )
        })}
      </ul>
      {props.data.students[0]}
    </div>
  )
}
