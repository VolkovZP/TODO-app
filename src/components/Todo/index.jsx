import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './Header'
import TodoItem from './TodoItem'
import style from './Todo.module.sass'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const initialTask = [
  {
    id: uuid(),
    title: 'first task',
    isCompleted: false
  }
]

export default function Todo() {
  const [progress, setProgress] = React.useState(0);
  const [tasks, setTasks] = useState(initialTask)

  const addTask = taskTitle => {
    const newTask = {
      id: uuid(),
      title: taskTitle,
      isCompleted: false
    }
    setTasks(prevTask => [...prevTask, newTask])
  }

  const deleteTask = id => setTasks(prevTask => prevTask.filter(item => item.id !== id))

  const isFinish = id => {
    setTasks(prevTask => {
      return prevTask.map(item => {
        if (item.id !== id) return item
        return { ...item, isCompleted: !item.isCompleted }
      })
    })
  }
  const progres = id => {
    tasks.map(item => {
      if (item.id !== id) return item
      if (!item.isCompleted) {
        setProgress(progress + (100 / tasks.length))
      } else {
        setProgress(progress - (100 / tasks.length))
      }
    })
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>Todo List</h1>
        <Header handler={addTask} />
        <TodoItem
          progres={progres}
          deleteHandler={deleteTask}
          tasks={tasks}
          isFinish={isFinish}
        />
        <span>Progress : {progress.toFixed()}%</span>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
    </div>
  )
}
