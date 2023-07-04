
interface Column {
  id: 'name' | 'jobTitle' | 'tenure' | 'gender'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

export const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'jobTitle', label: 'Job title', minWidth: 100 },
  {
    id: 'tenure',
    label: 'Tenure',
    minWidth: 170
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US')
  }
]

export const descendingComparator = (a: any, b: any, orderBy: any): (0 | -1 | 1) => {
  console.log(b[orderBy], a[orderBy], typeof b[orderBy])
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export type Order = 'asc' | 'desc'

export const getComparator = (order: Order, orderBy: any): any => {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy)
}

export function stableSort<T> (array: readonly T[], comparator: (a: T, b: T) => number): any {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}
