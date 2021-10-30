import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './Header'
import TodoItem from './TodoItem'
import style from './Todo.module.sass'

const initialTask = [
  {
    id: uuid(),
    title: 'first task',
    isCompleted: false
  }
]

export default function Todo () {
  const [tasks, setTasks] = useState(initialTask)

  const addTask = taskTitle => {
    const newTask = {
      id: uuid(),
      title: taskTitle,
      isCompleted: false
    }
    setTasks(prevTask => [...prevTask, newTask])
  }

  const deleteTask = id =>
    setTasks(prevTask => prevTask.filter(item => item.id !== id))

  const isFinish = id => {
    setTasks(prevTask => {
      return prevTask.map(item => {
        if (item.id !== id) return item
        return { ...item, isCompleted: !item.isCompleted }
      })
    })
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>Todo List</h1>
        <Header handler={addTask} />
        <TodoItem
          deleteHandler={deleteTask}
          tasks={tasks}
          isFinish={isFinish}
        />
      </div>
    </div>
  )
}
