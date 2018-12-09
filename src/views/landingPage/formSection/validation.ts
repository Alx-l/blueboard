import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  fullName: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email()
    .required('Please enter your email'),
  password: yup.string().required('Please enter a password')
})
