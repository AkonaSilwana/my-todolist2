import React from 'react'
import { ITask } from '../Interfaces';

interface Props {
  task : ITask;
  completeTask(taskNameToDelete: string): void;
}
const TodoTask =({task, completeTask}: Props) => {
  return (
    <div className='task'>
      <div className='content'>
      <span>{task.taskId}</span>
      <span>{task.taskName}</span> 
       </div>
    <button onClick={() => {completeTask(task.taskName)}}>Remove Task</button>
    
    </div>
  )
}

export default TodoTask