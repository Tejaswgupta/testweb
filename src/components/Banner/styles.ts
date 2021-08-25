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

  p {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--gray-color-15);
    font-family: Montserrat, serif;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: ${(props) => props.theme.screens.medium}) {
    flex-direction: row;
    p {
      font-size: 75px;
    }
  }
`;


export const FrontPageTitle = styled.h1`
font-size: calc(5vw + 1rem);
font-weight: 600;
text-transform: uppercase;
letter-spacing: 10;
color:var(--gray-color-15);
margin-bottom: 1vh;
`

export const FrontPageSubtitle = styled.h2`
font-style: italic;
font-weight: 100;
font-size: calc(2vw + 1rem);
user-select: none;
color:var(--gray-color-15);
padding-bottom:5vh;
`

export const FrontPageContainer = styled.div`
height:20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ComingSoonContainer = styled.div`
  font-weight: 100;
  font-size: calc(1vw + 1rem);
  user-select: none;
  color: var(--gray-color-15);
  padding-bottom: 5vh;
`;

export const LandingImage = styled.img`
height: 60vh;
margin-left: 3vw;
`;