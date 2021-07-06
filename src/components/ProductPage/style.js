import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
  padding: 20px 0;

  nav a,
  nav p {
    font-size: 0.8125rem;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
  }
  nav a:hover {
    text-decoration: underline;
  }
`

export const Main = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
`

export const ImgProduct = styled.div`
  width: 100%;
  text-align: center;
`

export const Image = styled.img`
  width: 500px;
`

export const DetailsProduct = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const Sizes = styled.div``

export const Text = styled.p`
  font-size: 14px;
  color: #585858;
  padding: 20px 0;
`

export const ButtonSize = styled.button`
  background: #fff;
  color: #585858;
  border: 1px solid #585858;
  font-size: 14px;
  padding: 10px 0;
  width: 50px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #000;
      color: #fff;
      border: 1px solid #000;
    `}
`

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`

export const Price = styled.h1`
  font-size: 28px;
  color: #d0403a;
  font-weight: 500;
  text-align: center;
  padding: 20px 0;
`

export const ButtonAddProduct = styled.button`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 8px 22px;
  font-size: 0.9375rem;
  width: 100%;
  color: #fff;
  background-color: #008844;
  transition: background-color 0.3s ease-in;
  &:disabled {
    background-color: #8a8a8a;
    cursor: initial;
    box-shadow: 0px;
  }
  &:not(:disabled):hover {
    background-color: #034e28;
  }
`

export const ButtonCancel = styled.button`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 8px 22px;
  font-size: 0.9375rem;
  width: 100%;
  color: #fff;
  background-color: #d0403a;
  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: #8a2723;
  }
`
