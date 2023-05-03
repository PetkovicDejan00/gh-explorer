import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {ReactIcon, AngularIcon, VueIcon} from './imports'
import {NavContainer, BtnIcon, BtnText} from './css/Nav.styled'

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
  }, [width])

  return (
    <NavContainer>
        <NavLink to="/react">
            <BtnIcon src={ReactIcon} alt="React Icon" />
            {width > 400 && <BtnText>React</BtnText>}
        </NavLink>
        <NavLink to="/angular" >
            <BtnIcon src={AngularIcon} alt="Angular Icon" />
            {width > 400 && <BtnText>Angular</BtnText>}
        </NavLink>
        <NavLink to="/vue">
            <BtnIcon src={VueIcon} alt="Vue Icon" />
            {width > 400 && <BtnText>Vue</BtnText>}
        </NavLink>
    </NavContainer>
  )
}

export default Nav