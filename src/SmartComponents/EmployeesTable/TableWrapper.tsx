import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import { EmployeeTable } from './EmployeeTable'
import { EmployeesContext } from '../../App'
import AddEmployeeModal from '../EmployeeModals/AddEmployeeModal'

export const TableWrapper: React.FunctionComponent = (): JSX.Element => {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const employees = React.useContext(EmployeesContext)

  const handleAddModalToggle = (): void => {
    setAddModalOpen((prev) => !prev)
  }
  return (
        <Stack spacing={4}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button onClick={handleAddModalToggle}>Add Employee</Button>
          </Stack>
            <EmployeeTable employees={employees}/>
            <AddEmployeeModal isModalOpen={addModalOpen} handleModalClose={handleAddModalToggle}/>
        </Stack>
  )
}
