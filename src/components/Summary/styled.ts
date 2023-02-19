import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SummaryContainer = styled.div`
  min-height: 12rem;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  border-radius: 0.5rem;
  margin-top: -5rem;
  position: relative; 
`
export const SummaryContent = styled.div` 
  padding: 2rem;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex:1;
`
export const SummaryResume = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
export const SummaryButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SummaryBackButton = styled(NavLink)`
  display: flex;
  gap:  0.5rem;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
  font-size: 0.8rem;
  font-weight: bold;
`
export const SummaryGitButton = styled.a`
  display: flex;
  gap:  0.5rem;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
  font-size: 0.8rem;
`
export const SummaryName = styled.p`
  color: ${(props) => props.theme["base-title"]};
  font-size: 1.8rem;
  font-family: 'JetBrains Mono', 'sans-serif' ;
`
export const SummarySocial = styled.div`

  display: flex;
  gap:  2rem;
  align-items: center;
  justify-content: flex-start;
  font-family: 'JetBrains Mono', 'sans-serif' ;

  span{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-text"]};

    i{
      color: ${(props) => props.theme["base-label"]};
    }
  }

`