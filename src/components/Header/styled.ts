import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(7,20,34);
  background: radial-gradient(circle, rgba(7,20,34,1) 0%, rgba(7,20,34,1) 0%, rgba(13,39,66,1) 49%, rgba(7,20,34,1) 100%);
`
export const HeaderContent = styled.div`
  max-width: 1440px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    margin-top: -5rem;
  }

  span{
    color: ${(props) => props.theme.blue};
    font-size: 1.2rem;
    font-family: 'JetBrains Mono'
  }
`
export const HeaderBackground = styled.div`
  
  img{
    width: 400px;
    height: 250px;
  }
`