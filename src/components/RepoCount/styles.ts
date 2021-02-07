import styled from "styled-components"



export const RepoCountBox = styled.h2`
background: -webkit-linear-gradient(45deg , #12c2e9 , #c471ed , #f64f59 );
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
border: 2px solid var(--gray-color-15);
border-radius: 1.5rem;  
padding: 2rem;
text-align: center;
margin-top:4rem;
width:50rem;
font-size:3rem;

animation: gradient 20s ease infinite;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@media (max-width: 768px) {
    font-size: 1.75rem;
}
`




export const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

export const ShadowText = styled.h1`
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(1rem + 2vw);
  text-align: center;
  margin-top: 2vh;
  color: var(--color-primary);
  //color: transparent;
  //background-color: white;
  //background-clip: text;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    10% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    20% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary);
    }
    30% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    40% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    50% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    60% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    70% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    80% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary);
    }
    90% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    100% {
      text-shadow: none;
    }
  }
  
  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }
    40% {
      transform: translate(-12px, -12px);
    }
    50% {
      transform: translate(-12px, -12px);
    }
    60% {
      transform: translate(-12px, -12px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  

`



