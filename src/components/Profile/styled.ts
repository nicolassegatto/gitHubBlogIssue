import styled from "styled-components";

export const ProfileContainer = styled.div`
  min-height: 12rem;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  border-radius: 0.5rem;
  margin-top: -5rem;
  position: relative; 
`
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`
export const ProfileImage = styled.img`
  max-width: 8rem;
  max-height: auto; 
  border-radius: 0.5rem;
`
export const ProfileResume = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem 0 1rem 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`
export const ProfileName = styled.div`
  display: flex;
  justify-content: space-between;

  h1{
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.8rem;
  }

  a{
    display: flex;
    gap:  0.5rem;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    font-size: 0.8rem;
  }
`
export const ProfileDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
`
export const ProfileSocial = styled.div`
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
export const ProfileLoading = styled.span`

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 5rem;

  i{
    animation: spin-animation 1.5s infinite;
    color: ${(props) => props.theme["base-span"]};
  }

  @keyframes spin-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`