import React from 'react'
import {NavLink} from 'react-router-dom'
import {ReactIcon, AngularIcon, VueIcon} from './imports'
import {ButtonsContainer, BtnIcon, BtnText} from './css/Nav.styled'

const Nav = () => {

  return (
    <ButtonsContainer>
        <NavLink to="/react">
            <BtnIcon src={ReactIcon} alt="React Icon" />
            <BtnText>React</BtnText>
        </NavLink>
        <NavLink to="/angular" >
            <BtnIcon src={AngularIcon} alt="Angular Icon" />
            <BtnText>Angular</BtnText>
        </NavLink>
        <NavLink to="/vue">
            <BtnIcon src={VueIcon} alt="Vue Icon" />
            <BtnText>Vue</BtnText>
        </NavLink>
    </ButtonsContainer>
  )
}

export default Nav