import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { type EmployeeInterface } from '../DataServer/Data'

const URL = 'http://localhost:3000/employees'

export const fetchEmployees = async (): Promise<any> => {
  return await axios.get(URL)
}

export const uploadEmployeeData = async (payload: EmployeeInterface): Promise<any> => {
  return await axios.post(URL, { id: uuidv4(), ...payload })
}
