import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Person from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import { Modal, Snackbar, Alert, Select, InputLabel, MenuItem } from '@mui/material'
import { uploadEmployeeData } from '../../Api/api'
import { type EmployeeInterface } from '../../DataServer/Data'

interface AddModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
}

export default function AddEmployeeModal ({ isModalOpen, handleModalClose }: AddModalProps): JSX.Element {
  const [isSuccess, setSuccess] = React.useState(false)
  const [isError, setError] = React.useState(false)
  const [gender, setGender] = React.useState<string | null>(null)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const newEmployee: EmployeeInterface = {
      name: data.get('fullname')! as string,
      jobTitle: data.get('jobTitle')! as string,
      tenure: data.get('tenure')! as string,
      gender
    }

    try {
      void uploadEmployeeData(newEmployee)
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const closeSuccessMessage = (): void => { setSuccess(false) }
  const closeErrorMessage = (): void => { setError(false) }
  return (
    <React.Fragment>
<Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Container component="main" maxWidth="xs" style={{ backgroundColor: '#fff' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add new employee
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="full-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="jobTitle"
                  label="Job title"
                  name="jobTitle"
                  autoComplete="job-title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tenure"
                  label="Tenure"
                  name="tenure"
                  autoComplete="tenure"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={(changeEvent) => { setGender(changeEvent.target.value) }}
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Unknown'}>Unknown</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      </Modal>
      <Snackbar open={isSuccess} autoHideDuration={6000} onClose={closeSuccessMessage}>
        <Alert onClose={closeSuccessMessage} severity="success" sx={{ width: '100%' }}>
          A new employee has been added
        </Alert>
      </Snackbar>
      <Snackbar open={isError} autoHideDuration={6000} onClose={closeErrorMessage}>
        <Alert onClose={closeErrorMessage} severity="success" sx={{ width: '100%' }}>
          There was an error while uploading employee data
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}
