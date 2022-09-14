
import React, {ChangeEvent, FC, useState} from 'react';

import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';


const App:FC =() =>{

  const [task, setTask] = useState<string>('')
  const [taskId, setTaskId] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
     if(event.target.name ==="task") {
        setTask(event.target.value)
     } else{
      setTaskId(Number(event.target.value))
     }
    
  }

  const addTask = () =>{

    const newTask = {taskId: taskId, taskName:task}
    setTodoList([...todoList, newTask])
    setTask("");
    setTaskId(0);
  }

  const completeTask = (taskNameToDelete: string) =>{
         setTodoList(todoList.filter((task) => {
          return task.taskName !== taskNameToDelete
         }))
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>My Todo List</h1>
       
       <input 
        type="text"
      name='id'
      placeholder='Deadline'
      onChange={handleChange}
      />
     <input 
      type="text"
      name='task'
      placeholder='Task'
      onChange={handleChange}
      />
       <button onClick={addTask}>ADD TASK</button> 

     
     </div>
      <div className='todo'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask}/>
      })}
      </div>
    </div>
  );
}

export default App;
