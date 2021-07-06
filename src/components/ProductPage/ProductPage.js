import React, { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { Link, useHistory, useParams } from 'react-router-dom'

import { Breadcrumbs, Typography } from '@material-ui/core'
import {
  Container,
  Main,
  ImgProduct,
  DetailsProduct,
  Image,
  Title,
  Sizes,
  Text,
  ButtonSize,
  Checkout,
  Price,
  ButtonAddProduct,
  ButtonCancel,
} from './style'

import { useProducts } from '../../hooks/useProducts'

export const ProductPage = () => {
  const [product, setProduct] = useState({})
  const [sizeSelected, setSizeSelected] = useState(false)

  const { id } = useParams()
  const { products } = useProducts()
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()

  useEffect(() => {
    if (products) {
      if (id >= products.products.length) {
        history.push('/404')
      }
      setProduct(products.products[id])
    }
  }, [products])

  const addProduct = () => {
    enqueueSnackbar('Produto adicionado ao carrinho!', { variant: 'success' })
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }

  return (
    <Container>
      <Breadcrumbs>
        <Link to='/' color='inherit'>
          Home
        </Link>
        <Typography color='textPrimary'>{product.name}</Typography>
      </Breadcrumbs>
      <Main>
        <ImgProduct>
          <Image src={product.image} />
        </ImgProduct>
        <DetailsProduct>
          <Title>{product.name}</Title>
          <Sizes>
            <Text>
              Selecionar Tamanho: <span>{sizeSelected}</span>
            </Text>
            {product.sizes &&
              product.sizes.map((size) => (
                <ButtonSize
                  key={size}
                  isSelected={sizeSelected === size}
                  onClick={() => setSizeSelected(size)}
                >
                  {size}
                </ButtonSize>
              ))}
          </Sizes>
          <Checkout>
            <Price>R$ {product.price}</Price>
            <ButtonAddProduct
              disabled={sizeSelected === false}
              onClick={addProduct}
            >
              Adicionar à sacola
            </ButtonAddProduct>
            <Link to='/'>
              <ButtonCancel>Cancelar</ButtonCancel>
            </Link>
          </Checkout>
        </DetailsProduct>
      </Main>
    </Container>
  )
}
