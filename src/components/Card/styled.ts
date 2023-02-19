import styled from "styled-components";


export const CardContainer = styled.button`
  border: none;
  text-align: inherit;
  margin: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  outline: none;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  };
  

  cursor: pointer;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 0.5rem;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: hidden;
  &:hover{
    background-color: ${(props) => props.theme["base-profile"]}; 
  };
`

export const CardContent = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1{
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-title"]};
    display: flex;
    align-items: center;
    justify-content: start;
  }

  span{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 0.8rem;
    color: ${(props) => props.theme["base-span"]};
  }
`
export const CardDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
  font-family: 'jetBrains Mono', 'sansSerif';
`