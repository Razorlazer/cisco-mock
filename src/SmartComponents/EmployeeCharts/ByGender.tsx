import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Stack, Typography } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import { EmployeesContext } from '../../App'
import { useChartData, chartOptions } from './helpers'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const ByGender = (): JSX.Element => {
  const employees = React.useContext(EmployeesContext)
  const chartData = useChartData(employees, 'gender')
  const data = chartData()
  return (<Stack spacing={4}>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        >
            <Typography variant="h4" component="h6" gutterBottom>
                Employees by gender
            </Typography>
        </Stack>
        <Bar options={chartOptions} data={data} />
    </Stack>
  )
}
