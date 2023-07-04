import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Grid } from '@mui/material'
import Header from './PresentationalComponents/Header'
import { EmployeesTable } from './SmartComponents/EmployeesTable'
import ChartsWrapper from './SmartComponents/EmployeeCharts/ChartsWrapper'
import { fetchEmployees } from './Api/api'
import { type EmployeeInterface } from './DataServer/Data'

const Copyright: React.FunctionComponent = (): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Muslimjon Kholjuraev
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export const EmployeesContext = React.createContext<EmployeeInterface[]>([])

const App: React.FunctionComponent = (): JSX.Element => {
  const [employees, setEmployees] = React.useState([])
  const getEmployees = async (): Promise<void> => {
    await fetchEmployees().then((result) => {
      setEmployees(result.data)
    })
  }
  React.useEffect(() => {
    void getEmployees()
  }, [])

  return (
    <React.Fragment>
      <EmployeesContext.Provider value={employees}>
        <Header></Header>
        <Container maxWidth="lg">
          <Box sx={{ my: 6 }}>
            <Grid container spacing={5} direction={'column'}>
              <Grid item>
                <Typography variant="h4" component="h1" gutterBottom>
                  Corporate Employees
                </Typography>
                <EmployeesTable />
              </Grid>
              <Grid item>
                <ChartsWrapper/>
              </Grid>
            </Grid>
          </Box>
          <Copyright />
        </Container>
      </EmployeesContext.Provider>
    </React.Fragment>
  )
}
export default App
