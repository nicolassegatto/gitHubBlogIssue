import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 3rem;
`
export const SearchBarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SearchBarTitles = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
  }

  span{
    color: ${(props) => props.theme["base-span"]}
  }
`

export const SearchBarForm = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;
    outline: 1px solid ${(props) => props.theme['base-border']};
    font-size: 1rem;
    font-family: "jetBrains Mono", "sans-serif";
    
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['base-post']};
      border: 1px solid ${(props) => props.theme['base-border']};
      color: ${(props) => props.theme["base-title"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`