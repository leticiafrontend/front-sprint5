import styled, { css } from 'styled-components'

export const LoadingBlock = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
  ${({ isLoading }) =>
    isLoading &&
    css`
      display: flex;
    `}
`
