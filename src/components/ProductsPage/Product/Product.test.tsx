import React from 'react'
import { render } from '@testing-library/react'
import { Product } from './Product'

describe('Componente de card de produtos', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(
      <Product
        image='/assets/images/c1.web'
        description='Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18'
        price='199,90'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
