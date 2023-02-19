import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const CardGridContent = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding-bottom: 5rem;
`

export const CardNoContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  opacity: 0.3;
  padding-top: 5rem;
`