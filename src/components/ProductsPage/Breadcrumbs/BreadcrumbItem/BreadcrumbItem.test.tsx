import React from 'react'
import { render } from '@testing-library/react'
import { BreadcrumbItem } from './BreadcrumbItem'

describe('Componente de item do breadcrumbs', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(<BreadcrumbItem link='/home' name='Home' />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
