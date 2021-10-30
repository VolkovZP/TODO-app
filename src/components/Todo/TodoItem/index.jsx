import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Checkbox from '@mui/material/Checkbox'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import cx from 'classnames'
import style from './TodoItem.module.sass'

export default function TodoItem ({ tasks, deleteHandler, isFinish }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <div className={style.itemContainer}>
      {tasks.map(item => {
        return (
          <div key={item.id} className={style.item}>
            <Checkbox
              {...label}
              onChange={() => isFinish(item.id)}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
            <span
              className={cx(style.tz, {
                [style.tq]: item.isCompleted
              })}
            >
              {item.title}
            </span>
            <DeleteForeverIcon
              onClick={() => deleteHandler(item.id)}
              className={style.deleteItem}
            />
          </div>
        )
      })}
    </div>
  )
}
