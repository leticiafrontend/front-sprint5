import React from 'react'
import { render } from '@testing-library/react'
import { MenuItem } from './MenuItem'

describe('Componente de item do menu', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(<MenuItem link='/home' label='Home' />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
