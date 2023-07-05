import { object, string } from 'zod'

export const employeeFormSchema = object({
  fullname: string()
    .nonempty('Fullname is required')
    .max(32, 'Fullname must be less than 100 characters and include a space'),
  jobTitle: string().nonempty('Job title is required'),
  tenure: string().nonempty('Tenure is required'),
  gender: string().nonempty('Gender s required')
})
