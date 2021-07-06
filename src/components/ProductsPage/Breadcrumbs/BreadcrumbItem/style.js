import styled from 'styled-components'

export const Item = styled.li`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;
  margin-right: 5px;
  &:not(:last-child):after {
    content: ' / ';
  }
  &:last-child {
    color: #261e1e;
  }
  &:not(:last-child):hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    display: none;
    &:last-child {
      display: block;
      text-align: center;
      font-size: 1.4375rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`

export const Link = styled.a``
