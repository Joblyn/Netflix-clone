import React from 'react';
import PropTypes from 'prop-types';
import { Container, Background, Logo, ButtonLink } from './styles/header';
import {Link} from 'react-router-dom';

export default function Header({ bg=true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : {children}; 
}
Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.node
}

Header.Frame =  function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Frame.propTypes = {
  children: PropTypes.node
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
} 
Header.ButtonLink.propTypes = {
  children: PropTypes.node
} 

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps}/>
    </Link>
  )
}
Header.Logo.propTypes = {
  to: PropTypes.node,
}