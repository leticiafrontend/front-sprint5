import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { FilterContextProvider } from '../../context/FilterContext'

export const NotFound = () => (
  <FilterContextProvider>
    <Header />
    <Container maxWidth='sm'>
      <Typography variant='h1' align='center'>
        404
      </Typography>
      <Typography variant='h2' align='center'>
        Essa página não existe, volte para o <Link to='/'>início</Link>!
      </Typography>
    </Container>
  </FilterContextProvider>
)
