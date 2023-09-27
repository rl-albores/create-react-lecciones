import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Copyright = () => {
  return (
    <Typography variant="body2" color={'GrayText'} align="center">
      {'Copyright '}
      {<CopyrightIcon />}
      <Link color="inherit" href="https://imaginaformacion.com">
        Imagina Formación
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright
