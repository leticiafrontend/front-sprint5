import React from 'react'
import { render } from '@testing-library/react'
import { FilterItem } from './FilterItem'

describe('Componente de item do filtro', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(<FilterItem label='Tamanho' />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
