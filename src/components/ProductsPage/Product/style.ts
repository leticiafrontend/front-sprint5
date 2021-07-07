import styled from 'styled-components'

export const ProductCard = styled.li`
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
`

export const Card = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;
  max-width: 250px;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const Description = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
`

export const Price = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`
