import * as styles from './textInput.scss'

import * as React from 'react'
import { Field, FieldProps, ErrorMessage } from 'formik'
import { Option } from 'space-lift'

import { ErrorTransition } from '../errorTransition'

export function TextInput<T>(props: {
  name: keyof T
  placeholder?: string
  toUpperCase?: boolean
  replaceWith?: [RegExp, string]
}) {
  const { name, placeholder, toUpperCase, replaceWith } = props

  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => {
        function onChange(e: React.ChangeEvent<HTMLInputElement>) {
          const start = e.target.selectionStart || 0
          const end = e.target.selectionEnd || 0

          if (replaceWith) {
            const [regex, replacer] = replaceWith
            const replacedValue = e.target.value.replace(regex, replacer)
            e.target.value = replacedValue
            e.target.setSelectionRange(start, end)
          }
          if (toUpperCase) {
            const upperCasedValue = e.target.value.toUpperCase()
            e.target.value = upperCasedValue
            e.target.setSelectionRange(start, end)
          }
          field.onChange(e)
        }
        const hasError = Option.all([form.errors[name], form.touched[name]]).isDefined()

        const value = form.values[name]

        return (
          <div className={styles.root}>
            <input
              className={styles.input}
              {...field}
              onChange={onChange}
              type="text"
              value={value}
              placeholder={placeholder}
            />
            <ErrorTransition toggle={hasError}>
              <ErrorMessage name={String(name)} />
            </ErrorTransition>
          </div>
        )
      }}
    />
  )
}
