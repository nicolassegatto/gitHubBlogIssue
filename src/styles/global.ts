import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-input']};
  }

  body{
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
    line-height: 160%;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['base-input']};
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['base-border']};
    border-radius: 0.5rem;
  }
`
