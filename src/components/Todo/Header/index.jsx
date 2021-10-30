import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { ADD_TASK_SCHEMA } from '../../../shemas'
import style from './Header.module.sass'
export default function Header ({ handler }) {
  const initial = {
    taskField: ''
  }
  return (
    <Formik initialValues={initial} validationSchema={ADD_TASK_SCHEMA}>
      {formikProps => {
        const { taskField } = formikProps.values
        return (
          <Form className={style.formContainer}>
            <Field
              name='taskField'
              onKeyPress={({ code }) => {
                if (code === 'Enter') {
                  if (!taskField) return
                  handler(taskField.trim())
                  formikProps.resetForm(initial)
                }
              }}
            />
            <ErrorMessage component='div' name='taskField' />
          </Form>
        )
      }}
    </Formik>
  )
}
