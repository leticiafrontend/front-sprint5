import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useLoading } from '../../hooks/useLoading'
import { LoadingBlock } from './style'

export const Loading = () => {
  const { isLoading } = useLoading()

  return (
    <LoadingBlock isLoading={isLoading}>
      <CircularProgress color='primary' />
    </LoadingBlock>
  )
}
