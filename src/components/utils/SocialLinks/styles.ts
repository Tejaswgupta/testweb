import styled from "styled-components"

export const Container = styled.div`
  & a:not(:last-child) {
    margin-right: 30px;
    cursor: pointer;
  }

  z-index: 2;
`

export const SocialLink = styled.a`
  color: var(--gray-color-15);
  font-size: 16px;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 24px;
  }
`
