import { useCallback } from 'react'
import groupBy from 'lodash/groupBy'
import { type EmployeeInterface } from '../../DataServer/Data'

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

interface ReduceReturnType {
  labels: string[]
  data: number[]
};

export const useChartData = (employees: EmployeeInterface[], groupKey: string): any => {
  return useCallback(() => {
    const result = groupBy(employees, groupKey)
    const graphData = Object.entries(result).reduce((acc: ReduceReturnType, data) => {
      acc.labels?.push(data[0])
      acc.data.push(data[1].length)

      return acc
    }, { labels: [], data: [] })

    return {
      labels: graphData.labels,
      datasets: [
        {
          label: 'Number of employees by job title',
          data: graphData.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  }, [employees])
}
