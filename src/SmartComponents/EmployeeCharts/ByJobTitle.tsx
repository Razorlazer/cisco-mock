import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { EmployeesContext } from '../../App'
import { useChartData, chartOptions } from './helpers'
import { type EmployeeInterface } from '../../DataServer/Data'
ChartJS.register(ArcElement, Tooltip, Legend)

export const ByJobTitle = (): JSX.Element => {
  const employees: EmployeeInterface[] = React.useContext(EmployeesContext)
  const chartData = useChartData(employees, 'jobTitle')
  const data = chartData()
  return (
    <Stack spacing={4}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
          <Typography variant="h4" component="h6" gutterBottom>
            Employees by job title
          </Typography>
      </Stack>
      <Pie data={data} options={chartOptions}/>
    </Stack>
  )
}
