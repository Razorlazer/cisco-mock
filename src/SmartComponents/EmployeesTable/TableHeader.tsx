import React from 'react'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import type { Order } from './EmployeeTableAssets'
import { columns } from './EmployeeTableAssets'
import { visuallyHidden } from '@mui/utils'
import { type EmployeeInterface } from '../../DataServer/Data'

interface TableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof EmployeeInterface) => void
  order: Order
  orderBy: string
}

const EmployeeTableHead = (props: TableProps): JSX.Element => {
  const { order, orderBy, onRequestSort } =
      props
  const createSortHandler =
      (property: keyof EmployeeInterface) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property)
      }

  return (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              sortDirection={orderBy === column.id && column.id !== 'tenure' ? order : false}
            >
              {column.id !== 'tenure' // Sorting does not handle integer columns yet because how js treats numbers as strings
                ? <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id
                  ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                    )
                  : null}
              </TableSortLabel>
                : column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
  )
}

export default EmployeeTableHead
