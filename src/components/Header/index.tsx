import { HeaderBackground, HeaderContainer, HeaderContent, HeaderLogo } from "./styled";
import Logo from '../../assets/logo.svg'
import rightSide from '../../assets/rightBack.svg'
import leftSide from '../../assets/leftBack.svg'

export function Header () {
  return(
    <HeaderContainer>
      <HeaderContent>
        <HeaderBackground>
          <img src={leftSide} alt="background" />
        </HeaderBackground>

        <HeaderLogo>
          <img src={Logo} alt="logo" />
          <span>GITHUB BLOG</span>
        </HeaderLogo>

        <HeaderBackground>
          <img src={rightSide} alt="background" />
        </HeaderBackground>
      </HeaderContent>
    </HeaderContainer>
  )
}