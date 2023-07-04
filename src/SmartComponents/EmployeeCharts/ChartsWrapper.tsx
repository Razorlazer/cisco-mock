import { Grid } from '@mui/material'
import { ByJobTitle } from './ByJobTitle'
import React from 'react'
import { ByGender } from './ByGender'

const ChartsWrapper = (): JSX.Element => {
  return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
                <ByJobTitle />
            </Grid>
            <Grid item xs={12} md={6}>
              <ByGender />
            </Grid>
        </Grid>
  )
}

export default ChartsWrapper
