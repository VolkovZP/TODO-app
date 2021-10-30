import * as Yup from 'yup'

export const ADD_TASK_SCHEMA = Yup.object({
  taskField: Yup.string()
    .min(5, 'Слишком просто! Введите больше символов!')
    .max(75, 'Сомневаюсь что ты дочитаешь такое длинное задание!')
    .required('Нельзя добавлять пустые задания! Скорее придумай и запиши его!')
})
