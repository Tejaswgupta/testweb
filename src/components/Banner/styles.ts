import styled from "styled-components"

export const Container = styled.div`
  background: var(--gray-color-1);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 2vh;

  p {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--gray-color-15);
    font-family: Montserrat, serif;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    p {
      font-size: 75px;
    }
  }
`

export const KeepGoingButton = styled.a`
  color: var(--gray-color-15);
  font-size: 24px;
  height: 120px;
  display: flex;
  align-items: flex-end;

  svg {
    animation-name: bounce;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 40px;
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-60px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`

export const FrontPageTitle = styled.h1`
font-size: calc(5vw + 1rem);
font-weight: 600;
text-transform: uppercase;
letter-spacing: 10;
color:var(--gray-color-15);
margin-bottom: theme.spacing(1);
`

export const FrontPageSubtitle = styled.h2`
font-style: italic;
font-weight: 100;
font-size: calc(2vw + 1rem);
user-select: none;
color:var(--gray-color-15);
`

export const FrontPageContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
`

// background-image: url('/banner-bg.png');
