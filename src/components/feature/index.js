import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}
Feature.propTypes = {
  children: PropTypes.node
}

Feature.Title = function FeatuerTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}
Feature.Title.propTypes = {
  children: PropTypes.node
}

Feature.SubTitle = function FeatuerTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Feature.SubTitle.propTypes = {
  children: PropTypes.node
}
