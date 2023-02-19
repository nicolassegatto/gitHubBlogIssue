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